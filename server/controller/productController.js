import Product from '../models/productModel.js'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const addProductHandler = async (req, res)=>{
    try {
        const {itemName, itemDesc, itemPrice} = req.body

        if(!itemName || !itemDesc || !itemPrice){
            return res.status(400).json({error: "All fields are required"})
        }else{
            const product = await Product.create({itemName, itemDesc, itemPrice })
            const {itemImage} = req.files
            itemImage.mv(path.join(__dirname, '../public/images/products', `${product._id}.jpg`))
            res.status(200).json({message: "New product added"})
        }
    } catch (error) {
        res.status(500).json({error: "Internal server error"})
    }
}

export const findAllProductsHandler = async (req, res)=>{
    try {
        const products = await Product.find({}).lean()
        res.status(200).json({message: products})
    } catch (error) {
        res.status(500).json({error: "Internal server error"})
    }
}