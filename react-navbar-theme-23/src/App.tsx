import { useContext } from "react";
import "./theme/theme.css";
import { ActiveThemeContext } from "./store/ActiveThemeContext";
import Navbar from "./components/navbar/Navbar";

function App() {
  const {theme} = useContext(ActiveThemeContext);

  return (
    <>
      <div data-app-theme={theme}>
        <Navbar />
        <Side
      </div>
    </>
  )
}

export default App;