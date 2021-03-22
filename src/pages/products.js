import React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby'
import obImg from '../images/openBanking-productstream.png'
import dgImg from '../images/digitalGov-productstream.png'
import phImg from '../images/publicHealth-productstream.jpg'

export default function products() {
    
    return (
        <Layout>
            <section id="product-streams">
        <div className="container mx-auto ">
            <h3 className="text-5xl font-black text-center mb-5 mt-20">Product Streams</h3>
        </div>

        <div className="all-posts mx-5">
        <div className="container mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
          {/* single post card start here */}
         
          
          <div key=""> 
            <div className="rounded-lg overflow-hidden">
              <div className="relative overflow-hidden pb-60">
                <Link to="/open-banking">
                <img
                  className="absolute h-full w-full object-cover object-center"
                  src={obImg}
                  alt=""
                />
                </Link>
              </div>
              <div className="relative bg-gray-50">
                <div className="py-10 px-8 text-center" >
                  <h3 className="text-2xl font-bold">
                   <Link to="/open-banking" className="text-center">Open Banking / Open Finance </Link>
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
            <div className="rounded-lg overflow-hidden">
              <div className="relative overflow-hidden pb-60">
                <Link to="">
                <img
                  className="absolute h-full w-full object-cover object-center"
                  src={dgImg}
                  alt=""
                />
                </Link>
              </div>
              <div className="relative bg-gray-50">
                <div className="py-10 px-8 text-center" >
                  <h3 className="text-2xl font-bold">
                   <Link to="" className="text-center">Digital Government </Link>
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
            <div className="rounded-lg overflow-hidden">
              <div className="relative overflow-hidden pb-60">
                <Link to="">
                <img
                  className="absolute h-full w-full object-cover object-center"
                  src={phImg}
                  alt=""
                />
                </Link>
              </div>
              <div className="relative bg-gray-50">
                <div className="py-10 px-8 text-center" >
                  <h3 className="text-2xl font-bold">
                   <Link to="" className="text-center">Public Health </Link>
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
          {/* single post card start here */}
   

        </div>
      </div>

            </section>
        </Layout>
    )}


