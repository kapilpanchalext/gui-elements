import React from 'react'
import { Outlet } from 'react-router-dom';

type Props = {}

const RootLayout = (props: Props) => {
  return (
    <div className="layout">
      <header className="top-nav">
        {/* Top Navigation Bar */}
        <h1>My Application</h1>
      </header>
      <div className="content">
        <aside className="side-nav">
          {/* Side Navigation Bar */}
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </aside>
        <main className="main-content">
          {/* Main content */}
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default RootLayout;