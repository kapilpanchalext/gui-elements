import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Breadcrumb.css";
import { memo } from 'react';
import log from '../../log';

const Breadcrumb = memo(() => {
  log("<BreadCrumb /> rendered");
  const location = useLocation();
  const navigate = useNavigate();
  
  const pathnames = location.pathname.split('/').filter((x) => x);

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="crumbs">
      <ol>
        {pathnames.length > 0 ? (
          <li className="crumb">
            <Link to="" onClick={() => handleClick('/')}>Home</Link>
          </li>
        ) : (
          <li className="crumb">
            Home
          </li>
        )}
        {pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return isLast ? (
            <li key={to} className="crumb">
              {value}
            </li>
          ) : (
            <li key={to} className="crumb">
              <Link to="" onClick={() => handleClick(to)}>{value}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  )
});

export default Breadcrumb;