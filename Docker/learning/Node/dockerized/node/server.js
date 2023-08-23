const express = require('express');
const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT} = require("./config/config")
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


// mongoose
// .connect("mongodb://princewillopah:PRINCEWILL1980@mongo:27017/?authSource=admin")
// .then(()=> console.log("successful connctedto DB"))
// .catch((e)=>console.log(e))

// const mongoURL = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mongo:27017/?authSource=admin`;

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

mongoose
        .connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        })
        .then(() => console.log("succesfully connected to DB"))
        .catch((e) => {
        console.log(e); 
});


app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
