import React from "react"
import OpenEcosystemSection from './OpenEcosystemSection';
/*assets*/
import sectionImg from '../../assets/home/platform_approaches.png'

const PositionedSection = () => {
  return (
    <section className="bg-primary relative sm:mb-72 mb-8 w-auto lg:py-24 text-center">
      <img src={sectionImg} alt="two squares with a lock and a hand holding a dollar sign" className="mx-auto mb-24"/>

      <OpenEcosystemSection/>

    </section>
      
  )
}

export default PositionedSection
