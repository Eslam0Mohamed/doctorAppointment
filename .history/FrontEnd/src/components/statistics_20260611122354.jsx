import React from 'react'
import StatisticsCard from './StatisticsCard'

const Statistics = () => {
  const stats = [
  {
    number: "50+",
    title: "Doctors",
    icon: "👨‍⚕️",
  },
  {
    number: "15+",
    title: "Departments",
    icon: "🏥",
  },
  {
    number: "5000+",
    title: "Patients",
    icon: "❤️",
  },
  {
    number: "10000+",
    title: "Appointments",
    icon: "📅",
  },
];
  return (
    <>
      <section className="py-12 bg-neutral">
        <div className="container w-10/12 mx-auto">
                            <h2 className='heading'>s</h2>
                    <p className='heading-description'>Learn More about our clinic and our commitment to provideing exceptionel healthcare</p>
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
