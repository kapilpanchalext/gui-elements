// import './App.css';
import './theme/theme.css';
import { useState } from 'react';

function App() {
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
      <div className={activeTheme} style={{ width: "100vw", height: "50vh" }}>
        <h1>Hello World</h1>
      </div>
      <button onClick={themeHandler}>Theme</button>
    </>
  )
}

export default App;