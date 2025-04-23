import User from '../models/userModel.js'

export const signUpHandler = (req, res)=>{

    console.log("route triggered");
    
    const {username, email, password} = req.body

    if(!username || !email || !password){
       return res.status(400).json({message: "All fields are required"})
    }

    res.status(200).json({message: "User registration success"})
}