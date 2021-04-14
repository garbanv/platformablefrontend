import React from "react"
import { Link } from "gatsby"
import data from "../../data/product-stream/data.json"
import GridDisplay from "../../components/shared-components/GridDisplay"
/*specific-components*/

import SectorSubCards from "../../components/product-streams/sectorSubCards"

import Layout from "../../components/layout"
/*assets*/
import openBankImg from "../../assets/product-streams/open_banking-open_finance.svg"


export default function openBanking() {
  return (
    <Layout>
      <div id="openBanking">
        <GridDisplay
        
          gridDisplayClass="hero-section flex flex-col sm:flex-row flex-wrap my-6 mx-auto py-0 px-5 justify-center items-center "
          gridContentClass="md:w-2/5 "
          title={`Open Banking / 
            Open Finance`}
          titleClass="my-5 text-orange"
          paragraphOne="Enabling interoperable financial services that improve financial inclusion and build everyone’s wealth."
          doNotDisplayLink="hidden"
          doNotDisplayAnchor="hidden"
          imgContentClass=""
          imgClass="object-cointain w-96 h-80"
          backImgSrc={openBankImg}
          alt="Hero"
        ></GridDisplay>
        <SectorSubCards
          data={data["OpenBanking"]}
          className="my-0 md:mx-8 mx-2 py-0 px-8 flex flex-wrap flex-col sm:flex-row justify-evenly text-sm items-center"
        />
      </div>
    </Layout>
  )
}
