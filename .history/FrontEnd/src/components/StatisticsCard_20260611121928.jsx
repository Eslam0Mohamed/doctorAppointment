import React from 'react'

const StatisticsCard = ({stat}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
     <div className="flex flex-col items-center gap-4">
      <h3>{stat.title}</h3>
      <span className="text-3xl font-bold text-main">{stat.icon}</span>
     </div>
      <span className="text-3xl font-bold text-main">{stat.number}</span>

    </div>
  )
}

export default StatisticsCard
