import React, {useState} from "react"
import Layout from '../components/layout'
import {Link, navigate} from 'gatsby'
import SEO from "../components/seo"

export default function TrendsReport() {

  const [selectedOption,setSelectedOption]= useState('');
  

  const handleRedirect = (selectedOption) => {

    navigate((`${selectedOption}`))
  }

  if(selectedOption) {
     handleRedirect(selectedOption) 
  }

  return (
    <Layout>
      <SEO title="Trends Report"/>
        <section className="trends-report-hero py-10 mt-5 bg-russian-violet-dark ">
      <div className="container mx-auto grid md:grid-cols-2 md:gap-4 grid-cols-1 items-center md:px-0 px-2">
         <div className=" trends-report-hero-left">
        <h2 className="text-3xl font-bold text-white mb-2">Open Banking Quarterly Trends Report</h2>
        <p className="text-white">Our reports will help you understand the pace of open banking, give you insights into what API products banks are releasing, and how banks and fintech are approaching partnership opportunities to improve consumer outcomes.</p>
        <iframe src="https://landing.mailerlite.com/webforms/landing/b9q0r6" width="350px" height="250px"></iframe>
        </div> 
       <div className="trends-report-hero-right">
           <img src="https://bucket.mlcdn.com/a/1916/1916912/images/82cf9a04eabd8159f68eb924866a058a2cb23d8c.png" class="" alt=""/>
       </div>
      </div>
      </section>

      
      <section>
          <h3 className="text-3xl font-bold text-center my-10">Trends Report by Year and quarter</h3>
      </section>

      <section className="container mx-auto mt-5 md:mt-20 grid md:grid-cols-2 md:gap-6 grid-cols-1 md:p-0 px-2">

      <div class="col-1 sm:col-6 bg-trends-report-year-card rounded-xl p-5 mb-4 shadow-lg">
          <h3 className="text-2xl font-bold my-3">Trends Report 2020</h3>
                {/* <label for="country" class="block text-sm font-medium text-gray-700 font-bold text-white">Q1 / 2020</label>
                <select id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-50 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Banks</option>
                  <option>Government</option>
                  <option>Developers</option>
                </select>
                <label for="country" class="block text-sm font-medium text-gray-700 my-2 font-bold text-white ">Q2 / 2020</label>
                <select id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-50 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Banks</option>
                  <option>Government</option>
                  <option>Developers</option>
                </select>
                <label for="country" class="block text-sm font-medium text-gray-700 my-2 font-bold text-white">Q3 / 2020</label>
                <select id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-50 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Banks</option>
                  <option>Government</option>
                  <option>Developers</option>
                </select> */}
                <label for="" class="block text-sm font-medium text-gray-700 my-2 font-bold text-white">Q4 / 2020</label>
                <select id="trendsreport" name="" autocomplete="" class="mt-1 block w-full py-2 px-3 border border-gray-50 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => navigate(e.target.value)}>
                <option>Select an option</option>
                  <option value="/blog/q4-2020-open-banking-api-trends-banks" >If you work for Banks</option>
                  <option value="/blog/q4-2020-open-banking-api-trends-fintech">If you work for Fintechs</option>
                  <option value="blog/q4-2020-open-banking-api-trends-consumers">If you work for consumers</option>
                  <option value="/blog/q4-2020-trends-enablers-of-an-open-banking-api-ecosystem">If you work for enablers</option>
                  <option value="/blog/q4-2020-open-banking-api-trends-meeting-the-needs-of-the-under-served">If you work for under-served</option>
                 
                </select>
              </div>
              {/* <div class="col-1 sm:col-6 bg-trends-report-year-card rounded-xl p-5 mb-4 shadow-lg">
              <h3 className="text-2xl font-bold my-3">Trends Report 2021</h3>
              <label for="country" class="block text-sm font-medium text-gray-700 my-2 font-bold text-white">Q1 / 2021</label>
                <select id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-50 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Banks</option>
                  <option>Government</option>
                  <option>Developers</option>
                </select>
                <label for="country" class="block text-sm font-medium text-gray-700 my-2 font-bold text-white">Q2 / 2021</label>
                <select id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-50 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Banks</option>
                  <option>Government</option>
                  <option>Developers</option>
                </select>
                <label for="country" class="block text-sm font-medium text-gray-700 my-2 font-bold text-white">Q3 / 2021</label>
                <select id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-50 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Banks</option>
                  <option>Government</option>
                  <option>Developers</option>
                </select>
                <label for="country" class="block text-sm font-medium text-gray-700 my-2 font-bold text-white">Q4 / 2021</label>
                <select id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-50 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Banks</option>
                  <option>Government</option>
                  <option>Developers</option>
                </select>
              </div> */}
      </section>

      
    </Layout>
  )
}
