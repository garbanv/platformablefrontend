import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isBurguerActive, setIsBurguerActive] = useState(false)
  const [isProductsMenuActive, setItsProductsMenuActive] = useState(false)
  const [isActive, setActive] = useState(false);

  function openNav() {

   document ? document.getElementById("mySidenav").style.width = "100%": null;
  }
  
  function closeNav() {
    document ? document.getElementById("mySidenav").style.width = "0": null;
  }


const navButtons = document.querySelectorAll('.top-nav')

const handleNav = ()=>{
  
  navButtons.forEach((boton)=>{
      navButtons.forEach(b => {b.classList.remove('active-top-nav')})
      boton.classList.add('active-top-nav');

  })
}


  return (
    <header>
      <div className="lg:hidden  block container mx-auto mobile-nav">
      <div className="flex justify-between px-3 py-2">
      <div ><img className="block  h-8 w-auto mt-2" src="https://platformable.com/content/images/2020/02/logo-and-business-name-horizontal.png" alt="Workflow"/>       </div>
        <div onClick={openNav}><span className="block h-8 w-auto" style={{fontSize:30+'px',cursor:'pointer'}}>&#9776;</span></div>
      </div>

      <div id="mySidenav" class="sidenav block lg:hidden">
        <a  class="closebtn" onClick={closeNav}>&times;</a>
        <Link to="/about">About</Link>
        <Link to="products">Product Streams</Link>
        <Link to="/blog">Blog</Link>
     
      </div>
      </div>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
<nav className="bg-white hidden lg:block container mx-auto ">
  <div className="px-2 sm:px-6">
    <div className="relative flex items-center justify-between h-16">
      <div className="flex-1 flex items-center  sm:items-stretch sm:justify-start ">
       
      <div className="hidden sm:block flex justify-between  sm:py-2">
      <div><img className="block  h-8 w-auto mt-2" src="https://platformable.com/content/images/2020/02/logo-and-business-name-horizontal.png" alt="Workflow"/></div>
        <div><span className="block lg:hidden h-8 w-auto" style={{fontSize:30+'px',cursor:'pointer'}}>&#9776;</span></div>
      </div>

        
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
            <Link to="/" className="top-nav text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" activeClassName="active-top-nav" >Home</Link>
            <Link to="/about" className="top-nav text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" activeClassName="active-top-nav">About</Link>
            <Link to="/products" className=" top-nav text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" activeClassName="active-top-nav">Products Stream</Link>
            <Link to="/blog" className="top-nav text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" activeClassName="active-top-nav">Blog</Link>
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
