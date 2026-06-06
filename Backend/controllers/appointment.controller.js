import appointmentModel from "../models/appointmentSchema.js"

export const getAllAppointments = async(req,res)=>{
try {
    const allAppointments =await appointmentModel.find().populate("doctor")
    return res.status(200).json({success:true,data:allAppointments})
} catch (error) {
    return res.status(500).json({success:false , message:error.message})
}
}

export const createAppointment = async(req,res)=>{
try {
    const {date,reason,doctor} = req.body
    if (!date || !reason || !doctor) {
        return res.status(400).json({success:false,message:"All Fields Required"})
    }
    const appointment = await appointmentModel.create({
        date,
        doctor,
        reason,
        user:req.user.id
    }).populate("doctor")
    return res.status(201).json({success:true,message:" Appointment created successfully",data:appointment})
} catch (error) {
    return res.status(500).json({success:false,message:error.message})
}
}

export const deleteAppointment = async(req,res)=>{
    try {
        const { id } = req.params
        const appoinment = await doctorModel.findById(id)
        if (!appoinment) {
            return res.status(404).json({ success: false, message: "appointment not found" })
        }
        await appointmentModel.findByIdAndDelete(id)
        return res.status(203).json({ success: true})
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}
