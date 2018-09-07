//requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//uses
app.use(express.static('server/public'));
app.use( bodyParser.urlencoded({extended: true}));

//globals
const port = 5000;

//routes

app.listen(port,()=>{
    console.log('You are listening to port', port);
})

app.get('/messages',(req,res)=>{
    console.log('in /messages');
    res.send('woof');
})