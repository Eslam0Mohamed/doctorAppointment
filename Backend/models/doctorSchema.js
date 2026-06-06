import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const doctrSchema = mongoose.Schema({
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
    }
}, { timestamps })

const doctorModel = mongoose.Model("Doctor",doctrSchema)
export default doctorModel