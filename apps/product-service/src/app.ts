import express from "express"


export const app = express()

app.use(express.urlencoded({extended:true,limit:"20mb"}))
app.use(express.json({limit:"20mb",}))

