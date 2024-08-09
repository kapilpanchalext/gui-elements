import { Link } from 'react-router-dom';
import "./Sidebar.css";


const Sidebar = () => {
  return (
    <div className='sidenav'>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar;