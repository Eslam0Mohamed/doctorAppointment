import React from 'react'

const StatisticsCard = ({stat}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition-all duration-300 hover:shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-600">{stat.title}</h3>
     <div className="flex justify-evenly items-center mt-6">
      <span className="text-3xl font-bold text-main">{stat.icon}</span>
      <span className="text-3xl font-bold text-main">{stat.number}</span>
     </div>

    </div>
  )
}

export default StatisticsCard
