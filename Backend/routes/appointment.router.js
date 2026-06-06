import express from "express"
import { createAppointment, deleteAppointment, getAllAppointments } from "../controllers/appointment.controller.js "

const router = express.Router()


router.get("/",getAllAppointments)
router.post("/",createAppointment)
router.delete("/",deleteAppointment)

export default router