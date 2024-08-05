import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import "./App.css";

function App() {

  return (
    <>
      <Breadcrumb />
      <nav className="crumbs">
        <ol>
          <li className="crumb"><a href="#">Bikes</a></li>
          <li className="crumb"><a href="#">BMX</a></li>
          <li className="crumb">Jump Bike 3000</li>
        </ol>
      </nav>
    </>
  )
}

export default App;