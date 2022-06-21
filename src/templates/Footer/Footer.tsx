import "../../App.css";
import { EqualOpportunityIcon } from "../../components/icons/EqualOpportunity";
import SocialIcons from "./SocialIcons";
import LogoHeader from "./LogoHeader";
import Company from "./Company";
import SupportInfo from "./SupportInfo";
import LegalPrivacy from "./LegalPrivacy";

export const Footer = () => {
  return (
    <footer className="text-gray-600 body-font dark:bg-slate-900">
      <LogoHeader />
      <div className="max-w-screen-2xl container px-5 py-1 pb-8 mx-auto flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <SocialIcons />
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <Company />
          <SupportInfo />
          <LegalPrivacy />
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 max-w-screen-2xl items-center text-center">
        <div className="pb-8 mx-auto flex items-center text-black dark:text-white text-sm">
          <EqualOpportunityIcon className="fill-gray-500 dark:fill-gray-600 mx-4" />
          <span className="mx-2">Equal Housing Opportunity</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;