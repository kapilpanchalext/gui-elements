import { Link } from 'react-router-dom';
import "./Sidebar.css";
import { memo, useState } from 'react';
import { SidebarData } from './utils/SidebarData';
import log from '../../log';


const Sidebar = memo(() => {
    log("<Sidebar /> rendered");
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <div className={`sidenav ${isExpanded ? 'expanded' : ''}`} onDoubleClick={toggleSidebar}>
          <div className="content">
            {SidebarData.map((item) => {
              let toRender;

              if (item.tabName.startsWith("separator")) {
                toRender = <div key={item.link} className="separator"></div>
              } else {
                toRender = <Link key={item.link} to={item.link}><span className="material-symbols-outlined">{item.icon}</span><span className="text">{item.tabName}</span></Link>
              }

              return toRender;
            })}
          </div>
          <div className="bottom-content">
            <div className="separator"></div>
            <Link to="#envelope"><span className="material-symbols-outlined">account_circle</span><span className="text">UserName</span></Link>
          </div>
        </div>

      </div>
    </>
  )
});

export default Sidebar;