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
    // <>
    //   <div style={{display: "flex", flexDirection: "row", height: "80vh", maxWidth: "200px"}}>
    //   <div className={`sidenav ${isExpanded ? 'expanded' : ''}`} onDoubleClick={toggleSidebar} style={{ overflow: "auto" }}>
    //     {SidebarData.map((item) => {
    //       let toRender;

    //       if (item.tabName.startsWith("separator")){
    //         toRender = <div key={item.link} className="separator"></div>
    //       } else {
    //         toRender = <a key={item.link} href={item.link} ><span className="material-symbols-outlined">{item.icon}</span><span className="text">{item.tabName}</span></a>
    //       }

    //       return (toRender)
    //     })}

    //     <div className="separator"></div>
    //     <a href="#envelope"><span className="material-symbols-outlined">account_circle</span><span className="text">UserName</span></a>
    //   </div>

    //   <div className="main" contentEditable style={{ overflow: "auto", maxWidth: "500px", height: "100vh", display: "flex", flexDirection: "column" }}>
    //     <h1>Main Content Area</h1>
    //     <p>Your content goes here...</p>
    //   </div>
    //   </div>
    // </>
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        {/* <div className={`sidenav ${isExpanded ? 'expanded' : ''}`} onDoubleClick={toggleSidebar} style={{ overflow: "auto", maxWidth: "200px" }}>
          {SidebarData.map((item) => {
            let toRender;

            if (item.tabName.startsWith("separator")) {
              toRender = <div key={item.link} className="separator"></div>
            } else {
              toRender = <a key={item.link} href={item.link}><span className="material-symbols-outlined">{item.icon}</span><span className="text">{item.tabName}</span></a>
            }

            return toRender;
          })}

          <div className="separator"></div>
          <a href="#envelope"><span className="material-symbols-outlined">account_circle</span><span className="text">UserName</span></a>
        </div> */}

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

        <div className="main" contentEditable style={{ overflow: "auto", flex: 1, height: "100vh", backgroundColor:"var(--primary-100)", color:"var(--secondary-900)" }}>
          <h1>Main Content Area</h1>
          <p>Your content goes here...</p>
        </div>
      </div>
    </>
  )
}

export default Sidebar;