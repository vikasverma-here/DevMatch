const express= require('express')
const app = express()
app.use("/test", (req,res)=>{
    res.send("passing some test cases")
})
app.use("/home", (req,res)=>{
    res.send("home always home")
})

app.use("/about", (req,res)=>{
    res.send("about ")
})
app.use("/content", (req,res)=>{
    res.send("content change  ")
})
app.use("/add", (req,res)=>{
    res.send("address")
})
app.use( (req,res)=>{
    res.send("nothing")
})
app.listen(7777,()=>{
    console.log("if server is listening succesfully")
})