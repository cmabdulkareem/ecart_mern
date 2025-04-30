import express from 'express'
const router = express.Router()
import { signUpHandler, sendOTPhandler, userLoginHandler, authChecking } from '../controller/userController.js'


router.post('/signup', signUpHandler)
router.post('/sendOTP', sendOTPhandler)
router.post('/login', userLoginHandler)
router.get('/authCheck', authChecking)


export default router