import React from 'react'
import {Link} from 'gatsby'
import data from "../../data/product-stream/data.json"
import GridDisplay from "../../components/shared-components/GridDisplay"
/*specific-components*/
import SectorSubCards from "../../components/product-streams/SectorSubCards"

import Layout from "../../components/layout"
/*assets*/
import openHealthImg from "../../assets/product-streams/open_health.svg"



export default function openHealth() {
    return (
        <Layout>
            <div id="openHealth">

        <GridDisplay
          gridDisplayClass="flex flex-col sm:flex-row flex-wrap my-6 mx-auto py-6 px-5 justify-center items-center "
          gridContentClass="md:w-2/5"
          title="Open Health"
          titleClass="my-5 text-blue"
          paragraphOne="Supporting community-based data governance and tracking health tech growth."
          doNotDisplayLink="hidden"
          doNotDisplayAnchor="hidden"
          imgContentClass=""
          imgClass="object-cointain w-96 h-94"
          backImgSrc={openHealthImg}
          alt="Hero"
        ></GridDisplay>
        <SectorSubCards
          data={data["OpenHealth"]}
          className="my-0 md:mx-8 mx-2 py-0 px-12 flex flex-wrap flex-col sm:flex-row justify-evenly items-center"
        />
      </div>
    
        </Layout>
    )
}





