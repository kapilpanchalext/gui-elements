import { useLocation, useNavigate } from 'react-router-dom';
import './BreadCrumb.css';

// type Props = {}

const BreadCrumb = () => {

  const location = useLocation();
  const navigate = useNavigate();
  
  const pathnames = location.pathname.split('/').filter((x) => x);

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ul>
        {pathnames.length > 0 ? (
          <li>
            <a href="#" onClick={() => handleClick('/')}>Dashboard</a>
          </li>
        ) : (
          <li>
            Dashboard
          </li>
        )}
        {pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return isLast ? (
            <li key={to}>
              {value}
            </li>
          ) : (
            <li key={to}>
              <a href="#" onClick={() => handleClick(to)}>{value}</a>
            </li>
          );
        })}
      </ul>
    </nav>


  )
}

export default BreadCrumb;