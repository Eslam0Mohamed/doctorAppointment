import departmentModel from "../models/departmentSchema.js"
export const createDepartment = async (req, res) => {
    try {
        const { name, description } = req.body
    
        if (!name || !description) {
            return res.status(400).json({ success: false, message: "all fields required" })
        }
        const department = await departmentModel.create({ name, description, 
            image:req.file?req.file.filename : null })
        return res.status(201).json({ success: true, message: "department created successfully" ,data:department})
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}
export const getDepartments = async (req, res) => {
    try {
        const allDepartments = await departmentModel.find()
        return res.status(200).json({ success: true, data: allDepartments })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}
export const deleteDepartment = async (req, res) => {
    try {
        const { id } = req.params
        const isDeleted = await departmentModel.findByIdAndDelete(id)
        if (!isDeleted) {
            return res.status(404).json({ success: false, message: "department not found" })
        }
        return res.status(204).json({
  success: true,
  message: "Department deleted successfully"
})
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}