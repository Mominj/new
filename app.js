const express = require('express');

const app = express();

app.get('/home',(req,res)=>{
    res.send("ok working");
})

app.listen(5000,()=>{
    console.log('run on port 5000');
})