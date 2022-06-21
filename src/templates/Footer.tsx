/* src/App.jsx */
import React, { PropsWithChildren } from "react";
import "../App.css";
import Logo from '../assets/images/logo-stacked-light.25f6a9cb.svg';
import { EqualOpportunityIcon } from "../components/icons/EqualOpportunity";
import FacebookIcon from "../components/icons/Facebook";
import InstagramIcon from "../components/icons/Instagram";
import LinkedInIcon from "../components/icons/LinkedIn";
import TwitterIcon from "../components/icons/Twitter";
import Heading from "../components/text/Heading";

const year = new Date().getFullYear();

export const LI = ({ link, text }:{ link: string, text: string }) => {
  return (
    <li>
      <a href={link} className="dark:text-gray-300 dark:hover:text-gray-200 text-gray-600 hover:text-gray-800">{ text }</a>
    </li>
  )
}

export const Footer = () => {
  return (
    <footer className="text-gray-600 body-font dark:bg-slate-900">
        <div className="px-5 dark:bg-slate-900 item-center max-w-screen-2xl mx-auto pt-10 min-h-[150px]">
          <img src={Logo} alt="Dwellsy" className="max-h-28" />
        </div>
      <div className="max-w-screen-2xl container px-5 py-1 pb-8 mx-auto flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
        <LinkedInIcon />
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <Heading>Categories</Heading>
            <nav className="list-none mb-10">
              <LI link="/" text="Newsroom"></LI>
              <LI link="/" text="About Us"></LI>
              <LI link="/" text="Join the Team"></LI>
              <LI link="/" text="Blog"></LI>
              <LI link="/" text="Lightbox"></LI>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <Heading>Categories</Heading>
            <nav className="list-none mb-10">
              <LI link="/" text="Contact Us"></LI>
              <LI link="/" text="Terms of Service"></LI>
              <LI link="/" text="Equal Housing"></LI>
              <LI link="/" text="List With Us"></LI>
              <LI link="/" text="Rent Maps"></LI>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <Heading>Categories</Heading>
            <nav className="list-none mb-10">
              <LI link="/" text="Privacy Policy"></LI>
              <LI link="/" text="Do Not Sell"></LI>
              <LI link="/" text="Reporting Vulnerabilities"></LI>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 max-w-screen-2xl justify-center">
        <div className="px-5 pb-8 flex items-center text-black dark:text-white text-sm">
          <EqualOpportunityIcon className="fill-gray-500 dark:fill-gray-600 mx-4" />
          <span className="mx-2">Equal Housing Opportunity</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;