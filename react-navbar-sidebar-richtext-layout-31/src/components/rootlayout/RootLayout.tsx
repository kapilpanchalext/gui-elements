import Navbar from './navbar/Navbar';
import { Outlet } from 'react-router-dom';
import "./RootLayout.css";
import Sidebar from './sidebar/Sidebar';
import Breadcrumb from './breadcrumb/Breadcrumb';

const RootLayout = () => {
  return (
    <>
      <header>
        <Navbar />
        <Breadcrumb />
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