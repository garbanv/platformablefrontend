import React from 'react'
import {Link} from 'gatsby'
import AnalystImg from '../images/Analyst-as-a-service.png'
import BlogAsServiceImg from '../images/Blogs and articles.png'
import OpenEcosystemImg from '../images/Open ecosystem mapping.png'
import PlatformMindsetImg from '../images/Platform mindset training for banks.png'
import QuarterlyImg from '../images/Quarterly Trends report.png'
import StateOfMarketImg from '../images/State of the Market reports.png'
import Layout from '../components/layout'
export default function openBanking() {
    return (
        <Layout>
            <section id="product-streams">
        <div className="container mx-auto">
            <h3 className="text-5xl font-black text-center mb-5 mt-20">Open Banking / Open Finance</h3>
        </div>

        <div className="all-posts">
        <div className="container mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
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
                   <Link to="" className="text-center">Analyst as a service </Link>
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
                   <Link to="/blog" className="text-center">Blogs and articles</Link>
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
                   <Link to="" className="text-center">Open ecosystem mapping</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div> 
          {/* single post card start here */}
          
          <div key=""> 
            <div className="rounded-xl overflow-hidden bg-gray-50">
              <div className="relative overflow-hidden pb-60">
                <Link to="/landings/training">
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
                   <Link to="/landings/training" className="text-center">Platform mindset training for banks</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div key=""> 
            <div className="rounded-xl overflow-hidden bg-gray-50">
              <div className="relative overflow-hidden pb-60">
                <Link to="/trends-report">
                <img
                  className="absolute h-full w-full object-contain object-center"
                  src={QuarterlyImg}
                  alt=""
                />
                </Link>
              </div>
              <div className="relative bg-gray-50">
                <div className="py-10 px-8 text-center" >
                  <h3 className="text-2xl font-bold">
                   <Link to="/trends-report" className="text-center">Quarterly Trends report</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div> 


          <div key="" > 
            <div className="rounded-xl overflow-hidden bg-gray-50">
              <div className="relative overflow-hidden pb-60">
                <Link to="">
                <img
                  className="absolute h-full w-full object-contain object-center"
                  src={StateOfMarketImg}
                  alt=""
                />
                </Link>
              </div>
              <div className="relative bg-gray-50">
                <div className="py-10 px-8 text-center" >
                  <h3 className="text-2xl font-bold">
                   <Link to="" className="text-center">State of the Market reports</Link>
                  </h3>
                  <div className="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                
                  </div>

                  
                </div>
              </div>
            </div>
          </div> 
   

        </div>
      </div>

            </section>
        </Layout>
    )
}
