import jwt from "jsonwebtoken"

export const auth = (req,res,next)=>{
const token = req.headers.authorization.split(" ")[1]
if (!token) {
    return res.status(403).json({success:false,message:"No token provided"})
}
const decoded = jwt.verify(token,process.env.JWT_SECRET)
console.log(decoded);

req.user = decoded
next()
}