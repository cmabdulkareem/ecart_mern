import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/e-cart')
    .then(()=>{
        console.log('connected to db');
    })
    .catch((err)=>{
        console.error(err);
    })