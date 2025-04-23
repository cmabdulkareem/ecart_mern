import express from 'express'
const router = express.Router()
import { signUpHandler } from '../controller/userController.js'


router.post('/signup', signUpHandler)


export default router