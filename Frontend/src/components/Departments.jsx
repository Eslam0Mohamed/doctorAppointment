import React, { useEffect, useState } from 'react'
import { getAllDepartments } from '../services/departments'
import { baseUrl } from '../config/config'
import Loading from "../components/Loading"
const Departments = () => {
       const [departments, setDepartments] = useState([])
       const [error, setError] = useState(null)
          const [loading, setLoading] = useState(true)

       async function fetchDepartments() {
           try {
               const data = await getAllDepartments()
               setDepartments(data)
           } catch (err) {
               const message = err?.response?.data?.message || 'Something went wrong'
               setError(message)
           }
           finally{
            setLoading(false)
           }
       }
       useEffect(() => {
           fetchDepartments()
       }, [])
  if(loading){
        return <Loading></Loading>
      }
    return (
        <section className='py-12'>
            <div className="container w-10/12 mx-auto">
                <div className="text-center py-10">
                    <h2 className='heading'>Departments</h2>
                    <p className='heading-description'>Explore our various medical departments and the services we offer</p>
                </div>
                {error ? (
                    <div>
                        <p className='text-red-500 p-4 text-lg'>{error}</p>
                    </div>
                ) : (
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
                        {departments.slice(0, 3).map((dep) => (
                            <div key={dep._id} className=' hover:-translate-y-5  transition-all duration-300 shadow-2xl overflow-hidden rounded-2xl'>
                                <div className='image h-50'>
                                    <img
                                        src={dep.image ? `${baseUrl}/uploads/${dep.image}` : ''}
                                        alt={dep.name || 'Doctor'}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <div className='content p-4'>
                                    <h3 className='text-main text-2xl'>{dep.name}</h3>
                                    <p className='text-gray-500 text-md font-semibold'>{dep.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Departments
