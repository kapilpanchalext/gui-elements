import { Fragment, useState } from 'react';
import "./Navbar.css";
import "../../../theme/theme.css";
import { MenuData, NavbarData } from './utils/NavbarData';
import Sidebar from '../sidebar/Sidebar';
import BreadCrumb from '../breadcrumb/BreadCrumb';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // State to keep track of the active tab
    const [activeTab, setActiveTab] = useState<string>('#home');
    const [activeTheme, setActiveTheme] = useState<string>('dark-mode');
    const [isResponsive, setIsResponsive] = useState(false);
    const [isSearchExpanded, setIsSearchExpanded] = useState<boolean>(false);

    // Function to handle tab click
    const tabClickHandler = (tab: string) => {
      if (tab === '#search2') {
        setIsSearchExpanded(true);
      } else {
        setIsSearchExpanded(false);
      }
      setActiveTab(tab);
    };

    const themeHandler = () => {
        setActiveTheme((prevTheme) => (prevTheme === 'dark-mode' ? 'light-mode' : 'dark-mode'));
    }

  return (
    <>
      <div className={isResponsive ? `topnav ${activeTheme}` : `topnav responsive ${activeTheme}`}>
        <div className='section-start' style={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: "100px" }}>
          <h4>LOGO</h4>
        </div>

        <div className={isResponsive ? `topnav section-mid ${activeTheme}` : `topnav section-mid responsive ${activeTheme}`} style={{overflowX:"auto", overflowY:"hidden"}}>
          {NavbarData.map((item) => (
            <Fragment key={item.link}>
              {item.link === '#search2' && isSearchExpanded ? (
                <input
                  type="search"
                  className="input"
                  placeholder="Search..."
                  style={{ marginLeft: '10px' }}
                />
              ) : (
                <Link
                  to={item.link}
                  className={activeTab === item.link ? 'active' : ''}
                  onClick={() => tabClickHandler(item.link)}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '24px', marginRight: '8px' }}
                  >
                    {item.icon}
                  </span>
                  {item.tabName}
                </Link>
              )}
            </Fragment>
          ))}

          <Link to="" className="icon" onClick={() => setIsResponsive(!isResponsive)}>
            <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>menu</span>
          </Link>
        </div>

        <div className='section-end' style={{display: "flex", alignItems: "center", justifyContent: "center", minWidth: "200px"}}>

          <div className="dropdown">
            <Link to="#menu" className="dropicon">
              <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>arrow_drop_down</span>
            </Link>
            <div className="dropdown-content">
              {MenuData.map((item) => (
                <Link key={item.link} to={item.link}><span
                  className="material-symbols-outlined"
                  style={{ fontSize: '24px', marginRight: '8px' }}
              > {item.icon}
              </span>{item.tabName}</Link>
              ))}
            </div>
          </div>

          <Link style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
            to="#theme"
            className={activeTab === '#theme' ? 'active' : ''}
            onClick={themeHandler}>
            <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>{activeTheme === 'dark-mode' ? "dark_mode" : "light_mode"}</span>
          </Link>
        </div>
      </div>

      <div className={activeTheme}>
        <BreadCrumb />
      </div>
    
      <div className={activeTheme}>
        <Sidebar />
      </div>
    </>
  )
}

export default Navbar;