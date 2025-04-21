import express from 'express'
import {adminSignupHandler} from '../controller/userController.js'
const router = express.Router()

router.get('/', (req, res)=>{
    res.send("Hi from admin route")
})

router.post('/signup', adminSignupHandler)

export default router