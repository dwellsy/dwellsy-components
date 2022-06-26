import { Link } from "react-router-dom"
import { Button } from "../../components/buttons"
import Heading from "../../components/text/Heading"
import BGImage1 from '../../assets/heroBGs/1.jpeg';

export const Hero = () => {
  return (
    <section 
      className="bg-white dark:bg-gray-900 justify-center " 
    >
      <div 
        className="
          grid px-12 py-48 mx-auto lg:gap-8 xl:gap-0 lg:py-48 lg:grid-cols-12 bg-cover h-max min-h-full
          max-w-screen-2xl
          rounded-md
        "
        style={{ backgroundImage: `url(${BGImage1})`}}
      >
        <div className="mr-auto place-self-center lg:col-span-12">
            <h1 className="
              mb-1 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white
            ">
              All rentals, All in one place
            </h1>
            <p className="max-w-2xl mb-6 font-bold text-slate-900 lg:mb-8 md:text-md lg:text-lg dark:text-slate-100">
              13 million rental homes to choose from
            </p>
            <form>
              <input type="search" name="search" placeholder="Search" 
                autoComplete="off"
                className="
                  bg-white px-5 py-3 text-gray-800 w-full border-0 rounded-md 
                  focus:outline-0 duration-500
                " />
            </form>
        </div>
        {/*
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
        </div>                
        */}
      </div>
    {/*
    <section className="text-gray-600 bg-white dark:bg-slate-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-20 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <Heading size="2xl">
          All rentals, All in one place
          </Heading>
          <p className="mb-8 leading-relaxed dark:text-gray-300">
            You shouldn’t have to search a jillion sites to find the right place for you. With over 13 million homes all in one place, you can rest assured you have seen it all.
          </p>
          <div className="flex justify-center">
            <Link to="buttons">
              <Button type="primary">Button</Button>
            </Link>
            <Link to="buttons">
              <Button disabled={true} >Disabled</Button>
            </Link>
            <Link to="buttons">
              <Button error={true} >Error</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    */}
    </section>
  )
}