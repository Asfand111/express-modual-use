
const express = require("express");
const app = express();
const path = require("path");
const { title } = require("process");
port = 80;

// For saving static files
app.use('/static', express.static('static'));

// set the templete enine as pug
app.set('view engine', 'pug')

// set the views directory
app.set('views', path.join(__dirname, 'path'))

app.get("/demo", (req, res)=>{
    res.status(200).render('demo', {title: 'Hy Asfand', message: 'My name is Asfand Khan'})
});
app.get("/", (req, res)=>{
    res.status(200).send("This is my homepage first express app with Harry")
});

app.get("/about", (req, res)=>{
    res.send("This is my aboutpepge first express app with Harry")
});

app.get("/Services", (req, res)=>{
    res.send("This is my services page first express app with Harry")
});

app.get("/Asfand", (req, res)=>{
    res.status(404).send("This page is not found")
});

app.post("/Asfand", (req, res)=>{
    res.status(404).send("This page is not found")
});

app.post("/Post", (req, res)=>{
    res.send("This is my post page first express app with Harry")
});

app.listen(port, ()=>{
    console.log(`This app successfully started on port ${port}`)
})