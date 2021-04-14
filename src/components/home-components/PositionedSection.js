import React from "react"
import OpenEcosystemSection from './OpenEcosystemSection';
import ApiprovidersImg from '../../assets/home/home-apiproviders.png'
import hometheyopenvaluesImg from '../../assets/home/home-theyopenvalues.png'

/*assets*/
import sectionImg from '../../assets/home/platform_approaches.png'

const PositionedSection = () => {
  return (
    <section className="bg-primary relative sm:mb-72 mb-8 w-auto lg:py-20 text-center">
      <h3 className="text-white">Platform approaches</h3>
      <h3 className="text-white font-black">have two big advantages</h3>
      <div className="md:w-3/6  text-center mx-auto  advantageImgs flex flex-wrap md:flex-nowrap justify-center flex-wrap">
      <div className="mx-auto ">
        <img src={ApiprovidersImg} alt="Platformable Advantages"/>
        <p className="p-5 text-center text-white">They open up the value previously locked in data and capabilties</p>
      </div>
      <div className="mx-auto ">
        <img src={hometheyopenvaluesImg} alt="Platformable Advantages"/>
        <p className="p-5 text-center text-white">They enable digital ecosystems where everyone can participate and co-create</p>
      </div>

      </div>
      {/* <img src={sectionImg} alt="two squares with a lock and a hand holding a dollar sign" className="mx-auto mb-24"/> */}

      <OpenEcosystemSection/>

    </section>
      
  )
}

export default PositionedSection
