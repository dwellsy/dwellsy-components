/* src/App.jsx */
import "./App.css";
import { Cards } from "./templates/Cards/Cards";
import Footer from "./templates/Footer/Footer";
import { Header } from "./templates/Header";
import { Hero } from "./templates/Hero/Hero";
import HomeTemplate from "./templates/HomeTemplate";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Cards />
      <HomeTemplate />
      <Footer />
    </>
  );
}

export default App;
