const express = require('express')
const path = require('path')
const app = express()

// Routes
function index(req, res){
    res.sendFile(__dirname + '/static/index.html')
}

function login(req, res){
    res.sendFile(__dirname + '/static/login.html')
}

function plan(req, res){
    res.sendFile(__dirname + '/static/plan.html')
}

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', index)
app.get('/login', login)
app.get('/plan', plan)
app.listen(3000)