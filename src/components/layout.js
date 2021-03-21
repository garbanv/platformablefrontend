/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import UserContext from "../context/UserContext"
import Header from "./Header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <UserContext.Consumer>
      {user => (
        <>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <main>{children}</main>
          <footer>
            <h3 className="font-black text-center mb-5 py-5">
              Helping your users co-create the value they need
            </h3>
          </footer>
        </>
      )}
    </UserContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
