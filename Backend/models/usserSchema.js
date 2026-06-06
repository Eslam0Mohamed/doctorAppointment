import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        uniqe: true,
        required:true
    },
    password: {
        type: String,
 required:true
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    }
}, {
    timestamps
})

const userModel = mongoose.model("User", userSchema)
export default userModel