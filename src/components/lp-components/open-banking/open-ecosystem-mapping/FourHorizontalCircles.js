import React from "react"
/*assets*/
import Stakeholders from '../../../../assets/ob-open-ecosystem-mapping/Sholders.png'
import products from '../../../../assets/ob-open-ecosystem-mapping/products.png'
import platforms from '../../../../assets/ob-open-ecosystem-mapping/Platforms.svg'
import standards from '../../../../assets/ob-open-ecosystem-mapping/standards.png'
import value from '../../../../assets/ob-open-ecosystem-mapping/Value Flows.png'


const FourHorizontalCircles = () => {
  const images = [
    {
      src: Stakeholders,
      title: "Stakeholders",
      paragraph: "",
    },
    {
      src: products,
      title: "Products",
      paragraph: "",
    },
    {
      src: platforms,
      title: "Platforms",
      paragraph: "",
    },
    {
      src: standards,
      title: "Standards",
      paragraph: "",
    },
    {
      src: value,
      title: "Value Flows",
      paragraph: "",
    },
  ]
  return (
    <section className="px-8 py-6 md:mx-12 mx-4">
      <div className="my-0 md:mx-8 mx-2 py-0 px-3 flex flex-wrap flex-col sm:flex-row justify-center items-center">
        {images.map((img, i) => (
          <div key={i} className="md:w-1/6 w-full my-6 mx-1 text-center ">
            <img
              src={img.src}
              alt={img.title}
              className="w-30 h-30 mx-auto bg-lightPink mb-1 rounded-full p-3 cursor-pointer transition-shadow hover:shadow-hover"
            />

            <div className="mx-auto">
              <h4 className="text-center font-black">{img.title}</h4>
              <p className="text-xs text-center font-black">{img.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FourHorizontalCircles
