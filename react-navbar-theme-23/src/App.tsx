import { useContext } from "react";
import "./theme/theme.css";
import { ActiveThemeContext } from "./store/ActiveThemeContext";

function App() {
  const {theme, toggleTheme} = useContext(ActiveThemeContext);

  return (
    <>
      <div data-app-theme={theme} style={{ height: "500px", width: "1000px"}}>
        <button onClick={toggleTheme}>Change Theme</button>
      </div>
    </>
  )
}

export default App;