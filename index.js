const express = require('express')
const mongoose = require('mongoose'); 
const app = express()

app.listen(5000, () => {
    console.log('Server is running on port 5000')
});

app.get('/', (req, res) => {
    res.send('Hello from Node API');
});


mongoose.connect("mongodb+srv://plasmazen:ESVIyPWGDQLTJMXf@statsapptest.f3kco8v.mongodb.net/?retryWrites=true&w=majority&appName=statsapptest")
.then(() => {
    console.log("Connected to database!");
})
.catch(() => {
    console.log("Connection failed!");
});