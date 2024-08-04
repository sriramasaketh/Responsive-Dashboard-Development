import React from 'react'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <ul>
        <li>
          <a href='/overview'>Overview</a>
        </li>
        <li>
          <a href='/analytics'>Analytics</a>
        </li>
        <li>
          <a href='/settings'>Settings</a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
