import { useState } from "react";
import "./theme/theme.css";

function App() {

  const[activeTheme, setActiveTheme] = useState<string>('light');

  return (
    <>
    <div data-app-theme={activeTheme} style={{ height: "100px", width: "1000px"}}>
      <button className="primary">Primary 1</button>
      <button className="primary m">Primary 2</button>
      <button data-variant="primary" className="m">Primary Button</button>
      <button data-variant="secondary" className="m">Secondary Button</button>
      <button className="primary medium">Medium</button>
      <button className="primary small">Small</button>
      <button className="primary large">Large</button>
      <button className="primary xxlarger">2 Large this is a very large button</button>
      <button className="link">This is a link button</button>
      <div className="badge shake">Badge</div>
      <button className="primary large"
      onClick={() => setActiveTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))}>Theme</button>
    </div>
    </>
  )
}

export default App;