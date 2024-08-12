import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';
import "./RootLayout.css";
import Sidebar from '../sidebar/Sidebar';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import log from '../../log';

const RootLayout = () => {
  log("<RootLayout /> rendered");

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