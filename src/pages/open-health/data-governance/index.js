import React from "react"
import Layout from "../../../components/layout"
import Form from '../../../components/shared-components/Form'
import DataGovernanceHeroImg from "../../../assets/oh-data-governance/data-governance-hero-img.png"
import EthicallyImg from "../../../assets/oh-data-governance/ethically.png"
import StoredImg from "../../../assets/oh-data-governance/stored.png"
import ComparableImg from "../../../assets/oh-data-governance/comparable.png"
import AnAssetImg from "../../../assets/oh-data-governance/anAsset.png"
import UsedImg from "../../../assets/oh-data-governance/used.png"
import ReusedImg from "../../../assets/oh-data-governance/reused.png"
import PolicyImg from "../../../assets/oh-data-governance/policy.png"
import DatasetImg from "../../../assets/oh-data-governance/dataset.png"
import DataDictionaryImg from "../../../assets/oh-data-governance/dataDictionary.png"
import JobImg from "../../../assets/oh-data-governance/job.png"
import KpiImg from "../../../assets/oh-data-governance/kpi.png"
import AutomatedImg from "../../../assets/oh-data-governance/automated.png"
import blackHealthImg from "../../../assets/lp-data_stewardship/black_health.svg"
import SEO from "../../../components/seo"

const datas = {
  "dataGovernance": {
    data: [
      {
        title: "Ethically collected",
        img: EthicallyImg,
      },
      {
        title: "Stored securely",
        img: StoredImg,
      },
      {
        title: "Comparable and high quality",
        img: ComparableImg,
      },
    ],
  },
  "stewardship": {
      data: [
        {
            title: "An asset not a burden",
            img: AnAssetImg,
          },
          {
            title: "Used strategically",
            img: UsedImg,
          },
          {
            title: "Reused responsibly",
            img: ReusedImg,
          },
      ]
  }
}


const tools = [
    {
        "title":"Policy Templates",
        "img": PolicyImg
    },
    {
        "title":"Dataset Catalogue",
        "img": DatasetImg
    },
    {
        "title":"Data Dictionary",
        "img": DataDictionaryImg
    },
    {
        "title":"Job description alignment",
        "img": JobImg
    },
    {
        "title":"KPI definitions",
        "img": KpiImg
    },
    {
        "title":"Automated cleaning and reporting",
        "img": AutomatedImg
    },

]

export default function index() {
  return (
    <Layout>
      <SEO title="Data Governance"/>
      <section className="hero-data-governance py-10">
        <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 items-center px-5 ">
          <div className="hero-data-governance-left">
            <h3 className="font-black text-3xl ">Data Governance</h3>
            <p className="text-2xl">
              Create a data governance and data stewardship system for your
              agency
            </p>
          </div>
          <div className="hero-data-governance-right   grid justify-ends ">
            <img src={DataGovernanceHeroImg}></img>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto flex justify-center">
          <div className="w-3/4 ">
            <h3 className="text-center text-2xl my-10 ">
              Make greater use of data across all of your operations<br></br>
              from fundraising to strategic planning to impact evaluation.
            </h3>
          </div>
        </div>
      </section>

      <section class="type-of-datas my-10">
        <div className="type-of-datas-container px-5 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="type-of-data-container-left">
            <h3 className="font-black text-2xl text-center">Data Governance</h3>
            <p className="text-center">
              Establish policies that ensure data collected is:
            </p>

            {datas.dataGovernance.data.map((pill,index) => {
                return (
                  <div key ={index} className="type-of-data-pill my-10  bg-blue-50 rounded-full p-5 flex items-center">
                    <div className="type-of-data-pill-left  w-1/4">
                      <img src={pill.img} className="" />
                    </div>
                    <div className="type-of-data-pill-left flex justify-start bg w-3/4">
                      <p className="text-xl">{pill.title}</p>
                    </div>
                  </div>
                )
              })}
          </div>


          <div className="type-of-data-container-right">
            <h3 className="font-black text-2xl text-center">Data stewardship</h3>
            <p className="text-center">
            Maintain and manage data so that it is:
            </p>

            {datas.stewardship.data.map((pill,index) => {
                return (
                  <div className="type-of-data-pill my-10  bg-blue-50 rounded-full p-5 flex items-center">
                    <div className="type-of-data-pill-left  w-1/4">
                      <img src={pill.img} className="" />
                    </div>
                    <div className="type-of-data-pill-left flex justify-start bg w-3/4">
                      <p className="text-xl">{pill.title}</p>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </section>



      <section className="our-toolkit my-10">
          <div className="container mx-auto px-5">

      <h3 className="font-black text-center my-5">Our toolkit</h3>
          <div className="our-toolkit-container grid grid-cols-1 md:grid-cols-3 gap-4">
              {tools.map((tool,index)=> {
                  return (
                      
                    <div key={index} className="bg-blue-50 rounded-xl p-10">
                    <img src={tool.img}/>
                      <h4 className="font-black text-center">{tool.title}</h4>
                </div>
                  )
              })}
          </div>
          </div>
      </section>




      {/* <section className="blueBkgTest bg-testimBkgBlue my-0 mx-auto py-6">
      <div className="text-center p-8">
        <h4 className="text-white font-black">
          What our clients say about the program:
        </h4>
        <blockquote className="italic p-2 w-3/5 mx-auto">
          <p>
            Platformable has helped us improve our data management processes
            across the organization. Platformable’s processes have reduced the
            time we spend managing and preparing data and has increased our
            opportunities to use data strategically.
         
          </p>
          <br />
          <p>
            All staff and programs have learnt how to use data more effectively
            and responsibly with this training and Platformable’s supports.
          </p>
        </blockquote>
        <p className="uppercase">
          <span className="font-bold">Author Name</span>, At Black Health
        </p>
      </div>
    
        <div className="flex justify-center">
        <img src={blackHealthImg} alt="black health co" className="mx-auto text-center py-6"/>
        </div>
        
      
    </section> */}


    <Form
      formClass="text-center my-5 mx-auto overflow-hidden py-6"
      formID="lp-training-form"
      titleClass=""
      title="Sign up now for pricing and calendar availability"
      iframeId="submitMailerlite"
      iframeSrc={"https://landing.mailerlite.com/webforms/landing/u7n7p9"}
    />
    </Layout>
  )
}
