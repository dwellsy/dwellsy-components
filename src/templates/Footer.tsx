/* src/App.jsx */
import "../App.css";
import Logo from '../assets/images/logo-stacked-light.25f6a9cb.svg';
import Heading from "../components/text/Heading";

export const Footer = () => {
  return (
    <>
      <div className="bg-white dark:bg-slate-900 items-center">
        <div className="bg-white dark:bg-slate-900 item-center max-w-screen-2xl mx-auto pt-10 ">
          <img src={Logo} alt="Dwellsy" className="max-h-28" loading="lazy" />
        </div>
        <div className="bg-white dark:bg-slate-900 items-center pb-24">
          <div className="flex overflow-hidden bg-white dark:bg-slate-900 min-h-min item-center justify-between max-w-screen-2xl mx-auto">
            <div className="px-1 w-1/4 overflow-hidden text-white mx-1 flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.63 11.55" className="h-7 m-x-1 mx-3">
                  <title>icon-brand-fb</title>
                  <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1" className="text-white">
                    <path className="fill-black dark:fill-white" d="M6.72,11.55V7.49H8.07l.26-1.68H6.72V4.72a.84.84,0,0,1,1-.91H8.4V2.38a9.11,9.11,0,0,0-1.3-.11A2.06,2.06,0,0,0,4.9,4.53V5.81H3.43V7.49H4.9v4.06a5.81,5.81,0,1,1,1.82,0Z"/>
                  </g></g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9.75" className="h-7 mx-3">
                  <title>icon-brand-tw</title>
                  <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
                    <path className="fill-black dark:fill-white" d="M10.77,2.75a7,7,0,0,1-7,7A7,7,0,0,1,0,8.64a3.89,3.89,0,0,0,.59,0,5,5,0,0,0,3.06-1,2.46,2.46,0,0,1-2.3-1.7,3.44,3.44,0,0,0,.46,0,2.82,2.82,0,0,0,.65-.08,2.46,2.46,0,0,1-2-2.41v0a2.55,2.55,0,0,0,1.11.31A2.47,2.47,0,0,1,.5,1.69,2.35,2.35,0,0,1,.84.45,7,7,0,0,0,5.91,3a2.6,2.6,0,0,1-.06-.56A2.46,2.46,0,0,1,10.1.78a5.06,5.06,0,0,0,1.57-.6,2.53,2.53,0,0,1-1.09,1.36A5.13,5.13,0,0,0,12,1.16a5.29,5.29,0,0,1-1.23,1.27Z"/></g>
                  </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.51 10.5" className="h-7 mx-3">
                  <title>icon-brand-ig</title>
                  <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
                    <path className="fill-black dark:fill-white" d="M10.47,7.42a3.15,3.15,0,0,1-.85,2.2,3.13,3.13,0,0,1-2.2.85c-.87,0-3.47,0-4.33,0a3.16,3.16,0,0,1-2.2-.85A3.11,3.11,0,0,1,0,7.42C0,6.55,0,4,0,3.08A3.11,3.11,0,0,1,.89.88,3.12,3.12,0,0,1,3.09,0C4,0,6.55,0,7.42,0a3.09,3.09,0,0,1,2.2.85,3.07,3.07,0,0,1,.85,2.2C10.52,4,10.52,6.55,10.47,7.42ZM9.56,5.25a11.71,11.71,0,0,0-.21-3.09,1.76,1.76,0,0,0-1-1A11.76,11.76,0,0,0,5.25,1a11.31,11.31,0,0,0-3.09.21,1.76,1.76,0,0,0-1,1A11.71,11.71,0,0,0,1,5.25a11.76,11.76,0,0,0,.21,3.1,1.79,1.79,0,0,0,1,1,11.71,11.71,0,0,0,3.09.21,11.76,11.76,0,0,0,3.1-.21,1.79,1.79,0,0,0,1-1A11.76,11.76,0,0,0,9.56,5.25ZM8,5.25a2.7,2.7,0,1,1-2.7-2.69A2.69,2.69,0,0,1,8,5.25ZM7,5.25A1.76,1.76,0,1,0,5.25,7,1.76,1.76,0,0,0,7,5.25ZM8.06,3.08a.63.63,0,1,1,0-1.26.63.63,0,0,1,0,1.26Z"/></g>
                  </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.5 10.5" className="h-7 mx-3">
                  <title>icon-brand-li</title>
                  <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
                    <path className="fill-black dark:fill-white" d="M10.5.76v9a.76.76,0,0,1-.75.76h-9A.75.75,0,0,1,0,9.74v-9A.75.75,0,0,1,.75,0h9A.76.76,0,0,1,10.5.76ZM3.3,2.4a.91.91,0,1,0-.9.9A.91.91,0,0,0,3.3,2.4ZM3.18,9V4H1.62V9H3.18ZM9,6.25c0-1.35-.3-2.39-1.87-2.39a1.63,1.63,0,0,0-1.47.81h0V4H4.15V9H5.71V6.52c0-.65.12-1.29.93-1.29s.81.75.81,1.33V9H9Z"/></g>
                  </g>
                </svg>
            </div>
            <div className="px-1 w-1/4 overflow-hidden text-white ">
              <Heading size="sm" level="h4">Company</Heading>
              <ul className="pt-6">
                <li className="text-slate-300">Newsroom</li>
                <li className="text-slate-300">About Us</li>
                <li className="text-slate-300">Join the Team</li>
                <li className="text-slate-300">Blog</li>
                <li className="text-slate-300">Lightbox</li>
              </ul>
            </div>
            <div className="px-1 w-1/4 overflow-hidden text-white ">
              <Heading size="sm" level="h4">Support / Info</Heading>
              <ul className="pt-6">
                <li className="text-slate-300">Contact Us</li>
                <li className="text-slate-300">Terms of Service</li>
                <li className="text-slate-300">Equal Housing</li>
                <li className="text-slate-300">List With Us</li>
                <li className="text-slate-300">Rent Maps</li>
              </ul>
            </div>
            <div className="px-1 w-1/4 overflow-hidden text-white ">
              <Heading size="sm" level="h4">Legal / Privacy</Heading>
              <ul className="pt-6">
                <li className="text-slate-300">Privacy Policy</li>
                <li className="text-slate-300">Do Not Sell</li>
                <li className="text-slate-300">Reporting Vulnerabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;