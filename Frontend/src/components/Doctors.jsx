import React, { useEffect, useState } from 'react'
import { getAllDoctors } from '../services/doctorsService'
import { baseUrl } from '../config/config'
import Loading from "../components/Loading"
const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    const [error, setError] = useState(null)
       const [loading, setLoading] = useState(true)

    async function fetchDoctors() {
        try {
            const data = await getAllDoctors()
            setDoctors(data)
        } catch (err) {
            const message = err?.response?.data?.message || 'Something went wrong'
            setError(message)
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchDoctors()
    }, [])
      if(loading){
        return <Loading></Loading>
      }
    return (
        <section className='py-12'>
            <div className='container w-10/12 mx-auto'>
                <div className="text-center py-10">
                    <h2 className='heading'>Doctors</h2>
                    <p className='heading-description'>Learn more about our team of experienced doctors</p>
                </div>
                {error ? (
                    <div>
                        <p className='text-red-500 p-4 text-lg'>{error}</p>
                    </div>
                ) : (
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
                        {doctors.slice(0, 3).map((doctor) => (
                            <div key={doctor._id} className='doctor-card hover:-translate-y-3  transition-all duration-300 shadow-2xl overflow-hidden rounded-2xl'>
                                <div className='image h-137.5'>
                                    <img
                                        src={doctor.image ? `${baseUrl}/uploads/${doctor.image}` : ''}
                                        alt={doctor.name || 'Doctor'}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <div className='content p-4'>
                                    <h3 className='text-main text-2xl'>{doctor.name}</h3>
                                    <p className='text-gray-500 text-md font-semibold'>{doctor.description}</p>
                                    <div className='my-2 flex justify-between mt-auto items-end'>
                                        <span className="text-gray-400 text-md hover:text-main">{doctor.experianceYears} years experience</span>
                                        <span className="bg-main px-2 py-1 text-white rounded-xl">{doctor.specialty} </span>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Doctors

