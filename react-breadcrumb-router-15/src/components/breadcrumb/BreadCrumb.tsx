import { useLocation, useNavigate } from 'react-router-dom';
import "../../App.css";

const BreadCrumb = () => {
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
            <a href="#" onClick={() => handleClick('/')}>Home</a>
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
              <a href="#" onClick={() => handleClick(to)}>{value}</a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;