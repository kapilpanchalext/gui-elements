import { Outlet } from 'react-router-dom';
import BreadCrumb from '../breadcrumb/BreadCrumb';

const Home = () => {
  return (
    <div>
      <BreadCrumb />
      <Outlet />        
    </div>
  )
}

export default Home;