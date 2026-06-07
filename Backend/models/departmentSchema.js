
import mongoose from "mongoose";

const departmentSchema = mongoose.Schema({
    name:
    {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, { timestamps: true })

const departmentModel = mongoose.model("Department", departmentSchema)
export default departmentModel
