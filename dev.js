
const express = require('express');
const app = express();

const userRouter = require("./src/routes/userRoutes");


app.set("/users",userRouter);
app.set("/note",noteRouter);

app.get("/",(req,res) => {
    res.send('hello');
});

app.listen(5300,()=>{
    console.log("server started on the port number.5300");    
});



