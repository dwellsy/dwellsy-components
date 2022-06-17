/* src/App.jsx */
import "./App.css";
import Footer from "./templates/Footer";
import { Header } from "./templates/Header";
import HomeTemplate from "./templates/HomeTemplate";

function App() {
  return (
    <>
      <Header />
      <HomeTemplate />
      <Footer />
    </>
  );
}

export default App;
