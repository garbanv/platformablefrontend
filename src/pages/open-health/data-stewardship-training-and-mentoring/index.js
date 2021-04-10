import React from "react"
/*shared-components*/
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import GridDisplay from "../../../components/shared-components/GridDisplay"
import CallToAction from "./../../../components/shared-components/CallToAction"
import Form from "./../../../components/shared-components/Form"
/*specific-components*/
import LearnHowToCollect from "./../../../components/lp-components/data-stewardship/LearnHowToCollect"
import ProductCards from "./../../../components/lp-components/data-stewardship/ProductCards"
import CourseStructure from './../../../components/lp-components/data-stewardship/CourseStructure';
/*assets*/
import sectionOneImg from "../../../assets/lp-data_stewardship/data_stewardship_training_and_mentoring.svg"
import buildImg from "../../../assets/lp-training/build_your_knowledge.svg"
import blackHealthImg from "../../../assets/lp-data_stewardship/black_health.svg"



const LPDataStewardship = props => (
  <Layout>
    <SEO title="Home" />

    <GridDisplay
      gridDisplayClass="hero-section flex flex-col sm:flex-row flex-wrap my-6 mx-auto py-6 px-5 justify-center items-center"
      gridContentClass="md:w-2/5"
      title="Data Stewardship Training
      and Mentoring"
      secondParagraph="A specialised program designed for:"
      secondParagraphClass="py-2"
      paragraphOne="> Community-Based Organizations"
      paragraphTwo="> Community Health Agencies"
      paragraphThree="> Non-profit Associations"
      imgContentClass=""
      imgClass="object-cointain w-96 h-94"
      backImgSrc={sectionOneImg}
      alt="Hero"
    ></GridDisplay>

    <LearnHowToCollect />

    <CallToAction
      callToActionClass="text-center my-6 mx-auto py-0 px-4 flex flex-col-reverse"
      contentClass="md:w-3/5 w-full mx-auto"
      paragraph="Community organizations and non-profit associations must become data-enabled
      organizations. Learn core principles in collecting and managing data for reuse responsibly
      and ethically and increase the value that data has on your operations and impact."
      paragraphClass="text-center"
      doNotDisplayLink="hidden"
      to={"#lp-training-form"}
      linkTitle="Sign up for pricing and calendar"
      type="button"
      label={"Sign up now"}
      btnClass="bg-blueBtn text-white font-bold uppercase my-8 mx-0 py-2 px-10 rounded-full hover:bg-secondary hover:text-primary cursor-pointer"
    />

    <GridDisplay
      gridDisplayClass="flex sm:flex-row-reverse flex-col my-16 mx-auto py-6 sm:px-10 px-2 justify-center items-center"
      gridContentClass="sm:py-0 py-5 lg:w-2/5"
      title="Build knowledge step by step 
      and at your own pace"
      paragraphOne="You will need to understand skills and techniques about
      platform business models, digital architecture and 
      how to win over other business units."
      imgContentClass="lg:w-2/5"
      imgClass="object-cointain w-96 h-94"
      backImgSrc={buildImg}
      alt="a lighted bulb on top of stairs"
    ></GridDisplay>

    <ProductCards />
    <Form
      formClass="text-center my-5 mx-auto overflow-hidden py-6"
      formID="lp-training-form"
      titleClass=""
      title="Sign up now for pricing and calendar availability"
      iframeId="submitMailerlite"
      iframeSrc={"https://landing.mailerlite.com/webforms/landing/b9q0r6"}
    />
    <CourseStructure/>
    <section className="blueBkgTest bg-testimBkgBlue my-0 mx-auto py-6">
      <div className="text-center p-8">
        <h4 className="text-white font-black">
          What our colleagues say about the program:
        </h4>
        <blockquote className="italic p-2 w-3/5 mx-auto">
          <p>
            Platformable has helped us improve our data management processes
            across the organization. Platformable’s processes have reduced the
            time we spend managing and preparing data and has increased our
            opportunities to use data strategically.
            <br />I have come across.
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
        
      
    </section>
    <CallToAction
      callToActionClass="text-center my-6 mx-auto py-6 px-5 flex flex-col sm:flex-row flex-wrap justify-evenly items-center"
      contentClass=""
      paragraph="Embrace the advantages of open health."
      paragraphTwo="Bring your data to life with our training."
      paragraphClass=" text-xl"
      doNotDisplayLink="hidden"
      to={"#lp-training-form"}
      linkTitle="Sign up for pricing and calendar"
      type="button"
      label={"Sign up now"}
      btnClass="bg-blueBtn text-white font-bold uppercase my-5 mx-0 py-2 px-10 rounded-full hover:bg-secondary hover:text-primary cursor-pointer"
    />
  </Layout>
)

export default LPDataStewardship
