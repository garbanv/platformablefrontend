import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const ProductsCardsLp = () => {
  const data = useStaticQuery(graphql`
  query MyFileQuery {
    file(ext: {eq: ".pdf"}) {
      id
      name
      publicURL
    }
  }
`)
  
  return (<>
    <section className="w-screen my-16 mx-auto py-8 ">
      <div className="product-group my-0 md:mx-16 mx-2 py-0 px-3 flex md:flex-row flex-col justify-evenly items-center">
        <div
          className="product--item md:w-1/3 w-9/12 mb-12 md:mb-2 md:mx-2 p-6 rounded-3xl bg-card
                    flex flex-col justify-center items-center 
                    cursor-pointer shadow transition-shadow hover:shadow-hover"
        >
          <div className="w-40 h-32 product-photo-1"></div>
          <div>
            <h4 className="m-5 text-center">
              Understand the open banking platform economy
            </h4>
          </div>
        </div>

        <div
          className="product--item md:w-1/3 w-9/12 mb-12 md:mb-2 md:mx-2 p-6 rounded-3xl bg-card
          flex flex-col justify-center items-center 
          cursor-pointer shadow transition-shadow hover:shadow-hover"
        >
          <div className="w-40 h-32 product-photo-2"></div>
          <div>
            <h4 className="m-5 text-center">
              See where opportunities are emerging 
            </h4>
          </div>
        </div>

        <div
          className="product--item md:w-1/3 w-9/12 mb-12 md:mb-2 md:mx-2 p-6 rounded-3xl bg-card
                    flex flex-col justify-center items-center 
                    cursor-pointer shadow transition-shadow hover:shadow-hover"
        >
          <div className="w-40 h-32 product-photo-3 block"></div>
          <div>
            <h4 className="m-5 text-center">
              Benchmark your activities against industry leaders
            </h4>
          </div>
        </div>
      </div>

      <div className="mt-20 mx-auto text-center md:w-6/12 w-9/12 px-2">
        <p className="leading-6 text-2xl font-black">
          Let us help you and your team evolve towards a platform mindset.
        </p>
      </div>
    </section>
    <section className="flex justify-center py-5 -mt-20">
      <a href={`${data.file.publicURL}`} className="btn bg-russian-violet-dark text-white px-5 rounded-xl py-2" download>See our latest Trends Reports</a>
    </section>
    </>
  )
}

export default ProductsCardsLp
