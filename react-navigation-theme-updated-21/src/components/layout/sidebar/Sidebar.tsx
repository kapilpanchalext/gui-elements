import { useState } from 'react';
import "../sidebar/Sidebar.css";
import "../../../theme/theme.css";
import { SidebarData } from './utils/SidebarData';
import { Outlet } from 'react-router-dom';

type Props = {
  activeTheme: string;
};

const Sidebar = ({activeTheme}: Props) => {

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
            <a href="#envelope"><span className="material-symbols-outlined">account_circle</span><span className="text">UserName</span></a>
          </div>
        </div>

        <div className={`main ${activeTheme === "dark-mode" ? "dark-mode-outlet" : "light-mode-outlet"}`} 
          style={{ padding: "0px", overflow: "auto", flex: 1, height: "100%" }}>
            <Outlet />
        </div>
      </div>
    </>
  )
}

export default Sidebar;