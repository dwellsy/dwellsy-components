/* src/App.jsx */
import "../App.css";
import MenuButton from "../components/buttons/MenuButton";
import Logo from "../components/logo";

export const Header = () => {
  return (
    <div className="bg-white dark:bg-slate-900 min-h-max">
      <nav className="flex items-center justify-between flex-wrap bg-white dark:bg-slate-900 p-6 max-w-6xl mx-auto">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Logo />
          <span className="font-semibold text-xl text-black dark:text-white tracking-tight">Tailwind CSS Demo</span>
        </div>
        <div className="block lg:hidden">
          <MenuButton />
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block">
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-slate-900 dark:text-slate-100 hover:text-red mr-4 dark:hover:text-slate-300">
              Docs
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-slate-900 dark:text-slate-100 hover:text-red mr-4 dark:hover:text-slate-300">
              Examples
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-slate-900 dark:text-slate-100 hover:text-red dark:hover:text-slate-300">
              Blog
            </a>
            <label className="relative text-gray-400 focus-within:text-gray-600 ">
              <svg className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3 pl-3" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="30px" height="30px" viewBox="0 0 30 30">
              <path d="M28,26.6l-8.265-8.264C21.15,16.61,22,14.405,22,12c0-5.523-4.478-10-10-10S2,6.477,2,12c0,5.523,4.478,10,10,10
                c2.404,0,4.61-0.85,6.336-2.265L26.6,28L28,26.6z M12,20c-4.418,0-8-3.582-8-8c0-4.418,3.582-8,8-8s8,3.582,8,8
                C20,16.418,16.418,20,12,20z"/>
              </svg>
              <input 
                type="search" 
                placeholder="Search" 
                className="pl-9 mx-4 p-3 bg-gray-100 dark:bg-gray-300 focus:top-4 border-2 border-slate-300 rounded-sm" 
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