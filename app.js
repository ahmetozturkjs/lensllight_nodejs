import express  from "express";

const app=express()
const port=3000

app.get("/",(req,res)=>{
    res.send("INDEX PAGE 2")
})

app.listen(port,()=>{
    console.log(`app runnig on port ${port}`);
})