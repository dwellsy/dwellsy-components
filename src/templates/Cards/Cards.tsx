import Heading from "../../components/text/Heading"
import Subheading from "../../components/text/Subheading"

const Card = () => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-2">
      <div className="bg-gray-100 p-0 rounded-lg">
        <img className="h-40 rounded w-full object-cover object-center mb-2" src="https://dummyimage.com/720x400" alt="content" />
        <div className="p-3">
        {/*
        <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">SUBTITLE</h3>
        */}
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">123 Main Street</h2>
        <p className="leading-relaxed text-base">
          More stuff goes in here
        </p>
        </div>
      </div>
    </div>
  )
}

export const Cards = () => {
  return (
    <section className="text-gray-600 body-font bg-white dark:bg-slate-900">
      <div className="container px-5 py-12 mx-auto">
        <Heading size="lg">Properties</Heading>
        <div className="flex flex-wrap -mx-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  )
}