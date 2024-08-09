import { useContext } from "react";
import Navbar from "./components/navbar/Navbar";
import { ActiveThemeContext } from "./store/ActiveThemeContext";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";

function App() {
  const {theme} = useContext(ActiveThemeContext);
  return (
    <>
      <div data-app-theme={theme} >
        <Navbar />
        <Sidebar />
        <div className="pages" style={{backgroundColor: "gray"}}>Sidebar component1</div>
      </div>
    </>
  )
}

export default App;