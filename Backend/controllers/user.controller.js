import userModel from "../models/usserSchema.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
export const register = async (req,res)=>{
try {
    const {name,email,password,role} = req.body
    if (!name || !email || !password) {
        return res.status(400).json({success:false, message:"All fields required"})
    }
    const userFounded = await userModel.findOne({email})
    if (userFounded) {
        return res.status(400).json({success:false, message:"user already exist"})
    }
    const hashedPassword = await bcrypt.hash(password,10)
    const newUser = await userModel.create({name,email,password:hashedPassword,role})
    return res.status(201).json({success:true, message:"user created successfully",data:{name:newUser.name,
        email:newUser.email,
        id:newUser._id,
    role:newUser.role}})
    
} catch (error) {
    return res.status(500).json({success:false, message:error.message})
}
}


export const login = async (req,res)=>{
    try {
        const {email,password} = req.body
        if (!email || !password) {
            return res.status(400).json({success:false, message:"All fields required"})
        }
        const user = await userModel.findOne({email})
        if (!user || !await bcrypt.compare(password,user.password)) {
            return res.status(401).json({success:false, message:"email or password are not correct"})
        }
      const token = jwt.sign({email:user.email,id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:"3d"})
        return res.status(200).json({success:true, message:"user logged in successfully",data:{name:user.name,email:user.email,id:user._id,token
            ,role:user.role
        }})
        
    } catch (error) {
    return res.status(500).json({success:false, message:error.message})
}
}