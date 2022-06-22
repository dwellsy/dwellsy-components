import { Button } from "../../components/buttons"
import Heading from "../../components/text/Heading"

export const Hero = () => {
  return (
    <section className="text-gray-600 bg-white dark:bg-slate-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-20 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <Heading size="xl">All rentals, All in one place</Heading>
          <p className="mb-8 leading-relaxed dark:text-gray-300">
            You shouldn’t have to search a jillion sites to find the right place for you. With over 13 million homes all in one place, you can rest assured you have seen it all.
          </p>
          <div className="flex justify-center">
            <Button type="primary">Button</Button>
            <Button disabled={true} >Disabled</Button>
            <Button error={true} >Error</Button>
          </div>
        </div>
      </div>
    </section>
  )
}