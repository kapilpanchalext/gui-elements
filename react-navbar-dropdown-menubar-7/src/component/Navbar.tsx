import { useState } from 'react';
import "./Navbar.css";
import "../theme/theme.css";

const Navbar = () => {
    // State to keep track of the active tab
    const [activeTab, setActiveTab] = useState<string>('#home');
    const [activeTheme, setActiveTheme] = useState<string>('dark-mode');
    const [isResponsive, setIsResponsive] = useState(false);

    // Function to handle tab click
    const tabClickHandler = (tab: string) => {
        setActiveTab(tab);
    };

    const themeHandler = () => {
        setActiveTheme((prevTheme) => (prevTheme === 'dark-mode' ? 'light-mode' : 'dark-mode'));
    }

  return (
    <>
      <div>
        <div className={isResponsive ? `topnav ${activeTheme}` : `topnav responsive ${activeTheme}`}>
          <div className='section-start' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <h4>LOGO</h4>
          </div>

          <div className={isResponsive ? `topnav section-mid ${activeTheme}` : `topnav section-mid responsive ${activeTheme}`}>
            <a
              href="#home"
              className={activeTab === '#home' ? 'active' : ''}
              onClick={() => tabClickHandler('#home')}
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <span className="material-symbols-outlined" style={{ fontSize: "24px", marginRight: "8px" }}>home</span>
              Home
            </a>
            <a
              href="#textEditor"
              className={activeTab === '#textEditor' ? 'active' : ''}
              onClick={() => tabClickHandler('#textEditor')}>
              Text Editor
            </a>
            <a
              href="#contact"
              className={activeTab === '#contact' ? 'active' : ''}
              onClick={() => tabClickHandler('#contact')}>
              Contact
            </a>
            <a
              href="#about"
              className={activeTab === '#about' ? 'active' : ''}
              onClick={() => tabClickHandler('#about')}>
              About
            </a>
              <div className='search'>
                <input className='input' type="text" placeholder="Search.." name="search" />
              </div>
            <a className="icon" onClick={() => setIsResponsive(!isResponsive)}>
              <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>menu</span>
            </a>
          </div>

          <div className='section-end' style={{display: "flex", alignItems: "center", justifyContent: "center"}}>

          <div className="dropdown">
            <a href="#" className="dropicon">
              <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>arrow_drop_down</span>
            </a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>

            <a style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
              href="#theme"
              className={activeTab === '#theme' ? 'active' : ''}
              onClick={themeHandler}>
              <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>{activeTheme === 'dark-mode' ? "dark_mode" : "light_mode"}</span>
            </a>

          </div>
        </div>

        <div style={{ paddingLeft: "16px" }}>
          <h2>Top Navigation Example</h2>
          <p>Some content..</p>
        </div>
      </div>
    </>
  )
}

export default Navbar;