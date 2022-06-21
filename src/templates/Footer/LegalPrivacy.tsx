import "../../App.css";
import Heading from "../../components/text/Heading";
import LI from "./ListItem";

export const LegalPrivacy = () => {
  return (
    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
      <Heading>Legal / Privacy</Heading>
      <nav className="list-none mb-10">
        <LI link="/" text="Privacy Policy"></LI>
        <LI link="/" text="Do Not Sell"></LI>
        <LI link="/" text="Reporting Vulnerabilities"></LI>
      </nav>
    </div>
  )
}

export default LegalPrivacy;
