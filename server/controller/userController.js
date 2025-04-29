import User from '../models/userModel.js'
import { transporter } from '../config/mailservice.js'
import bcrypt from 'bcryptjs'

function generateOTP(){
    return Math.floor(100000+Math.random()*999999).toString()
}

let storedOTP = ''

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