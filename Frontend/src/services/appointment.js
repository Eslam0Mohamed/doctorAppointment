import apiInstance from "../config/config.js"
export async function getAllAppointments(){
try{
const {data} = await apiInstance.get("/appointment");
return data.data;
}
catch(error){
throw error
}
}
export async function createAppointment(appointmentData) {
  try {
    const { data } = await apiInstance.post(
      "/appointment",
      appointmentData
    );

    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteAppointment(id) {
  try {
    const { data } = await apiInstance.delete(
      `/appointment/${id}`
    );

    return data;
  } catch (error) {
    throw error;
  }
}