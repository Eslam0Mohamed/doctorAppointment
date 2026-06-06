import mongoose from "mongoose";


export function connectDB() {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("connected to MONGO_DB");
        
    }).catch((error)=>{
        console.log("DB ERROR ==> " + error);        
    })
    
}

