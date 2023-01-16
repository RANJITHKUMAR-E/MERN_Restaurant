const {default: mongoose}=require("mongoose");

var mongoURL='mongodb+srv://ranjith:ranjith@cluster0.gvlusqx.mongodb.net/MERN_Food';

mongoose.set("strictQuery", false);
mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true})

var db=mongoose.connection;

db.on('connected', () =>
{
    console.log('MongoDB Connected Successfully 😉🎉');
})

db.on('error', () =>
{
    console.log("Mongo DB connection failed, Keep Trying !!")
})

module.exports=mongoose