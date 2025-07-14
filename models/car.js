const mongoos = require('mongoose')

const carSchema = new mongoos.Schema(
  {
    name: String,
    price: String,
    owners: String,
    manufacturer: String,
    description: String,
    model: String,
    isAccidented: Boolean
  }
)

const Car = mongoos.model('Car', carSchema)

module.exports = Car