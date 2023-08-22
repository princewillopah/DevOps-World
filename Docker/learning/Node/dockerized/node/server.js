const express = require('express');

const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose
.connect("mongodb://princewillopah:PRINCEWILL1980@mongo:27017/?authSource=admin")
.then(()=> console.log("successful connctedto DB"))
.catch((e)=>console.log(e))

app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
