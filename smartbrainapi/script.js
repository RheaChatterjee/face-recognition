//import express package 
const express = require('express'); 

//create app by running express 
const app = express(); 

app.get('/', (req, res) => {
    res.send('this is working');
})

app.listen(3000, ()=>{
    console.log('app is running on port 3000');
})

/*
/API PLAN 
/--> res = this is working 
/signin --> POST = success/fail
/register --> POST = new user object
/profile/:userId --> GET  = user 
/image --> PUT  = user or count updated 
*/