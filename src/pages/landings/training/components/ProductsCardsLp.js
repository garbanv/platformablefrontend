import React from "react"

const ProductsCardsLp = () => {
  return (
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

      <div className="my-12 mx-auto text-center md:w-6/12 w-9/12 px-2">
        <p className="leading-6 text-2xl font-black">
          Let us help you and your team evolve towards a platform mindset.
        </p>
      </div>
    </section>
  )
}

export default ProductsCardsLp