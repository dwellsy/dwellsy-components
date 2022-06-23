/* src/App.jsx */
import "./App.css";
import Footer from "./templates/Footer/Footer";
import { Header } from "./templates/Header";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
