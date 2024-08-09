import { useContext, useState } from "react";
import { ActiveThemeContext } from "../../store/ActiveThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const {theme, toggleTheme} = useContext(ActiveThemeContext);
  const [isResponsive, setIsResponsive] = useState<boolean>(false);

  return (
    <>
      <div className="navbar">
        <div className={`pages ${isResponsive ? 'responsive' : ''}`}>
          <a href="#home">Logo</a>
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <button className="link" onClick={toggleTheme}>
            <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>
            {theme === 'dark' ? "dark_mode" : "light_mode"}
            </span>
          </button>
          <button className="res-icon link" onClick={() => setIsResponsive(!isResponsive)}>
            <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>menu</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar;