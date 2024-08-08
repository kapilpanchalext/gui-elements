import { useContext } from "react";
import { ActiveThemeContext } from "../../store/ActiveThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const {theme, toggleTheme} = useContext(ActiveThemeContext);
  return (
    <>
      <div className="navbar">
        <div className="logo">
            <h1>LOGO</h1>
        </div>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <div className="misc">
          <a className="icon" onClick={() => console.log("Responsive")}>
            <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>menu</span>
          </a>
          <button className="link" onClick={toggleTheme}> 
            <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>{theme === 'dark' ? "dark_mode" : "light_mode"}</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar;