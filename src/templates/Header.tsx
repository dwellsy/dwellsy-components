/* src/App.jsx */
import "../App.css";
import MenuButton from "../components/buttons/MenuButton";
import Logo from "../components/logo";

export const Header = () => {
  return (
    <div className="bg-white dark:bg-slate-900 min-h-max">
      <nav className="flex items-center justify-between flex-wrap bg-white dark:bg-slate-900 p-6 max-w-8xl mx-auto">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Logo />
          <span className="font-semibold text-xl text-black dark:text-white tracking-tight">Tailwind CSS Demo</span>
        </div>
        <div className="block lg:hidden">
          <MenuButton />
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block">
          <div className="text-sm lg:flex-grow">
            <label className="relative text-gray-400 focus-within:text-gray-600 w-full">
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
            </label>
          </div>
          <div className="">
            <a href="#" 
              className="
                inline-block text-sm px-4 py-2 leading-none border rounded text-black dark:text-white border-slate-900 dark:border-white  
                hover:border-transparent hover:text-slate-900 hover:bg-white mt-4 lg:mt-0
            ">Download</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;