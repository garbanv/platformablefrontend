import React, { useState } from "react"
import Layout from "../components/layout"
import { Link, navigate } from "gatsby"
import SEO from "../components/seo"
import AnalystImg from '../images/Analyst-as-a-service.png'
import BlogAsServiceImg from '../images/Blogs and articles.png'
import OpenEcosystemImg from '../images/Open ecosystem mapping.png'
import PlatformMindsetImg from '../images/Platform mindset training for banks.png'
import QuarterlyImg from '../images/Quarterly Trends report.png'
import StateOfMarketImg from '../images/State of the Market reports.png'

export default function TrendsReport() {
  const [selectedOption, setSelectedOption] = useState("")

  const handleRedirect = selectedOption => {
    navigate(`${selectedOption}`)
  }

  if (selectedOption) {
    handleRedirect(selectedOption)
  }

  return (
    <>
      <Layout>
        <SEO title="Trends Report" />
        {/* <section className="trends-report-hero py-10 mt-5 bg-russian-violet-dark px-5">
          <div className="container mx-auto grid md:grid-cols-2 md:gap-4 grid-cols-1 items-center md:px-0 px-2">
            <div className=" trends-report-hero-left">
              <h2 className="text-3xl font-bold text-white mb-2">
                Open Banking Quarterly Trends Report
              </h2>
              <p className="text-white">
                Our reports will help you understand the pace of open banking,
                give you insights into what API products banks are releasing,
                and how banks and fintech are approaching partnership
                opportunities to improve consumer outcomes.
              </p>
              <iframe
                src="https://landing.mailerlite.com/webforms/landing/b9q0r6"
                width="350px"
                height="250px"
              ></iframe>
              <a
                        className="pull bg-russian-violet-dark"
                        href="https://trends.platformable.com/open-banking"
                      >
                        <small>Click Here to subscribe</small>
                      </a>
              
            </div>
            <div className="trends-report-hero-right">
              <img
                src="https://bucket.mlcdn.com/a/1916/1916912/images/82cf9a04eabd8159f68eb924866a058a2cb23d8c.png"
                class=""
                alt=""
              />
            </div>
          </div>
        </section> */}

        {/* <section>
          <h3 className="text-3xl font-bold text-center my-10">
            Trends Report by Year and quarter
          </h3>
        </section> */}


<section id="q4Hero" class="q4Hero">
    <div class="homepage-container mx-auto px-5">
      <div class="q4HeroContainer">
        <div class="q4HeroLeft">
          <div>
   
            <h3>Trends Report</h3>
    
    
            <div> 
            <a href="https://trends.platformable.com/open-banking" class="trendsCardLink-russian-violet-light" target="_blank">Click here to Subscribe</a>
            </div>
          </div>
        </div>
        <div class="q4HeroRight">
          <img src="https://platformable.com/content/images/size/w1600/2021/01/OpenBanking-Q4.png" alt=""/>
        </div>
      </div>
    </div>
  </section>

        {/* <section id="q4TrendsCards">
          <div className="container mx-auto ">
            <div className="my-5">
              <h3 className="text-center font-black">Key takeaways from Q4 2020</h3>
            </div>
            <div className="bottom-line"></div>
            <div className="card__wrap--outer">
              <div className="card__wrap--inner">
                <div className="card">
                  <div className="cardImage">
                    <img src="https://platformable.com/content/images/size/w1000/2021/01/banks-icon-1.png" />
                  </div>
                  <div className="card__item">
                    <h2>If you work for Banks</h2>
                  </div>

                  <div className="card__item flexible">
                    <p>
                      Open banking infrastructure is now in place globally.
                      While some markets are just ramping up, it is no longer
                      the time to do the regulatory minimum. Banks have invested
                      in digitisation. If you work within banks, you should be
                      considering how to test new digital business models with
                      your APIs. You should have a roadmap that goes beyond the
                      APIs that are required for regulation.{" "}
                    </p>
                  </div>

                  <div className="card__footer">
                    <div className="cardImage">
                      <Link
                        className="pull bg-russian-violet-dark"
                        to="/blog/q4-2020-open-banking-api-trends-banks"
                      >
                        <small>Read more</small>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card__wrap--inner">
                <div className="card">
                  <div className="cardImage">
                    <img src="https://platformable.com/content/images/size/w1600/2021/01/2-FINTECH-1.png" />
                  </div>
                  <div className="card__item">
                    <h2>If you work for Fintechs</h2>
                  </div>

                  <div className="card__item flexible">
                    <p>
                      Think beyond building generic fintech services with bank
                      APIs. Focus in on one customer segment and think about
                      truly innovative products that offer niche services to
                      this audience. Expand out from there when you understand
                      what works. The world doesn't need another another budget
                      app.
                    </p>
                  </div>

                  <div className="card__footer">
                    <div className="cardImage">
                      <Link
                        className="pull bg-russian-violet-dark"
                        to="/blog/q4-2020-open-banking-api-trends-fintech"
                      >
                        <small>Read more</small>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card__wrap--inner">
                <div class="card">
                  <div class="cardImage">
                    <img src="https://platformable.com/content/images/size/w1600/2021/01/3-CONSUMERS.png" />
                  </div>
                  <div class="card__item">
                    <h2>If you work for Consumers</h2>
                  </div>

                  <div class="card__item flexible">
                    <p>
                      Insist that open banking provide truly diverse products.
                      Where are the cashflow optimization apps for small
                      business? Where are the products for adult family members
                      caring for their ageing parents? What data can be shared
                      by banks and regulators to explain how consumers are
                      benefiting (or not) from open banking?
                    </p>
                  </div>

                  <div class="card__footer">
                    <div class="cardImage">
                      <Link
                        class="pull bg-russian-violet-dark"
                        href="/blog/q4-2020-open-banking-api-trends-consumers"
                      >
                        <small>Read more</small>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section id="q4TrendsCards">
          <div class="container mx-auto">
            <div class="card__wrap--outer">
              <div class="card__wrap--inner">
                <div class="card">
                  <div class="cardImage">
                    <img src="https://platformable.com/content/images/size/w1600/2021/01/4-UNDER-SERVED.png" />
                  </div>
                  <div class="card__item">
                    <h2>If you work for Underserved</h2>
                  </div>

                  <div class="card__item flexible">
                    <p>
                      Help insist that national and international data
                      collection methods on business registrations and on
                      lending patterns are able to be disaggregated to identify
                      whether open banking is benefiting all members of society.
                      Check if new fintech offerings in low and middle income
                      countries are extracting data (and value) to companies
                      operating in high income countries.
                    </p>
                  </div>

                  <div class="card__footer">
                    <div class="cardImage">
                      <Link
                        class="pull bg-russian-violet-dark"
                        href="/blog/q4-2020-open-banking-api-trends-meeting-the-needs-of-the-under-served"
                      >
                        <small>Read more</small>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card__wrap--inner">
                <div class="card">
                  <div class="cardImage">
                    <img src="https://platformable.com/content/images/size/w1600/2021/01/5-API-INDUSTRY.png" />
                  </div>
                  <div class="card__item">
                    <h2>If you work for API Industry</h2>
                  </div>

                  <div class="card__item flexible">
                    <p>
                      Incorporate standards like API specificatuion formats and
                      bank and finance API standards into your tooling so that
                      it is easier to build new products and services. If you
                      work with banks and fintech, encourage sharing of data
                      points that describe the value that is being generated
                      from new open ecosystems.
                    </p>
                  </div>

                  <div class="card__footer">
                    <div class="cardImage">
                      <a
                        class="pull bg-russian-violet-dark"
                        href="https://platformable.com/blog/q4-2020-open-banking-api-trends-api-industry/"
                      >
                        <small>Read more</small>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card__wrap--inner">
                <div class="card">
                  <div class="cardImage">
                    <img src="https://platformable.com/content/images/size/w1600/2021/01/OpenBanking-Book.png" />
                  </div>
                  <div class="card__item">
                    <h2>If you work for Enablers</h2>
                  </div>

                  <div class="card__item flexible">
                    <p>
                      We have identified four key enablers that support the
                      growth of the open banking and open finance ecosystem.
                      Read abnout how regulations, standards, security and
                      focusing on Developer eXperience (DX) can help all
                      stakeholders to co-create and share value.
                    </p>
                  </div>

                  <div class="card__footer">
                    <div class="cardImage">
                      <Link
                        class="pull bg-russian-violet-dark"
                        href="/blog/q4-2020-trends-enablers-of-an-open-banking-api-ecosystem"
                      >
                        <small>Read more</small>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}



<section id="product-streams">
        <div className="container mx-auto">
            <h3 className="text-3xl font-black text-center mb-5 mt-20">2020</h3>
        </div>

        <div className="all-posts">
        <div className="container mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* single post card start here */}
         
          
          <div key=""> 
            <div className="rounded-xl overflow-hidden bg-gray-50">
              <div className="relative overflow-hidden pb-60">
                <Link to="">
                <img
                  className="absolute h-full w-full object-contain object-center"
                  src={AnalystImg}
                  alt=""
                />
                </Link>
              </div>
              <div className="relative bg-gray-50">
                <div className="py-10 px-8 text-center" >
                  <h3 className="text-2xl font-bold">
                   <Link to="" className="text-center">Q1</Link>
                  </h3>
                  <div className="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                
                  </div>
                  {/* <p className="leading-7">
                    High quality notepad mockup in a huge resolution and with
                    changeable everything.
                  </p> */}
                  
                </div>
              </div>
            </div>
          </div> 


          <div key=""> 
            <div className="rounded-xl overflow-hidden bg-gray-50">
              <div className="relative overflow-hidden pb-60">
                <Link to="/blog">
                <img
                  className="absolute h-full w-full object-contain object-center"
                  src={BlogAsServiceImg}
                  alt=""
                />
                </Link>
              </div>
              <div className="relative bg-gray-50">
                <div className="py-10 px-8 text-center" >
                  <h3 className="text-2xl font-bold">
                   <Link to="/blog" className="text-center">Q2</Link>
                  </h3>

                </div>
              </div>
            </div>
          </div> 


          <div key=""> 
            <div className="rounded-xl overflow-hidden bg-gray-50">
              <div className="relative overflow-hidden pb-60">
                <Link to="">
                <img
                  className="absolute h-full w-full object-contain object-center"
                  src={OpenEcosystemImg}
                  alt=""
                />
                </Link>
              </div>
              <div className="relative bg-gray-50">
                <div className="py-10 px-8 text-center" >
                  <h3 className="text-2xl font-bold">
                   <Link to="" className="text-center">Q3</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div> 
          {/* single post card start here */}
          
          <div key=""> 
            <div className="rounded-xl overflow-hidden bg-gray-50">
              <div className="relative overflow-hidden pb-60">
                <Link to="/open-banking/training">
                <img
                  className="absolute h-full w-full object-contain object-center"
                  src={PlatformMindsetImg}
                  alt=""
                />
                </Link>
              </div>
              <div className="relative bg-gray-50">
                <div className="py-10 px-8 text-center" >
                  <h3 className="text-2xl font-bold">
                   <Link to="/open-banking/training"
                    className="text-center">Q4</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>



         
   

        </div>
      </div>

            </section>
      </Layout>
    </>
  )
}
