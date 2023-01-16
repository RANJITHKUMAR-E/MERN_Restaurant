const {default: mongoose}=require("mongoose");
const {object}=require("prop-types");
const {number}=require("prop-types");

const orderSchema=mongoose.Schema({
    name: {type: String, require},
    email: {type: String, require},
    userid: {type: String, require},
    orderItems: [],
    shippingAddress: {type: Object, require},
    orderAmount: {type: Number, require},
    isDeleivered: {type: Boolean, require, default: false},
    transactionId: {type: String, require}
}, {timestamps: true});

module.exports=mongoose.model('orders', orderSchema)

