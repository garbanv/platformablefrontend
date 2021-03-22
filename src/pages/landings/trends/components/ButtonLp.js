import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const ButtonLp = ({ label, className }) => (
  <AnchorLink to="/#submitMailerlite">
    <button className={className} type="submit">
      {label}
    </button>
  </AnchorLink>
)

export default ButtonLp

//{label} is the prop that helps re-use this button. In each component, the label we'll have in "" quotes the next we need to have there.  ex: label="Sign up now"
