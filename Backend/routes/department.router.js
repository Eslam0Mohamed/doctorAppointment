import express from "express"
import {auth} from "../middleware/authMiddleware.js"
import { createDepartment, deleteDepartment, getDepartments } from "../controllers/department.controller.js"
import multer from "multer"
import { authorizeRoles } from "../middleware/authRoles.js"
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


router.post("/",auth,upload.single("image"),authorizeRoles("admin"),createDepartment)
router.delete("/:id",auth,authorizeRoles("admin"),deleteDepartment)
router.get("/",auth,authorizeRoles("admin"),getDepartments)

export default router