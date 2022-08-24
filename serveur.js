const express=require('express')
const{logger}=require('./public/logger')
const app=express()
app.use(logger)
const PORT=5000
app.use(express.json())
app.use(express.static(__dirname+"/public"))
app.listen(PORT ,(err)=>{
err ? console.log(err)
:console.log(`the server is runing  in ${PORT}`)
}) 
