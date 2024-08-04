import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/dashboard'>Dashboard</a>
          </li>
          <li>
            <a href='/settings'>Settings</a>
          </li>
        </ul>
      </nav>
      <div className='user-profile'>
        <span>Welcome, User!</span>
        <img src='/user-avatar.png' alt='User Avatar' />
      </div>
    </header>
  )
}

export default Header
