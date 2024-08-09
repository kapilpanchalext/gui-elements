import { useState } from 'react';
import "../sidebar/Sidebar.css";
import "../../../theme/theme.css";
import { SidebarData } from './utils/SidebarData';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expanded state
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  // const closeSidebarHandler = () => {
  //   if(isExpanded === true){
  //     setIsExpanded(false);
  //   }
  // }

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
                toRender = <a key={item.link} href={item.link}><span className="material-symbols-outlined">{item.icon}</span><span className="text">{item.tabName}</span></a>
              }

              return toRender;
            })}
          </div>
          <div className="bottom-content">
            <div className="separator"></div>
            <Link to="#envelope"><span className="material-symbols-outlined">account_circle</span><span className="text">UserName</span></Link>
          </div>
        </div>

        <div className="main" 
          style={{ padding: "0px", overflow: "auto", flex: 1, height: "100%", backgroundColor:"var(--primary-100)", color:"var(--secondary-900)" }}>
            <Outlet />
        </div>
      </div>
    </>
  )
}

export default Sidebar;