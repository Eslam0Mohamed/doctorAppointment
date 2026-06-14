import axios from "axios" 
export const baseUrl=import.meta.env.VITE_BASEURL
const apiInstance = axios.create({baseURL:baseUrl})
apiInstance.interceptors.request.use((config)=>{
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVzbGFtMUBnbWFpbC5jb20iLCJpZCI6IjZhMjU1MTJlNDRhZTUwYmVjOTM2ODhkMCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc4MTIwMTU1MiwiZXhwIjoxNzgxNDYwNzUyfQ.3JT9sjLTSN0eizqy80mYHV_2W1NVIvCASenRz1isy2o"
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})
export default apiInstance 