import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Navbar from "./components/Navbar.jsx"
import Layout from "./components/Layout.jsx"
import Doctors from "./pages/doctors.jsx"
import Departments from "./pages/departments.jsx"
import Appointments from "./pages/Appointments.jsx"
import Register from "./pages/Register.jsx"
import Login from "./pages/Login.jsx"

function App() {

const router = createBrowserRouter([{
path:"/",element:<Layout></Layout>,children:[
  {
    path:"/",element:<Home/>,
    path:"/doctors",element:<Doctors/>,
    path:"/departments",element:<Departments/>,
    path:"/appointments",element:<Appointments/>,
    path:"/auth/login",element:<Login/>,
    path:"/auth/register",element:<Register/>,
  }
]
}
])

  return (
   <>
   <RouterProvider router={router}>

   </RouterProvider>

   </>
  )
}

export default App
