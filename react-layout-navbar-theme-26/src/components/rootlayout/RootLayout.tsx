import Navbar from '../navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import "./RootLayout.css";

const RootLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <aside className="side-nav">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </aside>
      <main className="pages">
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout;