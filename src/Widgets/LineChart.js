import React from 'react'
import {Line} from 'react-chartjs-2'

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'User Activity',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  }

  return (
    <div className='chart'>
      <Line data={data} />
    </div>
  )
}

export default LineChart
