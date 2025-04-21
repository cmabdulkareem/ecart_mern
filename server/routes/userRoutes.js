import express from 'express'
const router = express.Router()

router.get('/', (req, res)=>{
    res.send("Hi from user route")
})

export default router