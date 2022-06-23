import "../App.css";
import { Cards } from "../templates/Cards/Cards";
import { Hero } from "../templates/Hero/Hero";
import HomeTemplate from "../templates/HomeTemplate";

function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <HomeTemplate />
    </>
  );
}

export default Home;