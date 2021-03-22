import React from "react"
import backImg from "../assets/hero_trends_report.svg"

const HeroLp = () => {
  return (
    <section className="flex sm:flex-row flex-col my-16 mx-auto py-0  sm:px-10 px-2 justify-center items-center">
      <div className="sm:py-0 py-5">
        <h2 className="font-black">Open Banking & Open Finance</h2>
        <h2 className="font-black">Quarterly Trends Reports</h2>
      </div>
      <div>
        <img src={backImg} alt="" className=" " width="400"/>
      </div>
    </section>
  )
}

export default HeroLp
