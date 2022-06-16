/* src/App.jsx */
import "../App.css";
import MenuButton from "../components/buttons/MenuButton";
import Logo from "../components/logo";

export const Header = () => {
  return (
    <div className="bg-white dark:bg-slate-900">
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
            <input type="search" placeholder="Search" className="mx-4 p-3 focus:float-left focus:absolute focus:left-2 focus:right-2 focus:top-4" />
          </div>
          <div className="">
            <a href="#" 
              className="
                inline-block text-sm px-4 py-2 leading-none border rounded text-black dark:text-white border-black dark:border-white 
                hover:border-transparent hover:text-slate-900 hover:bg-white mt-4 lg:mt-0
            ">Download</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;