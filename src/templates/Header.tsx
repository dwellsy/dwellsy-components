/* src/App.jsx */
import "../App.css";
import { Button, MenuButton } from "../components/buttons";
import Logo from "../components/logo";

export const Header = () => {
  const handleClick = () => alert("Download beginning");
  return (
    <div className="bg-white dark:bg-slate-900 min-h-max">
      <nav className="flex items-center justify-between flex-wrap bg-white dark:bg-slate-900 p-6 max-w-screen-2xl mx-auto">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Logo className="mr-3" />
          <span className="font-semibold text-md text-black dark:text-white tracking-tight">dwellsy-components</span>
        </div>
        <div className="block lg:hidden">
          <MenuButton />
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block">
          <div className="text-sm lg:flex-grow">
            <label className="relative text-gray-400 focus-within:text-gray-600 w-full">
              {/*
              <svg 
                className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3 pl-3" 
                viewBox="0 0 18 18" 
                width="24" 
                height="24"
              >
                <path 
                  d="M7.4 2.5c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9c1 0 1.8-.2 2.5-.8l3.7 3.7c.2.2.4.3.8.3.7 0 1.1-.4 1.1-1.1 0-.3-.1-.5-.3-.8L11.4 10c.4-.8.8-1.6.8-2.5.1-2.8-2.1-5-4.8-5zm0 1.6c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2-3.3-1.3-3.3-3.1 1.4-3.3 3.3-3.3z">
                </path>
              </svg>
              <input 
                type="search" 
                placeholder="Enter a city, neighborhood, workplace, school, or even a coffee shop"
                className="pl-9 mx-4 p-3 bg-white dark:bg-gray-300 border border-[#bdbae2] rounded-md black" 
              />
              */}
              <form>
                <input type="search" name="search" placeholder="Search" 
                  autoComplete="off"
                  className="
                    bg-white px-5 py-3 pl-8 text-gray-800 w-48 border-0 rounded-md 
                    focus:outline-0 focus:w-full duration-500
                  " />
              </form>
            </label>
          </div>
          <div className="">
            {/*
            <Button type="outline" onClick={handleClick}>Download</Button>
            */}
          <button id="dropdownDefault" 
            data-dropdown-toggle="dropdown" 
            className="
              text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
              text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            " 
            type="button"
          >
            Dropdown button 
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
              </path>
            </svg>
          </button>
          <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
              <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;