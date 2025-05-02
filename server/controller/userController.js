import User from '../models/userModel.js'
import { transporter } from '../config/mailservice.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const secretKey = "mysecret"

function generateOTP(){
    return Math.floor(100000+Math.random()*999999).toString()
}

let storedOTP = ''

export const authChecking = async (req, res) =>{
    try {
        const token = req.cookies.token
        if(!token){
            return res.status(401).json({error:"user not logged in", authenticated: false})
        }

        const decoded = jwt.verify(token, secretKey)
        console.log(decoded);
        
        res.status(200).json({authenticated: true})
    } catch (error) {
        res.status(500).json({error: "Internal server error"})
    }
}

export const signUpHandler = async (req, res) => {
    try {
        const { username, email, password, OTP } = req.body
        if (!username || !email || !password || !OTP) {
            return res.status(400).json({ error: "All fields are required" })
        } else {
            const userExists = await User.findOne({ username })
            console.log(userExists);

            if (!userExists) {
                if (OTP == storedOTP) {
                    storedOTP = ''
                    const hashedPassword = await bcrypt.hashSync(password, 10)

                    const user = await User.create({ username, email, password: hashedPassword })
                    console.log(user);

                    if (!user) {
                        return res.status(500).json({ error: "Internal Error" })
                    }
                    return res.status(200).json({ message: "Registration success" })
                }else{
                    res.status(400).json({ error: "Invalid OTP" })
                }
            } else {
                res.status(500).json({ error: "username not available" })
            }
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }
}

export const sendOTPhandler = async (req, res)=>{
    const {email} = req.body
    try {
        if(!email){
            return res.status(400).json({error: "Invalid email ID"})
        }else{
            let otp = generateOTP()
            storedOTP = otp
            const mailOptions = {
                from: 'cmabdulkareem@gmail.com',
                to: email,
                subject: 'OTP from Livewire',
                html: `<h1 style="background-color: yellow">Your OTP is ${otp}</h1>`
              };

              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.log('Error: ', error);
                  return res.status(500).json('Error sending email');
                }
                console.log('Email sent: ', info.response);
                res.status(200).json({message: 'OTP sent successfully'});
              });  
        }
    } catch (error) {
        res.status(500).json({error: "Internal server error"})
    }
}

export const userLoginHandler = async (req, res)=>{
    try {
        const {username, password} = req.body

        if (!username || !password ) {
            return res.status(400).json({ error: "Both username and password required" })
        }else{
            const user = await User.findOne({username})

            if(!user){
                return res.status(400).json({ error: "User not found" })
            }else{
                const isMatch = await bcrypt.compare(password, user.password)


                if(!isMatch){
                    return res.status(400).json({ error: "Invalid password" })
                }

                const payload = {
                    id: user._id,
                    username: user.username,
                    email: user.email
                }

                const token = jwt.sign(payload, secretKey, {expiresIn: '1h'})

                res.cookie('token', token, {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'None',
                    maxAge: 86400000
                })
                return res.status(200).json({message: "Login succesfull"})
            }
        }
    } catch (error) {
        res.status(200).json({error: "Internal server error"})
    }
}