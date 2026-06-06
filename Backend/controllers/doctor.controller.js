import { ReturnDocument } from "mongodb"
import doctorModel from "../models/doctorSchema.js"
export const addDoctor = async (req, res) => {
    try {
        const image  = req.file.filename
        const { description, experianceYears, specialty, name } = req.body
        if (!description || !experianceYears || !specialty || !name || !image) {
            return res.status(400).json({ success: false, message: "All Fielsa are required" })
        }
        const newDoctor = await doctorModel.create({
            description,
            experianceYears,
            specialty,
            name,
            image: req.file.filename
        })
        return res.status(201).json({ success: true, message: "doctor created successfully" ,data:newDoctor})
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}

export const getDoctorById = async (req, res) => {
    try {
        const { id } = req.params
        const doctor = await doctorModel.findById(id)
        if (!doctor) {
            return res.status(404).json({ success: false, message: "doctor not found" })
        }

        return res.status(200).json({ success: true, data: doctor })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}

export const getAllDoctors = async (req, res) => {
    try {
        const allDoctors = await doctorModel.find()
        return res.status(200).json({ success: true, data: allDoctors })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}


export const updateDoctor = async (req, res) => {
    console.log(req.file);
    try {
        const  image  = req.file.filename
        
        const { description, experianceYears, specialty, name } = req.body
        const { id } = req.params
        if (!description || !experianceYears || !specialty || !name || !image) {
            return res.status(400).json({ success: false, message: "All Fields are required" })
        }
        const doctor = await doctorModel.findById(id)

        if (!doctor) {
            return res.status(404).json({ success: false, message: "doctor not found" })
        }
        const updatedDoctor = await doctorModel.findByIdAndUpdate(id, {
            description, experianceYears, specialty, name,
            image: req.file.filename
        }, { returnDocument: "after" })
        return res.status(200).json({ success: true, data: updatedDoctor })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}


export const deleteDoctor = async (req, res) => {
    try {
        const { id } = req.params
        const doctor = await doctorModel.findById(id)
        if (!doctor) {
            return res.status(404).json({ success: false, message: "doctor not found" })
        }
        await doctorModel.findByIdAndDelete(id)
        return res.status(203).json({ success: true})
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}