const express = require('express')
const cors = require('cors')
const path = require ('path')
const dotenv = require ('dotenv')
const MongoClient = require('mongodb').MongoClient;

dotenv.config({
    path: './.env',
});

const PORT = process.env.PORT || 5050;

// Connection to MongoDB
const uri = process.env.MONGO_URI;

MongoClient.connect(url)
.then (client => {
    console.log("connectend to MongoDB");

    app.listen(PORT, () => console.log("Server is listening no port"))
})