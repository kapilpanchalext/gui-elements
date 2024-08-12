import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Breadcrumb.css";
import { memo } from 'react';

const Breadcrumb = memo(() => {
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
            <Link to="" onClick={() => handleClick('/')}>{pathnames}</Link>
          </li>
        ) : (
          <li className="crumb">
            {pathnames}
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