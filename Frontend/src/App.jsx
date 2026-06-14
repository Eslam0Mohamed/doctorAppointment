import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Navbar from "./components/Navbar.jsx"
import Layout from "./components/Layout.jsx"
import Doctors from "./pages/doctors.jsx"
import Appointments from "./pages/Appointments.jsx"
import Register from "./pages/Register.jsx"
import Login from "./pages/Login.jsx"
import DoctorsPage from "./pages/Doctors.jsx"
import DepartmentsPage from "./pages/Departments.jsx"
import AuthProvider from "./context/AuthContext.jsx"
import ProtectedRoute from "./components/ProtectedRoutr.jsx"
function App() {

const router = createBrowserRouter([{
path:"/",element:<Layout></Layout>,children:[
  
    {path:"/",element:<Home/>},
    {path:"/doctors",element:<DoctorsPage/>},
    {path:"/departments",element:<DepartmentsPage/>},
    {path:"/appointments",element:<ProtectedRoute><Appointments/></ProtectedRoute>},
    {path:"/auth/login",element:<Login/>},
    {path:"/auth/register",element:<Register/>},
  
]
}
])

  return (
   <>
   <AuthProvider>

   <RouterProvider router={router}>

   </RouterProvider>
   </AuthProvider>

   </>
  )
}

export default App
