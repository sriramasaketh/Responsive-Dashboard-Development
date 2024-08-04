import React from 'react'

const RecentActivity = () => {
  const activities = [
    {id: 1, text: 'User logged in'},
    {id: 2, text: 'New sale recorded'},
    {id: 3, text: 'Settings updated'},
  ]

  return (
    <div className='recent-activity'>
      <h3>Recent Activity</h3>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>{activity.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default RecentActivity
