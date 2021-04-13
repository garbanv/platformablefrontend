import React from 'react'
import {Link} from 'gatsby'
/*assets*/
import sectionImg from '../../assets/home/we_measure_the_growth.png'
import openBankingImg from "../../assets/home/open_banking.png"
import openGovImg from '../../assets/home/open_government.png'
import openHealthImg from '../../assets/home/open_health.png'
import openSustainabilityImg from '../../assets/home/open_sustainability.png'


const OpenEcosystemSection = () => {
  const images = [
    {
      src: openBankingImg,
      title:
        `Open Banking / 
        Open Finance`,
        url:"/open-banking"
    },
    {
      src: openGovImg,
      title:
        "Open Government",
        url:"/open-government"
    },
    {
      src: openHealthImg,
      title:
        "Open Health",
        url:"/open-health"
    },
    {
      src: openSustainabilityImg,
      title:
        "Open Sustainability",
        url:"/sectors"
    },
  ]
  return (
    <section className="bg-card px-8 py-2 rounded-2xl md:mx-12 mx-4 lg:absolute -bottom-4/4 inset-x-0 ">
      <img src={sectionImg} alt="we measure the growth" className=" h-72 mx-auto"/>
      <h3 className="my-4 mx-auto text-center font-black text-3xl">We measure the growth of digital open ecosystems</h3>
      <p className="text-center">Across 4 sectors</p>
      <div className="my-0 md:mx-16 mx-2 py-0 px-3 flex flex-wrap flex-col sm:flex-row justify-evenly">
        {images.map((img, i) => (
          <div
            key={i}
            className="md:w-32 w-full my-6 p-4 mx-0"
          ><Link to={img.url}>
            <img src={img.src} alt={img.title} className="w-30 h-30 mx-auto shadow rounded-full p-3 cursor-pointer transition-shadow hover:shadow-hover" />

            <div>
              <h6 className="my-5 text-center mx-auto font-black">{img.title}</h6>
            </div>
            </Link>
          </div>
        ))}
      </div>

      
    </section>
  )
}


export default OpenEcosystemSection
