import React from "react"

import Layout from "../../../components/layout"
import SEOLp from "./components/SEOLp"
import HeroLp from "./components/HeroLp"
import VideoBackgroundLp from "./components/VideoBackgroundLp"
import TestimonialsLp from "./components/TestimonialsLp"
import ProductBenefitsLp from "./components/ProductBenefitsLp"
import ProductOfferLp from "./components/ProductOfferLp"
import ProductsCardsLp from "./components/ProductsCardsLp"
import CallToActionLp from "./components/CallToActionLp"
import FormLp from './components/FormLp';


const IndexPage = props => (
  <Layout>
    <SEOLp title="Platform Mindset Training" />
    <HeroLp />
    <VideoBackgroundLp />
    <ProductBenefitsLp />
    <ProductsCardsLp />
    <FormLp/>
    <ProductOfferLp />
    {/* <TestimonialsLp /> */}
    <CallToActionLp
      flexDisplay={"flexDisplay"}
      doNotDisplay={"doNotDisplay"}
      paragraph="Embrace the open banking ecosystem advantage. 
      Turn your bank into a revenue-generating platform."
      label="Sign up now"
    />
  </Layout>
)

export default IndexPage
