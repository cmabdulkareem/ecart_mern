import mongoose from "mongoose";

mongoose.connect('mongodb+srv://kareemchala:cadd123@sample.kvxwkea.mongodb.net/e_cart')
    .then(()=>{
        console.log("Connected to db");
    })
    .catch((err)=>{
        console.error(err)
    })