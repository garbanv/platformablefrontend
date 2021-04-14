import React from "react"
import Link from './Link';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Button from "./Button"

const GridDisplay = ({
  gridDisplayClass,
  gridContentClass,
  firstParagraph,
  firstParagraphClass,
  title,
  subtitle,
  titleClass,
  span,
  paragraphOne,
  paragraphOneClass,
  paragraphTwo,
  paragraphTwoClass,
  doNotDisplayLink,
  doNotDisplayAnchor,
  url,
  to,
  linkTitle,
  type,
  label,
  btnClass,
  imgContentClass,
  imgClass,
  backImgSrc,
  alt,
  quarter
}) => {
  return (
    <section className={gridDisplayClass}>

      <div className={gridContentClass}>

        <div>
          <p className={firstParagraphClass}>{firstParagraph}</p>
          <h3 className="font-black text-3xl mb-5">
            {title}
            <h4>{subtitle ? subtitle: ''}</h4>
            {quarter? quarter: ""}
            <span className="text-2xl bg-secondary">{span}</span>
          </h3>
          
          <p className={paragraphOneClass}>{paragraphOne}</p>
          <p className={paragraphTwoClass}>{paragraphTwo}</p>
        </div>

        <div className={doNotDisplayLink}>
          <Link url={url} title={linkTitle}>
            <Button 
              type={type}
              label={label} 
              btnClass={btnClass} 
            />
          </Link>
        </div>

        <div className={doNotDisplayAnchor}>
          <AnchorLink to={to} title={linkTitle}>
            <Button 
              type={type}
              label={label} 
              btnClass={btnClass} 
            />
          </AnchorLink>
        </div>
        
      </div>

      <div className={imgContentClass}>
        <img
          className={imgClass}
          src={backImgSrc}
          alt={alt}
        />
      </div>

    </section>
  )
}

export default GridDisplay

