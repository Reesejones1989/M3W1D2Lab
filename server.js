const express = require('express');
const app = express();
const port = 3000;


app.get('/greeting', (req,res) => {
    res.send(`<h1>Hello, Stranger</h1>`)
})

app.get('/tip', (req,res) => {
    res.send(`<h2>Tip Calculator</h2>`)
})

app.get('/tip/:total', (req,res) => {
    console.log(req.params)
    res.send(`Bill Total: ` +req.params.total)
})

app.get('/tip/:total/:tipPercentage', (req,res) => {
    res.send(`Tip Amount: ` + ((req.params.tipPercentage / 100) * req.params.total))
})

app.get('/greeting/:name', (req,res) => {
//    console.log(req.params)
    res.send(req.params.name + `! It's so great to see you!`)
})

app.listen(3000, function(){
    console.log('Listening on Port 3000')
})