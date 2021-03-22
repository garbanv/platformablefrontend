import React from "react"
import ButtonLp from "./ButtonLp"

const GridDisplayLp = ({
  title,
  paragraph,
  span,
  label,
  backImg,
  gridDisplayOrder,
  doNotDisplay,
}) => {
  return (
    <section id="gridDisplay" className={gridDisplayOrder}>
      <div className="flex-1">
        <div>
          <h2>
            {title}&nbsp;
            <span className="text-2xl bg-secondary">{span}</span>
          </h2>
          <p>{paragraph}</p>
        </div>

        <div className={doNotDisplay}>
          <ButtonLp label={label} />
        </div>
      </div>

      <img
        loading="lazy"
        src={backImg}
        alt="background"
        className="flex-1 mt-5 sm:mt-0"
      />
    </section>
  )
}

export default GridDisplayLp

/*--> className={gridDisplayOrder} 
is a special class, that when used, will have the classes edited in the index.css. We use it so we can invert the rows order between the img and the text*/
