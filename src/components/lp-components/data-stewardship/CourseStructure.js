import React from "react"
/*assets*/
import dataStewardshipImg from "../../../assets/lp-data_stewardship/data_stewardship.svg"
import dataToolsImg from "../../../assets/lp-data_stewardship/data_tools.svg"
import dataStrategyImg from "../../../assets/lp-data_stewardship/data_for_strategy.svg"
import dataDesignImg from "../../../assets/lp-data_stewardship/data_design_thinking.svg"
import dataAdvocacyImg from "../../../assets/lp-data_stewardship/data_for_advocacy.svg"

const CourseStructure = () => {
  const images = [
    {
      src:dataStewardshipImg,
      title:'Data Stewardship, Data Governance and Data Ethics',
      paragraph:'Understand the core principles and approaches to ensure you are collecting, managing and using data responsibly within your organization.'
    },
    {
      src:dataToolsImg,
      title:'Data Tools',
      paragraph:'Learn about the full range of data tools available at your disposal and how to keep up with new developments in data management'
    },
    {
      src:dataStrategyImg,
      title:'Data for strategy',
      paragraph:'Learn how to design data collection and use based off your strategic goals'
    },
    {
      src:dataDesignImg,
      title:'Data Design-thinking',
      paragraph:'Learn about how to think about who will use your data and how to apply a human-centred design approach to your data efforts'
    },  
    {
      src:dataAdvocacyImg,
      title:'Data for advocacy',
      paragraph:'Learn data visualization and storytelling techniques and share approaches in how to strengthen policy and community advocacy activities using data'
    },
    {
      src:dataStrategyImg,
      title:'Automate systems',
      paragraph:'Use available tools to automatically validate and clean data, integrate into processes and automate reporting'
    },
  
  ];
  
  return (
    <section className="bg-greyImg py-6 px-8">
      <h3 className="my-8 md:mx-16 font-black">Course Structure</h3>
      
      <div className="my-0 md:mx-16">
        {images.map((img, i) =>(
          <div key={i} className="mb-5 md:flex items-center"
            >
            <img src={img.src} alt={img.title} className="mr-5" />
            
            <div className="">
              <h5 className="font-black">{img.title}</h5>
              <p>{img.paragraph}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default CourseStructure
