 const  adminAuth = (req,res,next)=>{
    console.log("authrization checking ")
     const token = "xyz"
     const isAuthorized = token==='xyz'
     if(!isAuthorized){
        res.status(401).send("unauthorized")
     }else{

        next()
     }
   
}
 const  userData = (req,res,next)=>{
    console.log("user  authrization checking ")
     const token = "xyz"
     const isAuthorized = token==='xyz'
     if(!isAuthorized){
        res.status(401).send("unauthorized")
     }else{
        
        next()
     }
   
}
module.exports={adminAuth,userData}