/* src/App.jsx */
import "./App.css";
import Footer from "./templates/Footer/Footer";
import { Header } from "./templates/Header";
import { Hero } from "./templates/Hero/Hero";
import HomeTemplate from "./templates/HomeTemplate";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <HomeTemplate />
      <Footer />
    </>
  );
}

export default App;
