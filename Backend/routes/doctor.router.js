import express from "express"
import { addDoctor,
    getAllDoctors,
    getDoctorById,
    updateDoctor,
    deleteDoctor
 } from "../controllers/doctor.controller.js"
import multer from "multer"
const router = express.Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,"uploads")
  },
  filename: function (req, file, cb) {
    const ext  = file.mimetype.split("/")[1]
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9 ) + "."
    cb(null, file.fieldname + '-' + uniqueSuffix+ext)
  }
})
const upload = multer({ storage: storage })

router.post("/add-doctors",upload.single("image"),addDoctor)
router.get("/get-doctors",getAllDoctors)
router.get("/get-doctor/:id",getDoctorById)
router.put("/update-doctor/:id",upload.single("image"),updateDoctor)
router.delete("/delete-doctor/:id",deleteDoctor)
export default router