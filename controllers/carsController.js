const express = require('express')
const router = express.Router()
const Car = require('../models/car.js')


router.get('/', async (req, res) => {
  const allCars = await Car.find()
  console.log('All cars:', allCars) // Testing
  res.render('cars/index.ejs', { allCars: allCars})
})


router.get('/new', (req,res) => {
  res.render('cars/new.ejs')
})


router.post('/', async (req, res) => {
  if (req.body.isAccidented === 'on'){
    req.body.isAccidented = true
  } else {
    req.body.isAccidented = false
  }

  const addedCar = await Car.create(req.body)
  console.log('Added car:', addedCar) // Testing
  res.redirect('/')
})


module.exports = router