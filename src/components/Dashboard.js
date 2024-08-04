import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import WidgetGrid from './WidgetGrid'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Header />
      <div className='main-content'>
        <Sidebar />
        <WidgetGrid />
      </div>
      <footer className='footer'>
        <p>Copyright © 2024 Dashboard App. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Dashboard
