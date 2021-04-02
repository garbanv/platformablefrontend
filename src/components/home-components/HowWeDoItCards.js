import React from 'react'
/*assets*/
import buildImg from "../../assets/home/building_tools.png"
import measureImg from '../../assets/home/measuring_value.png'
import bestPracticesImg from '../../assets/home/sharing_best_practices.png'
import connectImg from '../../assets/home/connecting_partners.png'

const HowWeDoItCards = () => {
  const images = [
    {
      src: buildImg,
      title:
        "Building Tools",
      paragraph: "To foster platforms and open ecosystems",
    },
    {
      src: measureImg,
      title:
        "Measuring value",
      paragraph: "Generated from platforms and ecosystems",
    },
    {
      src: bestPracticesImg,
      title:
        "Sharing best practices",
      paragraph: "By describing what has worked for others",
    },
    {
      src: connectImg,
      title:
        "Connecting Partners",
      paragraph: "To work and learn from each other",
    },
  ]
  return (
    <section className="cards-section my-6 mx-auto lg:pt-72 pb-8">
      <h2 className="text-center my-20 text-secondary font-black">How we do it</h2>

      <div className="my-0 md:mx-16 mx-2 py-0 px-4 flex flex-wrap flex-col sm:flex-row justify-evenly items-center">
        {images.map((img, i) => (
          <div
            key={i}
            className="lg:w-2/5 w-full max-w-xl my-6 mx-2 p-4 rounded-full bg-card
          flex items-center 
          cursor-pointer transition-shadow hover:shadow-hover"
          >
            <img src={img.src} alt={img.title} className="mr-8 w-20 h-20" />

            <div className="w-8/12">
              <h6 className="my-1 text-secondary ">{img.title}</h6>
              <p className="text-darkGrey">{img.paragraph}</p>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  )
}

export default HowWeDoItCards
