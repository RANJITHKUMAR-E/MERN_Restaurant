const express=require("express");
const {config}=require("react-transition-group");
const pizza = require('./models/pizzaModel')

const db=require("./db")

const app=express();
app.use(express.json());

var cors = require('cors')
app.use(cors())

const pizzaRoute=require("./routes/pizzaRoute")
const userRoute=require("./routes/userRoute")
const orderRoute=require("./routes/ordersRoute")
const adminRoute=require("./routes/adminRoute")


app.use('/api/pizzas/',pizzaRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/', orderRoute)
app.use('/api/admin/', adminRoute)

app.get("/", (req, res) =>
{
    res.send("Server is working 😉"+port);
});

app.get("/getpizzas", async (req, res) =>
{
     pizza.find({}, (err, docs) =>
    {
        if(err) {
            console.log(err)
        }
        else {
            res.send(docs)
        }
    })
})
// {
//     const entry=await new pizza({
//     name: "PIZZA02",
//         varients: [ "small", "medium", "large" ],
//         prices: [ {
//             small: 200,
//             medium: 350,
//             large: 400,
//         },
//         ],
//         category: "non-veg",
//         image: "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(13).png",
//         desc: "Mmm! Barbeque chicken with a topping of golden corn loaded with extra cheese. Worth its weight in gold!",
// })
//     // await entry.save();
//     // console.log("End");
    
//     pizza.find({}, (err, docs) =>
//     {
//         if(err) {
//             console.log(err)
//         }
//         else {
//             res.send(docs)
//         }
//     })
// })

const port=process.env.PORT||5000;
app.listen(port, () => 'Server is running !!');