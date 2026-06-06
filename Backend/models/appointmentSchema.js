import { Timestamp } from "mongodb";
import mongoose from "mongoose";


const appointmentSchema = mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    doctor:{
        type:mongoose.Types.ObjectId,
        ref:"Doctor"
    },
    date:Date,
    reason:{
        required:true,
        type:String
    }
},{timestamps:true})
const appointmentModel = mongoose.model("Appointment",appointmentSchema)
export default appointmentModel