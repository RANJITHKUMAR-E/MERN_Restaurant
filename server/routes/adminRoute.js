const express=require("express");
const User=require("../models/userModel");
const Pizza=require("../models/pizzaModel")
const router=express.Router();
const db=require("../db")


router.get("/getpizzas", async (req, res) =>
{
    try {
        const pizzas=await Pizza.find({}).sort({"name": 1})
        res.send(pizzas)
    } catch(error) {
        return res.status(400).json({message: error})
    }
})

router.delete("/deletepizza/:id", async (req, res) =>
{
    const id=req.params.id
    try {
        const result=await Pizza.deleteOne({_id: id});
        res.send(result)
    } catch(error) {
        return res.status(400).json({message: error})
    }
})

router.post("/addpizza", async (req, res) =>
{
    const newPizza=new Pizza(req.body)
    try {
        await newPizza.save()
        res.status(200).json({message: "Pizza added succesfully"})
    } catch(error) {
        return res.status(400).json({message: error});
    }
})

router.get("/getUsers", async (req, res) =>
{
    try {
        const users=await User.find({}).sort({"name": 1})
        res.send(users)
    } catch(error) {
        return res.status(400).json({message: error})
    }
})

router.delete("/deleteUsers/:id", async (req, res) =>
{
    const id=req.params.id
    try {
        const result=await User.deleteOne({_id: id});
        // console.log(result+"action")
        res.send(result)
    } catch(error) {
        return res.status(400).json({message: error})
    }
})

module.exports=router