import express from "express"
import { createAppointment, deleteAppointment, getAllAppointments } from "../controllers/appointment.controller.js "
import { auth } from "../middleware/authMiddleware.js"
const router = express.Router()


router.get("/",auth,getAllAppointments)
router.post("/",auth,createAppointment)
router.delete("/:id",auth,deleteAppointment)

export default router