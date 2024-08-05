import { useState } from 'react';
import "../sidebar/Sidebar.css";
import "../../theme/theme.css";
import { SidebarData } from './utils/SidebarData';

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
      <div className={`sidenav ${isExpanded ? 'expanded' : ''}`} onDoubleClick={toggleSidebar} style={{ overflow: "auto" }}>
        {SidebarData.map((item) => {
          let toRender;

          if (item.tabName.startsWith("separator")){
            toRender = <div key={item.link} className="separator"></div>
          } else {
            toRender = <a key={item.link} href={item.link} ><span className="material-symbols-outlined">{item.icon}</span><span className="text">{item.tabName}</span></a>
          }

          return (toRender)
        })}

        <div className="separator"></div>
        <a href="#envelope"><span className="material-symbols-outlined">account_circle</span><span className="text">UserName</span></a>
      </div>
    </>
  )
}

export default Sidebar;