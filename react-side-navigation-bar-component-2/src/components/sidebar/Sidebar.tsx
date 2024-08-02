import { useState } from 'react';
import "./Sidebar.css";

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
      <div className={`sidenav ${isExpanded ? 'expanded' : ''}`} onClick={toggleSidebar} style={{ overflow: "auto" }}>
        <a href="#home"><span className="material-symbols-outlined">home</span><span className="text">Home</span></a>
        <a href="#search"><span className="material-symbols-outlined">search</span><span className="text">Search</span></a>
        <a href="#envelope"><span className="material-symbols-outlined">mail</span><span className="text">Envelope</span></a>
        <a href="#globe"><span className="material-symbols-outlined">globe</span><span className="text">Globe</span></a>
        <a href="#trash"><span className="material-symbols-outlined">delete</span><span className="text">Trash</span></a>
        <a href="#home"><span className="material-symbols-outlined">home</span><span className="text">Home</span></a>
        <div className="separator"></div>
        <a href="#search"><span className="material-symbols-outlined">search</span><span className="text">Search</span></a>
        <a href="#envelope"><span className="material-symbols-outlined">mail</span><span className="text">Envelope</span></a>
        <a href="#globe"><span className="material-symbols-outlined">globe</span><span className="text">Globe</span></a>
        <a href="#trash"><span className="material-symbols-outlined">delete</span><span className="text">Trash</span></a>
        <a href="#home"><span className="material-symbols-outlined">home</span><span className="text">Home</span></a>
        <div className="separator"></div>
        <a href="#search"><span className="material-symbols-outlined">search</span><span className="text">Search</span></a>
        <a href="#envelope"><span className="material-symbols-outlined">mail</span><span className="text">Envelope</span></a>
        <a href="#globe"><span className="material-symbols-outlined">globe</span><span className="text">Globe</span></a>
        <a href="#trash"><span className="material-symbols-outlined">delete</span><span className="text">Trash</span></a>
        <a href="#home"><span className="material-symbols-outlined">home</span><span className="text">Home</span></a>
        <div className="separator"></div>
        <a href="#search"><span className="material-symbols-outlined">search</span><span className="text">Search</span></a>
        <a href="#envelope"><span className="material-symbols-outlined">mail</span><span className="text">Envelope</span></a>
        <a href="#globe"><span className="material-symbols-outlined">globe</span><span className="text">Globe</span></a>
        <a href="#trash"><span className="material-symbols-outlined">delete</span><span className="text">Trash</span></a>
        <a href="#home"><span className="material-symbols-outlined">home</span><span className="text">Home</span></a>
        <div className="separator"></div>
        <a href="#search"><span className="material-symbols-outlined">search</span><span className="text">Search</span></a>
        <a href="#envelope"><span className="material-symbols-outlined">mail</span><span className="text">Envelope</span></a>
        <a href="#globe"><span className="material-symbols-outlined">globe</span><span className="text">Globe</span></a>
        <a href="#trash"><span className="material-symbols-outlined">delete</span><span className="text">Trash</span></a>
        <a href="#home"><span className="material-symbols-outlined">home</span><span className="text">Home</span></a>
        <div className="separator"></div>
        <a href="#search"><span className="material-symbols-outlined">search</span><span className="text">Search</span></a>
        <a href="#envelope"><span className="material-symbols-outlined">mail</span><span className="text">Envelope</span></a>
        <a href="#globe"><span className="material-symbols-outlined">globe</span><span className="text">Globe</span></a>
        <a href="#trash"><span className="material-symbols-outlined">delete</span><span className="text">Trash</span></a>
        <a href="#home"><span className="material-symbols-outlined">home</span><span className="text">Home</span></a>
        <div className="separator"></div>
        <a href="#search"><span className="material-symbols-outlined">search</span><span className="text">Search</span></a>
        <a href="#envelope"><span className="material-symbols-outlined">mail</span><span className="text">Envelope</span></a>
        <a href="#globe"><span className="material-symbols-outlined">globe</span><span className="text">Globe</span></a>
        <a href="#trash"><span className="material-symbols-outlined">delete</span><span className="text">Trash</span></a>
        <a href="#home"><span className="material-symbols-outlined">home</span><span className="text">Home</span></a>
        <div className="separator"></div>
        <a href="#search"><span className="material-symbols-outlined">search</span><span className="text">Search</span></a>
        <a href="#envelope"><span className="material-symbols-outlined">mail</span><span className="text">Envelope</span></a>
        <a href="#globe"><span className="material-symbols-outlined">globe</span><span className="text">Globe</span></a>
        <a href="#trash"><span className="material-symbols-outlined">delete</span><span className="text">Trash</span></a>
        <a href="#home"><span className="material-symbols-outlined">home</span><span className="text">Home</span></a>
        <div className="separator"></div>
        <a href="#search"><span className="material-symbols-outlined">search</span><span className="text">Search</span></a>
        <a href="#envelope"><span className="material-symbols-outlined">mail</span><span className="text">Envelope</span></a>
        <a href="#globe"><span className="material-symbols-outlined">globe</span><span className="text">Globe</span></a>
        <a href="#trash"><span className="material-symbols-outlined">delete</span><span className="text">Trash</span></a>
        <a href="#home"><span className="material-symbols-outlined">home</span><span className="text">Home</span></a>
        <div className="separator"></div>
        <a href="#search"><span className="material-symbols-outlined">search</span><span className="text">Search</span></a>
        <a href="#envelope"><span className="material-symbols-outlined">mail</span><span className="text">Envelope</span></a>
        <a href="#globe"><span className="material-symbols-outlined">globe</span><span className="text">Globe</span></a>
        <a href="#trash"><span className="material-symbols-outlined">delete</span><span className="text">Trash</span></a>
        <div className="separator"></div>
        <a href="#envelope"><span className="material-symbols-outlined">account_circle</span><span className="text">UserName</span></a>
      </div>
    </>
  )
}

export default Sidebar;