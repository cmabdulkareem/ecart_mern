import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    itemName: {type: String},
    itemDesc: {type: String},
    itemPrice: {type: String}
})

const ProductModel = mongoose.model('product', ProductSchema)

export default ProductModel