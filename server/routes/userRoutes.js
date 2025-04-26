import express from 'express'
const router = express.Router()
import { signUpHandler, sendOTPhandler } from '../controller/userController.js'


router.post('/signup', signUpHandler)
router.post('/sendOTP', sendOTPhandler)


export default router