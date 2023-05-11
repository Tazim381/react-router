import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/navbar";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
