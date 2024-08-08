import { useContext } from "react";
import Navbar from "./components/navbar/Navbar";
import { ActiveThemeContext } from "./store/ActiveThemeContext";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const {theme} = useContext(ActiveThemeContext);
  return (
    <>
      <div data-app-theme={theme}>
        <Navbar />
        <Sidebar />
      </div>
    </>
  )
}

export default App;