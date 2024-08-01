import './App.css';

function App() {

  const responsiveClassHandler = () => {
    const x = document.getElementById("myTopnav");
    if (x !== null) {
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  }

  return (
    <>
      <div className="topnav" id="myTopnav">
        <a href="#home" className="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a className="icon" onClick={responsiveClassHandler}>
          <span className="material-symbols-outlined" style={{ fontSize: "24px", marginRight: "8px" }}>menu</span>
        </a>
      </div>

      <div style={{ paddingLeft:"16px" }}>
        <h2>Responsive Topnav Example</h2>
        <p>Resize the browser window to see how it works.</p>
      </div>
    </>
  )
}

export default App;