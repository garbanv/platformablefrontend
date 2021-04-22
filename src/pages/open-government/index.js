import React from 'react'
import {Link} from 'gatsby'
import data from "../../data/product-stream/data.json"
import GridDisplay from "../../components/shared-components/GridDisplay"
/*specific-components*/

import SectorSubCards from "../../components/product-streams/sectorSubCards"
import Layout from '../../components/layout'
/*assets*/
import openGovImg from "../../assets/product-streams/open_government.svg"


export default function openGovernment() {
    return (
        <Layout>
           <div id="openGovernment">
        <GridDisplay
          gridDisplayClass="flex flex-col sm:flex-row flex-wrap my-6 mx-auto py-6 px-5 justify-center items-center "
          gridContentClass="md:w-2/5"
          title="Open Government"
          titleClass="my-5 text-purple"
          paragraphOne="Optimising digital government, unlocking data access, and ensuring greater participation."
          doNotDisplayLink="hidden"
          doNotDisplayAnchor="hidden"
          imgContentClass=""
          imgClass="object-cointain w-96 h-94"
          backImgSrc={openGovImg}
          alt="Hero"
        ></GridDisplay>
        <SectorSubCards
          data={data["OpenGovernement"]}
          className="my-0 md:mx-8 mx-2 py-0 px-12 flex flex-wrap flex-col sm:flex-row justify-evenly items-center"
        />
      </div>
        </Layout>
    )
}
