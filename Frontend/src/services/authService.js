import apiInstance from "../config/config.js";

export async function loginUser(userData) {
  try {
    const { data } = await apiInstance.post("/auth/login", userData);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(userData) {
  try {
    const { data } = await apiInstance.post("/auth/register", userData,);
    return data;
  } catch (error) {
    throw error;
  }
}