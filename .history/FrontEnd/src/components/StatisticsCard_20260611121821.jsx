import React from 'react'

const StatisticsCard = ({state}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
     <div className>
      <h3>{stat.title}</h3>
      <span className="text-3xl font-bold text-main">{stat.icon}</span>
     </div>

    </div>
  )
}

export default StatisticsCard
