import React from 'react'
/*assets*/
import govImg from "../../assets/home/governments.png"
import regulatoryImg from '../../assets/home/regulatory_authorities.png'
import industryImg from '../../assets/home/industry_networks.png'
import apiProvImg from '../../assets/home/api_providers.png'

const WorkWithCards = () => {
  const images = [
    {
      src: govImg,
      title:
        "Governments",
      paragraph: "that need to collaborate openly with increasingly complex networks of partners and stakeholders",
    },
    {
      src: regulatoryImg,
      title:
        "Regulatory authorities",
      paragraph: "needing to ensure that platforms are creating equitable opportunities for all.",
    },
    {
      src: industryImg,
      title:
        "Industry networks",
      paragraph: "and associations needing offer tools and training that can encourage their members to move to platform models.",
    },
    {
      src: apiProvImg,
      title:
        "API providers and consultants",
      paragraph: "who need to draw on best practices and latest evidence to communicate their value.",
    },
  ]
  return (
    <section className="cards-section my-6 mx-auto py-8">
      <h2 className="text-center my-5 font-black">We Work with</h2>

      <div className="my-0 md:mx-16 mx-2 py-0 px-3 flex flex-wrap flex-col sm:flex-row justify-evenly items-center">
        {images.map((img, i) => (
          <div
            key={i}
            className="md:w-52 w-96 max-w-md mt-4 mb-12 md:mb-2 mx-2 p-6 rounded-3xl bg-card
          flex flex-col justify-center items-center 
          cursor-pointer shadow transition-shadow hover:shadow-hover "
          >
            <img src={img.src} alt={img.title} className="w-28 h-28" />

            <div className="h-56">
              <h6 className="my-5 border-t border-darkGrey pt-3 font-black">{img.title}</h6>
              <p className="text-sm">{img.paragraph}</p>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  )
}

export default WorkWithCards
