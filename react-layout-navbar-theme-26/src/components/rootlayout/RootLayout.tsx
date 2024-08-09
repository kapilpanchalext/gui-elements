import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';
import "./RootLayout.css";
import Sidebar from '../sidebar/Sidebar';

const RootLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="pages">
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout;