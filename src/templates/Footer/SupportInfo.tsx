import "../../App.css";
import Heading from "../../components/text/Heading";
import LI from "./ListItem";

export const SupportInfo = () => {
  return (
    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
      <Heading>Support / Info</Heading>
      <nav className="list-none mb-10">
        <LI link="/" text="Contact Us"></LI>
        <LI link="/" text="Terms of Service"></LI>
        <LI link="/" text="Equal Housing"></LI>
        <LI link="/" text="List With Us"></LI>
        <LI link="/" text="Rent Maps"></LI>
      </nav>
    </div>
  )
}

export default SupportInfo;
