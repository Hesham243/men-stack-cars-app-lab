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
  req.body.isAccidented === 'on' ? req.body.isAccidented = true : req.body.isAccidented = false

  const addedCar = await Car.create(req.body)
  console.log('Added car:', addedCar) // Testing
  res.redirect('/')
})


router.get('/:carId', async (req, res) => {
  const foundCar = await Car.findById(req.params.carId)
  res.render('cars/show.ejs', {foundCar: foundCar})
})


router.delete('/:carId', async (req, res) => {
  await Car.findByIdAndDelete(req.params.carId)
  res.redirect('/cars/')
})


router.get('/:carId/edit', async (req, res) => {
  const foundCars = await Car.findById(req.params.carId)
  res.render('cars/edit.ejs', {foundCar: foundCars})
})


router.put('/:carId', async (req, res) => {
  req.body.isAccidented === 'on' ? req.body.isAccidented = true : req.body.isAccidented = false

  await Car.findByIdAndUpdate(req.params.carId, req.body)
  res.redirect(`/cars/${req.params.carId}`)
})


module.exports = router