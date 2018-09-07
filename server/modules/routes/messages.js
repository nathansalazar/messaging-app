// a router that uses express, known as an "Express Router"
const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    console.log('/messages get router hit');
    res.send('whinney');
})

// modules exports
module.exports = router;