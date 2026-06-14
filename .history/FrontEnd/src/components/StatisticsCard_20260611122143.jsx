import React from 'react'

const StatisticsCard = ({stat}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
      <h3>{stat.title}</h3>
     <div className="flex justify-between items-center items-center gap-4">
      <span className="text-3xl font-bold text-main">{stat.icon}</span>
      <span className="text-3xl font-bold text-main">{stat.number}</span>
     </div>

    </div>
  )
}

export default StatisticsCard
