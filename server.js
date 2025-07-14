const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const path = require("path");
const mongoose = require('mongoose')


// MIDDLEWARE
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));


// Controllers
const carsController = require('./controllers/carsController')

app.get ('/', (req, res) => {
  res.render('index.ejs')
})

app.use('/cars', carsController)


// Database connection
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});


app.listen('3000', () => {
  console.log('Server is running on 3000...')
})