const express=require('express');
const router=express.Router();
const {v4: uuid}=require("uuid")
const stripe=require("stripe")("sk_test_51MQjvISEn4QvMxHGyMhHoI0VR5l6TiBc92oGQNaNgibf12O8Iuvirp1jHIQ1KJJwBdAnMV4fMCruhCeqwYMNW2do00jwsBQN16")
const Order=require("../models/orderModel")
router.post("/placeOrder", async (req, res) =>
{
    const {token, amount, curUser, cartItems}=req.body
    try {
        const neworder=new Order({
            name: curUser.name,
            email: curUser.email,
            userid: curUser._id,
            orderItems: cartItems,
            shippingAddress: {
                street: token.card.address_line1,
                city: token.card.address_city,
                country: token.card.address_country,
                pincode: token.card.address_zip
            },
            orderAmount: amount,
            transactionId: token.card.id
        })

        neworder.save()
        const customer=await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        const payment=await stripe.charges.create({
            amount: amount*100,
            currency: "INR",
            customer: customer.id,
            receipt_email: token.email
        }, {
            idempotencyKey: uuid()
        })

        if(payment) {
            const neworder=new Order({
                name: curUser.name,
                email: curUser.email,
                userid: curUser._id,
                orderItems: cartItems,
                shippingAddress: {
                    street: token.card.address_line1,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    pincode: token.card.address_zip
                },
                orderAmount: amount,
                transactionId: payment.source.id
            })

            neworder.save()
            res.send("Payment done")
        }
        else {
            res.send("Payment failed !!")
        }
    } catch(error) {

        return res.status(400).json({message: "Something went wrong"+error})

    }
});

router.post("/getuserorders", async (req, res) =>
{
    const {userid}=req.body
    try {
        const orders=await Order.find({userid: userid}).sort({_id: -1})
        res.send(orders)
    } catch(error) {
        return res.status(400).json({message: "Something went wrong"+error});
    }
})

module.exports=router