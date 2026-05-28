import express from 'express';


export const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",(req,res)=>{
    res.send("Auth service is running")
})