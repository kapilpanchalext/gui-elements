import { useState } from 'react';
import './App.css';

function App() {

  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState<string>('#home');
  const [activeTheme, setActiveTheme] = useState<string>('dark');
  const [isResponsive, setIsResponsive] = useState(false);
 
  // Function to handle tab click
  const tabClickHandler = (tab: string) => {
    setActiveTab(tab);
  };
 
  const themeHandler = () => {
   setActiveTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  return (
    <>
      {/* <div className="navbar">
        <div className="section">
          <div className='section-start'>red div</div>
          <div className='section-mid'></div>
          <div className='section-end'>yellow div</div>
        </div>
      </div> */}
      <div>
        <div className={isResponsive ? `topnav ${activeTheme}` : `topnav responsive ${activeTheme}`}>
          <div className='section-start'><img src='https://www.w3schools.com/howto/img_avatar.png' alt="Avatar" /></div>
          
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
            
            <a className="icon" onClick={() => setIsResponsive(!isResponsive)}>
              <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>menu</span>
            </a>
          </div>

          <div className='section-end'>
            <a style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
              href="#theme"
              className={activeTab === '#theme' ? 'active' : ''}
              onClick={themeHandler}>
              <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>{activeTheme ? "dark_mode" : "light_mode"}</span>
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

export default App;