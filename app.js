const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send("hello home page");
});

app.get('/example',(req,res) => {
    res.send("this is example page");
});

app.get('/about',(req,res) => {
    res.send("this is about page");
});

app.get('/help',(req,res) => {
    res.send("this is help page");

});

app.listen(3000);

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

app = express();
dotenv.config({path:"config.env"})
const PORT = process.env.PORT || 8080

app.use(morgan('tiny'));

app.get('/',(req,res) => {
    res.send("Task Manager");
});
app.listen(PORT,()=> {console.log('Server is running on http://localhost:${PORT}')});


