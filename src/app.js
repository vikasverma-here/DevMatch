const express= require('express')
const app = express()
// app.use("/test", (req,res)=>{
//     res.send("passing some test cases")
// })
// app.use("/home", (req,res)=>{
//     res.send("home always home")
// })

// app.use("/about", (req,res)=>{
//     res.send("about ")
// })
// app.use("/content", (req,res)=>{
//     res.send("content change  ")
// })

// app.use("/", (req,res)=>{
//     res.send("nothing")
// })

// app.get("/user/:userId/:name ",(req,res)=>{
//     res.send({fullname:"vikas",lastName:"verma"})
//     console.log(req.params)
// })
// app.post("/user",(req,res)=>{
    
//     res.send("data saved to the database successfully")
// })
// app.delete("/user",(req,res)=>{
//     res.send("data deleted successfully")
// })

// !!!this nesting rout 

// app.get("/user",(req,res,next)=>{
//     console.log("checking if res.send() not there then code is work or not ")
//     // res.send("sending the user profile")
//     next();

// },(req,res)=>{
//     console.log("check if code is wrking fine or not ")
//     res.send("sending another user")
// })

// !!! let explore more 
// app.get("/user",(req,res,next)=>{
//     console.log("second user")
//     // res.send("it working or not ")
//     next()
// })

// app.get("/user",(req,res,next)=>{
//     console.log("first user")
// // res.send("sending rout")
// // next()
// })

// !!!!! How hierarchy of express works 

// app.use("/",(req,res,next)=>{
// //    res.send("always send this response")
//    next()

// })
// app.get("/user",(req,res,next)=>{
//   console.log("get request")
// //   res.send("first res")
//   next()
// },(req,res,next)=>{
//     // res.send("second res")
//     next()
// },(req,res,next)=>{
//     res.send("third res")
//     next()
// })


// !!!! how and why need middleware

// app.get('/admin/Alldata',(req,res)=>{
//     const token = "xyz"
//     const isAdminauthorized = token==="xyzss"
//     if(isAdminauthorized){
//         res.send("All data is sent ")
//     }else{
//         res.status(401).send("unauthorized request ")
//     }
// })

// !!! right way to write middleware 
const {adminAuth,userData} = require("./middlewares/auth")
app.use("/admin", adminAuth)

app.get('/user',userData,(req,res)=>{
    res.send("user profile")
})

app.get("/admin/alldata",(req,res)=>{
    res.send("alldata was sent successfully")
})
app.get("/admin/delete",(req,res)=>{
    res.send("alldata was sent successfully")
})
app.get("/admin/adddata",(req,res)=>{
    res.send("alldata was sent successfully")
})

app.listen(7777,()=>{
    console.log("if server is listening succesfully")
})