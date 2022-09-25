const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { readdirSync } = require('fs');
const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

// routes
readdirSync("./routes").map((r) => app.use('/' , require("./routes/" + r)));


// database
mongoose.connect( process.env.DATABASE_URL, {
    useNewUrlParser: true
}).then(()=> console.log('database connected successfully'))
.catch((err)=> console.log('err connecting to db : ', err))


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`listening at port ${port}`);
})