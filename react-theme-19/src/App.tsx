import { useState } from "react";
import './App.css';

function App() {

  const [activeTheme, setActiveTheme] = useState<string>('dark-mode');

  return (
    // <>
    //   <div className={activeTheme} style={{ width: "100%", height: "80vh" }}>
    //     <h1>Theme: {activeTheme}</h1>
    //     <div className="dark-mode-primary" style={{ width: "100%", height: "10vh" }}>
    //     <h1>Primary</h1>
    //       <button className="dark-mode-primary" style={{ width: "200px", height: "50px", borderRadius: "10px", borderColor:"var(--primary-700)" }}>Button</button>
    //     </div>
    //     <div className="dark-mode-accent" style={{ width: "100%", height: "10vh" }}>
    //     <h1>Accent</h1></div>
    //     <div className="dark-mode-warning" style={{ width: "100%", height: "10vh" }}>
    //     <h1>Warning</h1></div>
    //     <div className="dark-mode-danger" style={{ width: "100%", height: "10vh" }}>
    //     <h1>Danger</h1></div>
    //     <div className="dark-mode-success" style={{ width: "100%", height: "10vh" }}>
    //     <h1>Success</h1></div>
    //     <div className="dark-mode-primary" style={{ backgroundColor:"transparent", borderColor:"black", width: "500px", height: "100px", borderRadius: "20px", padding: "20px" }}>
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
    //   </div>
    //   <button onClick={() => setActiveTheme((prevTheme) => (prevTheme === 'dark-mode' ? 'light-mode' : 'dark-mode'))}>Change Theme</button>
    // </>

    <>
      <div className={activeTheme} style={{ width: "100%", height: "80vh" }}>
        <h1>Theme: {activeTheme}</h1>
        <div className="dark-mode-primary" style={{ width: "100%", height: "10vh" }}>
          <h1>Primary</h1>
          <button
            className="dark-mode-primary"
            style={{
              width: "200px",
              height: "50px",
              borderRadius: "10px",
              borderColor: "var(--primary-700)",
              borderWidth: "2px",
              borderStyle: "solid",
            }}>
            Button
          </button>
        </div>
        <div className="dark-mode-accent" style={{ width: "100%", height: "10vh" }}>
          <h1>Accent</h1>
        </div>
        <div className="dark-mode-warning" style={{ width: "100%", height: "10vh" }}>
          <h1>Warning</h1>
        </div>
        <div className="dark-mode-danger" style={{ width: "100%", height: "10vh" }}>
          <h1>Danger</h1>
        </div>
        <div className="dark-mode-success" style={{ width: "100%", height: "10vh" }}>
          <h1>Success</h1>
        </div>
        <div
          className="dark-mode-primary"
          style={{
            borderWidth: "2px",
            borderStyle: "solid",
            width: "500px",
            height: "100px",
            borderRadius: "20px",
            padding: "20px",
          }}>
          <h1 style={{ color: "var(--primary-900)" }}>Primary</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <button onClick={() => setActiveTheme((prevTheme) => (prevTheme === 'dark-mode' ? 'light-mode' : 'dark-mode'))}>
        Change Theme
      </button>
    </>
  )
}

export default App;