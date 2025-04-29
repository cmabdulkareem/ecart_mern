import express from 'express'
const app = express()
import cors from 'cors'
import './config/db.js'
import adminRoutes from './routes/adminRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { config } from 'dotenv'
import fileUpload from 'express-fileupload'
config()

app.use(express.json())
app.use(cors())
app.use(express.static("public"))
app.use(fileUpload())


app.use('/', userRoutes)
app.use('/admin', adminRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`running server on http://localhost:${process.env.PORT}`);
})