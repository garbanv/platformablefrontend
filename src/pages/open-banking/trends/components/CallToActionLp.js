import React from "react"
import ButtonLp from "./ButtonLp"

const CallToActionLp = ({
  sectionClassName,
  paragraphClassName,
  btnClassName,
  title,
  secondTitle,
  paragraphOne,
  paragraphTwo,
  label,
  doNotDisplay,
  handleIsLoggedIn
}) => {
  return (
    <section id="cta" className={sectionClassName}>
      <h3 className="my-3 font-black">{title}</h3>
      <h3 className="my-3 font-black">{secondTitle}</h3>
      <p className={paragraphClassName}>{paragraphOne}<br/>{paragraphTwo}</p>
      <button onClick={handleIsLoggedIn} label={label} doNotDisplay={doNotDisplay} className={btnClassName}>{label}</button>
    </section>
  )
}

export default CallToActionLp

/*we use props so we can change title, paragraph accordingly in any component where the CallToAction component will be used
--> className={flexDisplay}, 
-->className={doNotDisplay}, 
are special classes, that when used, will have the classes edited in the index.css*/
