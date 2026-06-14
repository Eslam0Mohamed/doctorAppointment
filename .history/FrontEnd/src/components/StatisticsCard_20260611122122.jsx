import React from 'react'

const StatisticsCard = ({stat}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
     <div className="flex justify-center items-center gap-4">
      <h3>{stat.title}</h3>
     </div>
      <span className="text-3xl font-bold text-main">{stat.icon}</span>
      <span className="text-3xl font-bold text-main">{stat.number}</span>

    </div>
  )
}

export default StatisticsCard
