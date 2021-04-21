import React from 'react'
/*assets*/
import govImg from "../../assets/home/governments.png"
import regulatoryImg from '../../assets/home/regulatory_authorities.png'
import industryImg from '../../assets/home/industry_networks.png'
import apiProvImg from '../../assets/home/api_providers.png'
import BusinessImg from '../../assets/home/Business.png'
import NonProfitImg from '../../assets/home/Non-Profits.png'

const WorkWithCards = () => {
  const images = [
    {
      src: BusinessImg,
      title:
        "Businesses",
      paragraph: "Reorient towards a platform focus and understand how to connect with other stakeholders in broader open ecosystems",
    },
    {
      src: NonProfitImg,
      title:
        "Non-profits",
      paragraph: "Build data governance processes, automate data systems, and connect with partners",
    },
    {
      src: govImg,
      title:
        "Governments",
      paragraph: "Use API strategies to encourage collaboration and solve complex problems",
    },
    {
      src: regulatoryImg,
      title:
        "Regulatory authorities",
      paragraph: "Measure the impact of open ecosystems and track how inequalities are reduced",
    },
    {
      src: industryImg,
      title:
        "Industry networks",
      paragraph: "Use tools and training to support members to become effective platforms",
    },
    {
      src: apiProvImg,
      title:
        "API providers and consultants",
      paragraph: "Communicate the value of APIs to build more business",
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
          shadow transition-shadow hover:shadow-hover "
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
