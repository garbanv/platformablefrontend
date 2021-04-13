import React from "react"

import Layout from "../../../components/layout"

import HeroLp from "./components/HeroLp"

import TeamHours from './components/TeamHours';
import TestimonialsLp from "./components/TestimonialsLp"
import ProductsCardsLp from "./components/ProductsCardsLp"
import CallToActionLp from "./components/CallToActionLp"


import PositionedSection from './components/PositionedSection';
import MeasuringBenefitsLP from './components/MeasuringBenefitsLP';

import SubscriptionPlans from './components/SubscriptionPlans';
import "./styles/index.css"

const IndexPage = props => (
  <Layout>
    <HeroLp />
    <ProductsCardsLp />
    <PositionedSection/>
    <MeasuringBenefitsLP/>
    <SubscriptionPlans/>
    <TeamHours/>
    {/* <TestimonialsLp /> */}
    <CallToActionLp
      sectionClassName="flex sm:flex-row flex-col my-16 mx-auto py-0 sm:px-10 px-2 justify-center items-center"
      flexDisplay={"flexDisplay"}
      doNotDisplay={"doNotDisplay"}
      paragraphOne="Embrace the open banking ecosystem advantage."
      paragraphTwo="Turn your bank into a revenue-generating platform."
      label="Subscribe now"
      btnClassName="uppercase bg-primary font-bold text-white my-5 ml-5 py-2 px-10 rounded-full hover:bg-secondary hover:text-primary cursor-pointer"
    />
  </Layout>
)

export default IndexPage
