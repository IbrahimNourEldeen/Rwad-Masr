const express=require('express')
const app=express()
const router=require('./routes/user.routes')
const mongoose = require('mongoose');

const url='mongodb+srv://admin:admin123@cluster0.r18ef.mongodb.net/MyData?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(url).then(()=>{
    console.log('mongodb connected successfully')
})
const controller=require('./controller/user.controler')

app.use(express.json())
app.use('/users',router)

app.listen(4000,()=>{
    console.log('running on port 4000')
})