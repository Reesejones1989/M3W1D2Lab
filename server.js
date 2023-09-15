const express = require('express');
const randomPhrases = require('./models/randomPhrases');
const app = express();
const port = 3000;


app.get('/greeting', (req,res) => {
    res.send(`<h1>Hello, Stranger</h1>`)
})

app.get('/tip', (req,res) => {
    res.send(`<h2>Tip Calculator</h2>`)
})

app.get('/magic', (req,res) => {
    res.send(`<h1>Random phrase</h1>`)
})

app.get('/magic/:randomPhrase', (req,res) => {
    // console.log(res.send(randomPhrases[req.params.randomPhrase]))
    console.log(randomPhrases)
    var onePhraseatRandom = randomPhrases[Math.floor(Math.random()*randomPhrases.length)]
    // console.log(randomPhrases[Math.floor(Math.random()*randomPhrases.length)])
    res.send(`<h1> ${req.params.randomPhrase} <br> ${onePhraseatRandom} </h1>`
)})

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