import React, { useEffect, useState } from 'react'
import StatisticsCard from './StatisticsCard.jsx'
import {getAllDoctors} from '../services/doctorsService.js'
import { FaCalendarCheck, FaUserFriends, FaHospital, FaHeartbeat } from 'react-icons/fa'
import { getAllDepartments } from '../services/departments.js'
import { getAllAppointments } from '../services/appointment.js'
const Statistics = () => {
  const [doctorsCount, setDoctorsCount] = useState(0);
  const [departmentsCount, setDepartmentsCount] = useState(0);
  const [appointmentsCount, setAppointmentsCount] = useState(0);
  async function fetchData(){
    try {
      const doctors = await getAllDoctors();
      setDoctorsCount(doctors.length);
      const departments = await getAllDepartments();      
      setDepartmentsCount(departments.length);
      const appointments = await getAllAppointments();      
      setAppointmentsCount(appointments.length);
      
    } catch (error) {
      // ^ Error handling 
       const errorMsg = error.response.data.message || "Some Thing went Error"

    }
  }
useEffect(() => {
  fetchData();
}, []);

  const stats = [
    {
      number: doctorsCount,
      title: "Doctors",
      icon: <FaUserFriends />,
    },
    {
      number: departmentsCount,
      title: "Departments",
      icon: <FaHospital />,
    },
    {
      number: "5000+",
      title: "Patients",
      icon: <FaHeartbeat />,
    },
    {
      number: appointmentsCount,
      title: "Appointments",
      icon: <FaCalendarCheck />,
    },
  ];
  return (
    <>
      <section className="py-12 bg-neutral">
        <div className="container w-10/12 mx-auto">
          <div className="text-center py-10">
            <h2 className='heading'>Statistics</h2>
            <p className='heading-description'></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              return <StatisticsCard key={index} stat={stat} />

            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Statistics
