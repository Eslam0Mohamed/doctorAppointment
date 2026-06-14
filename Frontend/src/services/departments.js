import apiInstance from "../config/config.js"
export async function getAllDepartments() {
    try {
        const { data } = await apiInstance.get("/department");
        return data.data;
    }
    catch (error) {
        throw error
    }
}
