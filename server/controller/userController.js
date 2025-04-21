import User from '../model/userModel.js'
import bcrypt from 'bcryptjs'

export const adminSignupHandler = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ error: "Both username and password required" })
        }else{
            const hashedPassword = await bcrypt.hash(password, 10)
            console.log("done");
            const newuser = await User.create({ email, password: hashedPassword })
            res.status(200).json({ message: newuser.email })
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }
}
    



    