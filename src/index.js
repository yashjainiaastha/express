const express = require('express');
const app = express();

const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
//const dotenv = require("dotenv");
const cors = require("cors");

//dotenv.config();

const mongoose = require("mongoose");

app.use(express.json());

app.use(cors());

app.use("/users",userRouter);
app.use("/note",noteRouter)


app.get("/",(req,res) => {
    res.send('Task Manager');
});

//const PORT = process.env.PORT || 3200;

mongoose.connect("mongodb+srv://yashj8281:yashjain@cluster0.bnhpdt6.mongodb.net/")
.then(() => {
    app.listen(3200, ()=>{
        console.log("Server started on the port number: 3200" ); 
    });
})
.catch((error) => {
    console.log(error);
})
