import express from 'express'
const app = express()
import adminRoutes from './routes/adminRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { config } from 'dotenv'
config()





app.use('/', userRoutes)
app.use('/admin', adminRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`running server on http://localhost:${process.env.PORT}`);
})



