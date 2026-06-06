import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import {connectDB} from "./connectDB/connectDB.js"
import userRouter from "./routes/user.router.js"
dotenv.config()
const PORT = process.env.PORT
const app = express()
connectDB()

app.use(express.json())
app.use(cors())

app.use("api/v1/auth",userRouter)


app.listen(PORT,()=>{
    console.log("server runing on port " + PORT);
})

