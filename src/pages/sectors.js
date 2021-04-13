import React from "react"
import data from "../data/product-stream/data.json"
/*shared-components*/
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridDisplay from "../components/shared-components/GridDisplay"
/*specific-components*/
import ProductStreamsCards from "../components/product-streams/ProductStreamsCards"

/*assets*/
import sectionHeroImg from "../assets/product-streams/home_hero.svg"
import openBankImg from "../assets/product-streams/open_banking-open_finance.svg"
import openGovImg from "../assets/product-streams/open_government.svg"
import openHealthImg from "../assets/product-streams/open_health.svg"
import openSustainImg from "../assets/product-streams/open_sustainability.svg"

const ProductStreams = props => {



  return (
    <Layout>
      <SEO title="Sectors" />

      <GridDisplay
        gridDisplayClass="hero-section flex flex-col sm:flex-row flex-wrap my-6 mx-auto py-6 px-5 justify-center items-center "
        gridContentClass="md:w-2/5"
        title="Sectors"
        titleClass="my-5"
        paragraphOne="We track the growth and opportunities of open ecosystems in key sectors. Open ecosystems can help solve today’s complex challenges by building to open standards and using open data models, encouraging multi-stakeholder networks, and measuring value and impact."
        doNotDisplayLink="hidden"
        doNotDisplayAnchor="hidden"
        imgContentClass=""
        imgClass="object-cointain w-96 h-94"
        backImgSrc={sectionHeroImg}
        alt="Hero"
      ></GridDisplay>

      <ProductStreamsCards
        data={data["products"]}
        className="my-0 md:mx-8 mx-2 py-0 px-2 flex flex-wrap flex-col sm:flex-row justify-evenly items-center"
      />

      {/* <div id="openBanking">
        <div className="w-5/6 uppercase my-6 mx-auto py-6 px-2">
          <p>
            Product Streams {">"}{" "}
            <span className="font-bold text-orange">
              Open Banking/Open Finance
            </span>
          </p>
        </div>
        <GridDisplay
          gridDisplayClass="hero-section flex flex-col sm:flex-row flex-wrap my-6 mx-auto py-6 px-5 justify-center items-center "
          gridContentClass="md:w-2/5"
          title={`Open Banking / 
            Open Finance`}
          titleClass="my-5 text-orange"
          paragraphOne="Text is same as the short description from the product
        stream page, to briefly introduce the concept of OB/OF."
          doNotDisplayLink="hidden"
          doNotDisplayAnchor="hidden"
          imgContentClass=""
          imgClass="object-cointain w-96 h-94"
          backImgSrc={openBankImg}
          alt="Hero"
        ></GridDisplay>
        <ProductStreamsCards
          data={data["OpenBanking"]}
          className="my-0 md:mx-8 mx-2 py-0 px-8 flex flex-wrap flex-col sm:flex-row justify-evenly items-center"
        />
      </div> */}

      {/* <div id="openGovernment">
      <div className="w-5/6 uppercase my-6 mx-auto py-6 px-2">
          <p>
            Product Streams {">"}{" "}
            <span className="font-bold text-purple">
              Open Government
            </span>
          </p>
        </div>
        <GridDisplay
          gridDisplayClass="flex flex-col sm:flex-row flex-wrap my-6 mx-auto py-6 px-5 justify-center items-center "
          gridContentClass="md:w-2/5"
          title="Open Government"
          titleClass="my-5 text-purple"
          paragraphOne="Text is same as the short description from the product
        stream page, to briefly introduce the concept of OB/OF."
          doNotDisplayLink="hidden"
          doNotDisplayAnchor="hidden"
          imgContentClass=""
          imgClass="object-cointain w-96 h-94"
          backImgSrc={openGovImg}
          alt="Hero"
        ></GridDisplay>
        <ProductStreamsCards
          data={data["OpenGovernement"]}
          className="my-0 md:mx-8 mx-2 py-0 px-12 flex flex-wrap flex-col sm:flex-row justify-evenly items-center"
        />
      </div> */}

      {/* <div id="openHealth">
      <div className="w-5/6 uppercase my-6 mx-auto py-6 px-2">
          <p>
            Product Streams {">"}{" "}
            <span className="font-bold text-blue">
              Open Banking/Open Finance
            </span>
          </p>
        </div>
        <GridDisplay
          gridDisplayClass="flex flex-col sm:flex-row flex-wrap my-6 mx-auto py-6 px-5 justify-center items-center "
          gridContentClass="md:w-2/5"
          title="Open Health"
          titleClass="my-5 text-blue"
          paragraphOne="Text is same as the short description from the product
        stream page, to briefly introduce the concept of OB/OF."
          doNotDisplayLink="hidden"
          doNotDisplayAnchor="hidden"
          imgContentClass=""
          imgClass="object-cointain w-96 h-94"
          backImgSrc={openHealthImg}
          alt="Hero"
        ></GridDisplay>
        <ProductStreamsCards
          data={data["OpenHealth"]}
          className="my-0 md:mx-8 mx-2 py-0 px-12 flex flex-wrap flex-col sm:flex-row justify-evenly items-center"
        />
      </div> */}

      {/* <div id="openSustainability">
      <div className="w-5/6 uppercase my-6 mx-auto py-6 px-2">
          <p>
            Product Streams {">"}{" "}
            <span className="font-bold text-lightGreen">
              Open Banking/Open Finance
            </span>
          </p>
        </div>
        <GridDisplay
          gridDisplayClass="flex flex-col sm:flex-row flex-wrap my-6 mx-auto py-6 px-5 justify-center items-center "
          gridContentClass="md:w-2/5"
          title="Open Sustainability"
          titleClass="my-5 text-lightGreen"
          paragraphOne="Text is same as the short description from the product
        stream page, to briefly introduce the concept of OB/OF."
          doNotDisplayLink="hidden"
          doNotDisplayAnchor="hidden"
          imgContentClass=""
          imgClass="object-cointain w-96 h-94"
          backImgSrc={openSustainImg}
          alt="Hero"
        ></GridDisplay>
        <ProductStreamsCards
          data={data["OpenSustainability"]}
          className="my-0 md:mx-8 mx-2 py-0 px-12 flex flex-wrap flex-col sm:flex-row justify-evenly items-center"
        />
      </div> */}
    </Layout>
  )
}

export default ProductStreams
