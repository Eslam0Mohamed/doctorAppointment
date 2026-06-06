import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const doctorSchema = mongoose.Schema({
    name:
    {
        type: String,
        required: true,
    },
    specialty: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    experianceYears: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:String
}, { timestamps:true })

const doctorModel = mongoose.model("Doctor",doctorSchema)
export default doctorModel