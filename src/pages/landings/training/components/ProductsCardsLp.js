import React from "react"

const ProductsCardsLp = props => {
  return (
    <section className="w-screen my-4 mx-auto py-8">
      <div className="product-group my-0 md:mx-16 mx-2 py-0 px-3 md:flex  justify-evenly items-center">
        <div
          className="product--item md:w-1/3 w-full mb-12 md:mb-2 md:mx-2 p-6 rounded bg-card
                    flex flex-col justify-center items-center 
                    cursor-pointer shadow transition-shadow hover:shadow-hover"
        >
          <div className="w-40 h-40 product-photo-1"></div>
          <div>
            <h3 className="m-5 text-center">Self-paced</h3>
            <p>
              Work through each module as you wish, using online video content,
              templates, and tutorials
            </p>
          </div>
        </div>

        <div
          className="product--item md:w-1/3 w-full mb-12 md:mb-20  md:mx-2 p-6 rounded bg-card
                    flex flex-col justify-center items-center 
                    cursor-pointer shadow transition-shadow hover:shadow-hover"
        >
          <div className="w-40 h-40 product-photo-2"></div>
          <div>
            <h3 className="m-5 text-center">Workshop-oriented</h3>
            <p>
              Book an inhouse series of workshops for your team or select a
              module for a one-off professional development session
            </p>
          </div>
        </div>

        <div
          className="product--item md:w-1/3 w-full mb-12 md:mb-2 md:mx-2 p-6 rounded bg-card
                    flex flex-col justify-center items-center 
                    cursor-pointer shadow transition-shadow hover:shadow-hover"
        >
          <div className="w-40 h-40 product-photo-3 block"></div>
          <div>
            <h3 className="m-5 text-center">Subject-based</h3>
            <p>
              Choose just the modules you need and receive them as self-paced
              modules, inhouse workshops, or via 1:1 mentoring
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsCardsLp
