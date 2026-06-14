import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='fixed right-0 left-0 top-4 '>
            <div className="container shadow-2xl rounded-xl w-10/12 mx-auto px-2 bg-blue-100 opacity">

                <nav className='flex justify-between align-items-center py-5 px-4 '>
                    <span className="text-2xl font-bold text-main ">Doctor Appointment</span>
                    <ul className='flex gap-3 '>
                        <li>
                            <Link to={"/"} className="text-md text-gray-500 text-semibold hover:border-blue-400 hover:border-b-2 hover:text-blue-500">Home</Link>
                        </li>
                        <li>
                            <Link to={"/appointments"} className="text-md text-gray-500 text-semibold hover:border-blue-400 hover:border-b-2 hover:text-blue-500">Appointment</Link>
                        </li>
                        <li>
                            <Link to={"/departments"} className="text-md text-gray-500 text-semibold hover:border-blue-400 hover:border-b-2 hover:text-blue-500">Departments</Link>
                        </li>
                        <li>
                            <Link to={"/doctors"} className="text-md text-gray-500 text-semibold hover:border-blue-400 hover:border-b-2 hover:text-blue-500">Doctors</Link>
                        </li>
                    </ul>

                    <ul className='flex gap-3 '>
                        <li>
                            <Link to={"/auth/login"} className="text-md text-gray-500 text-semibold hover:border-blue-400 hover:border-b-2 hover:text-blue-500">Login</Link>
                        </li>
                        <li>
                            <Link to={"/auth/register"} className="text-md text-gray-500 text-semibold hover:border-blue-400 hover:border-b-2 hover:text-blue-500">Sign Up</Link>
                        </li>
                        <li>
                            <Link className="bg-main px-3 py-1 text-tertiary rounded-sm text-md text-semibold hover:border-blue-400 hover:border-b-2 hover:text-blue-500">Logo out</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Navbar
