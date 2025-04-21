import express from 'express'
import adminRouter from './routes/adminRoutes.js'
import userRouter from './routes/userRoutes.js'
import './config/db.js'
const app = express()
import { config } from 'dotenv'
config()

app.use(express.json())

app.use('/admin', adminRouter)
app.use('/', userRouter)

app.listen(process.env.PORT, ()=>{
    console.log(`http://localhost:${process.env.PORT}`);
})









