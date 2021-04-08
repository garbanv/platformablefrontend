import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useContext } from "react"
import UserContext from "../context/UserContext"

const Header = ({ siteTitle }) => {
  const [user, setUser] = useContext(UserContext || false)
  const [isOpen, setIsOpen] = useState(false)
  const [isBurguerActive, setIsBurguerActive] = useState(false)
  const [isProductsMenuActive, setItsProductsMenuActive] = useState(false)
  const [isActive, setActive] = useState(false)

  function openNav() {
    return document
      ? (document.getElementById("mySidenav").style.width = "100%")
      : null
  }

  function closeNav() {
    return document
      ? (document.getElementById("mySidenav").style.width = "0")
      : null
  }

  const handleLogOut = () => {
    setUser("")
    if (typeof window !== `undefined`) {
      localStorage.clear()
    }
  }

  return (
    <header>
      {/* MOBILE NAV */}
      <div className="lg:hidden  block container mx-auto mobile-nav">
        <div className="flex justify-between px-3 py-2">
          <div>
            <Link to="/">
              <img
                className="block  h-8 w-auto mt-2"
                src="https://platformable.com/content/images/2020/02/logo-and-business-name-horizontal.png"
                alt="Workflow"
              />{" "}
            </Link>{" "}
          </div>
          <div onClick={openNav}>
            <span
              className="block h-8 w-auto"
              style={{ fontSize: 30 + "px", cursor: "pointer" }}
            >
              &#9776;
            </span>
          </div>
        </div>

        <div id="mySidenav" className="sidenav block lg:hidden">
          <a className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <Link to="/about">About</Link>
          <Link to="/sectors">Sectors</Link>
          <Link to="/blogs">Blog</Link>
          {user.isLoggedIn ? "" : <Link to="/login" state={{previousPost:false}} >Login</Link>}
          {user.isLoggedIn ? <Link to="/app/dashboard">Dashboard</Link> : ""}
          {user.isLoggedIn ? (
            <span onClick={handleLogOut} className="cursor-pointer">
              Logout
            </span>
          ) : (
            ""
          )}
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>

      {/* DESKTOP NAV */}
      <nav className="bg-white hidden lg:block container mx-auto">
        <div className="px-2 sm:px-6">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center  sm:items-stretch sm:justify-start ">
              <div className="hidden sm:block flex justify-between  sm:py-2">
                <div>
                  <Link to="/">
                    <img
                      className="block  h-8 w-auto mt-2"
                      src="https://platformable.com/content/images/2020/02/logo-and-business-name-horizontal.png"
                      alt="Workflow"
                    />{" "}
                  </Link>
                </div>
                <div>
                  <span
                    className="block lg:hidden h-8 w-auto"
                    style={{ fontSize: 30 + "px", cursor: "pointer" }}
                  >
                    &#9776;
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="top-nav text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="active-top-nav"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="top-nav text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="active-top-nav"
                  >
                    About
                  </Link>
                  {/* <Link
                    to="/products"
                    className=" top-nav text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="active-top-nav"
                  >
                    Products
                  </Link> */}
                  <Link
                    to="/sectors"
                    className=" top-nav text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="active-top-nav"
                  >
                    Sectors
                  </Link>
                  <Link
                    to="/blogs"
                    className="top-nav text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="active-top-nav"
                  >
                    Blog
                  </Link>
                  {user && user.isLoggedIn ? (
                    <Link
                      to="/app/dashboard"
                      className="top-nav text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      activeClassName="active-top-nav"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    ""
                  )}
                  {user.isLoggedIn ? (
                    ""
                  ) : (
                    <Link
                      to="/login"
                      className=" top-nav text-white  hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-russian-violet-dark"
                      activeClassName="active-top-nav"
                      state={{previousPost:false}} 
                    >
                      Login
                    </Link>
                  )}
                  {user && user.isLoggedIn ? (
                    <span
                      className=" top-nav text-white  hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-russian-violet-dark cursor-pointer"
                      activeClassName="active-top-nav"
                      onClick={handleLogOut}
                    >
                      Logout
                    </span>
                  ) : (
                    ""
                  )}
                  <Link
                    to="/sign-up"
                    className="top-nav text-white bg-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="active-top-nav"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
