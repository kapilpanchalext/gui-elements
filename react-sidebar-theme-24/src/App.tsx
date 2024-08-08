import { useContext } from "react";
import Navbar from "./components/navbar/Navbar";
import { ActiveThemeContext } from "./store/ActiveThemeContext";

function App() {
  const {theme} = useContext(ActiveThemeContext);
  return (
    <>
      <div data-app-theme={theme}>
        <Navbar />
      </div>
    </>
  )
}

export default App;