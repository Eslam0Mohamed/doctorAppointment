import apiInstance from "../config/config.js"
export async function getAllDoctors(){
try{
const {data} = await apiInstance.get("/doctors/get-doctors");

return data.data;
}
catch(error){
throw error
}
}
