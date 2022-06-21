import "../../App.css";
import Heading from "../../components/text/Heading";
import LI from "./ListItem";

export const Company = () => {
  return (
    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
      <Heading>Company</Heading>
      <nav className="list-none mb-10">
        <LI link="/" text="Newsroom"></LI>
        <LI link="/" text="About Us"></LI>
        <LI link="/" text="Join the Team"></LI>
        <LI link="/" text="Blog"></LI>
        <LI link="/" text="Lightbox"></LI>
      </nav>
    </div>
  )
}

export default Company;
