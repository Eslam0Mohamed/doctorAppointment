import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import {connectDB} from "./connectDB/connectDB.js"
import userRouter from "./routes/user.router.js"
import doctorsRouter from "./routes/doctor.router.js"
import appointmentRouter from "./routes/appointment.router.js"
import departmentRouter from "./routes/department.router.js"

dotenv.config()
const PORT = process.env.PORT
const app = express()
connectDB()

app.use(express.json())
app.use(cors())

app.use("/api/v1/auth",userRouter)
app.use("/api/v1/doctors",doctorsRouter)
app.use("/api/v1/appointment",appointmentRouter)
app.use("/api/v1/department",departmentRouter)
app.use("/api/v1/uploads",express.static("uploads") )


app.listen(PORT,()=>{
    console.log("server runing on port " + PORT);
})

// ! complete middle ware & Test appointment 52 min in video
