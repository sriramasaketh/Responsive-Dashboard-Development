import React from 'react'
import {Pie} from 'react-chartjs-2'

const PieChart = () => {
  const data = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        label: 'User Demographics',
        data: [45, 55],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className='chart'>
      <Pie data={data} />
    </div>
  )
}

export default PieChart
