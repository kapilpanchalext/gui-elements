import { useState } from "react";
import "./Sidebar.css";
import { Outlet } from "react-router-dom";

type Props = {}

const Sidebar = (props: Props) => {

  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expanded state
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <>
      <div>
        <div
          className={`sidebar ${isExpanded ? "expanded" : ""}`}
          onClick={toggleSidebar}
        >
          <a href="#home">
            <span className="material-symbols-outlined">home</span>
            <span className="text">Home</span>
          </a>
          <a href="#search">
            <span className="material-symbols-outlined">search</span>
            <span className="text">Search</span>
          </a>
          <a href="#envelope">
            <span className="material-symbols-outlined">mail</span>
            <span className="text">Envelope</span>
          </a>
          <a href="#globe">
            <span className="material-symbols-outlined">globe</span>
            <span className="text">Globe</span>
          </a>
          <a href="#trash">
            <span className="material-symbols-outlined">delete</span>
            <span className="text">Trash</span>
          </a>
          <a href="#home">
            <span className="material-symbols-outlined">home</span>
            <span className="text">Home</span>
          </a>
          <div className="separator"></div>
          <a href="#envelope">
            <span className="material-symbols-outlined">account_circle</span>
            <span className="text">UserName</span>
          </a>
        </div>

        <div className="main" style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "top", justifyContent: "left"}}>
          <h2>Sidebar</h2>
          <p>This sidebar is of full height (100%) and always shown.</p>
          <p>Scroll down the page to see the result.</p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
            quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
            laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
            molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
            quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
            laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
            molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
            quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
            laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
            molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
            quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
            laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
            molestiae voluptatibus.
          </p>
        </div>
      </div>
    </>
  )
}

export default Sidebar;