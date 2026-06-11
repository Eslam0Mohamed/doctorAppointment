const apiInstance = axios.create({baseUrl:import.meta.env.VITE_BASEURL})


apiInstance.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token")
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default apiInstance 