import React from 'react'
import StatisticsCard from './StatisticsCard'
import { FaCalendarCheck, FaUserFriends } from 'react-icons/fa'
import {  } from 'react-icons/fa'
import { FaCalendarCheck } from 'react-icons/fa'
const Statistics = () => {
  const stats = [
  {
    number: "50+",
    title: "Doctors",
    icon: <FaUserFriends/>,
  },
  {
    number: "15+",
    title: "Departments",
    icon: <FaHospital/>,
  },
  {
    number: "5000+",
    title: "Patients",
    icon: <FaHeartbeat/>,
  },
  {
    number: "10000+",
    title: "Appointments",
    icon: <FaCalendarCheck/>,
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
  { stats.map((stat,index)=>{
      return <StatisticsCard key={index} stat={stat}/>

    })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Statistics
