/**
 * imports
 */
const mongoose = require('mongoose')
const Shema  = mongoose.Schema

/**
 * model shema
 */
const ProductShema = Shema({
    name: String,
    price: { type: Number, default: 0 },
    category: { type: String, enum: ['foods', 'technology', 'home'] },
    image: String
})

/**
 * export the model
 */
module.exports = mongoose.model('Product', ProductShema)