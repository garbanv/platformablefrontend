import React from "react"
/*assets*/
import identify from '../../../../assets/ob-analyst-as-service/Identify potential business models and partnerships.svg'
import inspire from '../../../../assets/ob-analyst-as-service/Inspire.svg'
import define from '../../../../assets/ob-analyst-as-service/define-market.svg'
import track from '../../../../assets/ob-analyst-as-service/Inspire.svg'


const FourHorizontalCircles = () => {
  const images = [
    {
      src: identify,
      title: "Identify",
      paragraph: "potential business models and partnerships",
    },
    {
      src: inspire,
      title: "Inspire",
      paragraph: "new product ideas",
    },
    {
      src: define,
      title: "Define",
      paragraph: "market pricing strategies",
    },
    {
      src: track,
      title: "Track",
      paragraph: "new funding",
    },
  ]
  return (
    <section className="px-8 py-6 md:mx-12 mx-4">
      <h3 className="my-5 font-black text-center"></h3>
      <div className="my-0 md:mx-8 mx-2 py-0 px-3 flex flex-wrap flex-col sm:flex-row justify-center items-center">
        {images.map((img, i) => (
          <div key={i} className="md:w-1/5 w-full my-6 mx-1 text-center ">
            <img
              src={img.src}
              alt={img.title}
              className="w-30 h-30 mx-auto bg-lightPink mb-1 rounded-full p-3 cursor-pointer transition-shadow hover:shadow-hover img-thumbnail "
            />

            <div className="mx-auto">
              <h4 className="text-center font-black">{img.title}</h4>
              <p className="text-center">{img.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FourHorizontalCircles
