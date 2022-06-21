import { Button } from "../../components/buttons"

export const Hero = () => {
  return (
    <section className="text-gray-600 bg-white dark:bg-slate-900 body-font max-w-screen-2xl">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-20 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-100">Before they sold out
            <br className="hidden lg:inline-block" />readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed dark:text-gray-300">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          <div className="flex justify-center">
            <Button type="primary">Button</Button>
            <Button>Button</Button>
          </div>
        </div>
      </div>
</section>
  )
}