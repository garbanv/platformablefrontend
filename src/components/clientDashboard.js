import React, { useState, useEffect, useContext } from "react"
import {Link} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import { loadStripe } from "@stripe/stripe-js"
import { useStaticQuery, graphql } from "gatsby"

import UserContext from "../context/UserContext"

// LOAD STRIPE CLIENT SIDE, this way wont be able to modify, edit, just client side checkout
let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51IVzE6Gte9n2W4JhTDonqrIGHMBOq4Ed7QVSy1rfAQjTYPJfrUt01uwgf3Q1g4EQ56i8ovDuCqDJ2zxpfeaFjOSf00ArDO4jZI"
    )
  }
  return stripePromise
}
// END STRIPE CALL

export default function Dashboard() {
  const [user, setUser] = useContext(UserContext)
  const [selectedPlan, setSelectedPlan] = useState("")


  const data = useStaticQuery(graphql`
  {
    allStripePrice(sort: {fields: id, order: ASC}) {
      edges {
        node {
          product {
            id
            description
            name
          }
          recurring {
            interval
            interval_count
          }
          unit_amount
          unit_amount_decimal
          id
          currency
          active
          billing_scheme
        }
      }
    }
    allStrapiPost(limit: 3, sort: {fields: slug, order: ASC}) {
      edges {
        node {
          categories {
            name
          }
          id
          slug
          is_featured
          tags {
            name
          }
          featured_image {
            childImageSharp {
              fluid  {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          updated_at
          user {
            id
            username
          }
        }
      }
    }
    allStripeSubscription {
        edges {
          node {
            customer {
              id
              email
              balance
            }
            status
            id
            start_date
            current_period_end
            current_period_start
          }
        }
        totalCount
      }
  }
  `)


  const authorsData = data.allStrapiPost.edges[0].node.user;
  const connectedUserEmail=user.email;

// useEffect(()=>{
//   const getConnectedUserInfo =  (email)=>{
//     const result = data.allStripeSubscription.edges.find(registerUser=>registerUser.node.customer.email === connectedUserEmail);
//         if(result)
//         {
//         setUser({...user,
//         isStripeActive:true,
//         stripeId:result.node.customer.id,
//         stripeStartDay:result.node.start_date,
//         stripeEndDay:result.node.current_period_end});
//       } else {return null}

//         // console.log(`result: ${JSON.stringify(result)}`)
//         console.log(`result: ${JSON.stringify(result.node.customer.start_date)}`)
     
//     return result
//   }

//   getConnectedUserInfo(connectedUserEmail);

// },[])


  const redirectToCheckout = async plan => {


    // setLoading(true)
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "subscription",
      lineItems: [{ price: plan, quantity: 1 }],
      successUrl: "https://your-website.com/success",
      cancelUrl: "https://your-website.com/canceled",
    })
    if (error) {
      console.warn("Error:", error)
      //   setLoading(false)
    }
  }

 

  return (
    <Layout>
      <SEO title="Dahsboard" />
      <div className="container mx-auto">
       
        {/* SECTION profile */}
        <section className="dashboard-profile my-10 px-5">
          <h6 className=" py-5 text-gray-300">Dashboard </h6>

        <div className="dashboard-profile-cards grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="dashboard-profile-card bg-gray-50 rounded-lg flex flex-wrap shadow-sm">
            <div className="dashboard-profile-card-img pl-10 py-10 pr-5">
          
            </div>
            <div className="dashboard-profile-card-text p-10">
              <h5 className="font-black text-primary">Hi! {user.name}</h5>
              <p className="text-sm">Your Stripe id: {user.stripeId}</p>
              <Link to={`/app/profile/1`} className="text-sm text-white bg-yellow-300 px-5 py-1 text-center rounded">Edit Profile</Link>
            </div>
          </div>
          <div className="dashboard-profile-card bg-gray-50 rounded-lg shadow-sm flex flex-wrap">
            <div className="dashboard-profile-card-img pl-10 py-10 pr-5">
           
         
            </div>
            <div className="dashboard-profile-card-text p-10">
              <h5 className="font-black text-primary">{ user.isStripeActive ? 'Your Plan is Active' : 'No Active Plan yet!'}</h5>
             {!user.isStripeActive ? <Link to="/" className="text-sm text-white bg-yellow-300 px-5 py-1 text-center rounded">Change Plan</Link> : <Link to="/" className="text-sm text-white bg-yellow-300 px-5 py-1 text-center rounded">See plans</Link>} 
            </div>
          </div>
          <div className="dashboard-profile-card bg-gray-50 rounded-lg shadow-sm flex flex-wrap">
            <div className="dashboard-profile-card-img pl-10 py-10 pr-5">
 
            </div>
            <div className="dashboard-profile-card-text p-10">
              <h5 className="font-black text-primary">Current period Start: {user.stripeStartDay}</h5>
              <h5 className="font-black text-primary">Current period End: {user.stripeEndDay}</h5>
            </div>
          </div>
        </div>
        </section>

        <section className="px-5">
        <h6 className=" py-5 text-gray-300">Select or change subscription Pack</h6>
        <div className="plans-group flex flex-wrap flex-col md:flex-row justify-evenly text-center text-sm my-5">
          {data.allStripePrice.edges.map(plan => {
            return (
              <React.Fragment key={plan.node.product.id}>
                <div
                  className="plans-item lg:w-1/5 md:w-2/5 w-4/6 px-3 md:px-0 bg-gray-100 shadow-lg rounded-3xl sm:mx-1 md:mx-0 my-4 relative mx-auto"
                  
                >
                  <img
                    src=""
                    alt=""
                    className="w-14 self-center mx-auto absolute -top-7 inset-x-0"
                  />
                  <div className="h-10 border-bottom">
                    <h5 className="text-primary mt-8 font-black">
                      {" "}
                      {plan.node.product.name}
                    </h5>
                  </div>
                  <div className="plans-price ">
                    <div className="font-bold">
                      <h2 className="text-primary font-black text-3xl leading-tight">
                        {(plan.node.unit_amount / 100).toFixed(2)}€
                      </h2>
                      <span className="text-gray-400 text-base opacity-25">
                        {" "}
                        /month{" "}
                      </span>
                    </div>
                    <button
                      label="Subscribe"
                      className="btn bg-russian-violet-dark font-bold text-white my-5 mx-0 py-2 px-10 rounded-full hover:bg-primary hover:text-white  cursor-pointer "
                      onClick={() => redirectToCheckout(plan.node.id)}
                    >
                      Get Plan!
                    </button>
                  </div>
                </div>
              </React.Fragment>
            )
          })}
        </div>
        </section>

        {/* SELECTED PREMIUM POSTS */}
        <section className="container mx-auto all-blog-content my-20 px-5">
        <div className="flex">
        <h6 className="text-gray-300">Latest Premium Posts </h6>
        {/* <BsShieldShaded/> */}
        </div>  
      <div className="all-posts">
        <div className="container mx-auto mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {/* single post card start here */}
          {data.allStrapiPost.edges.map(post =>{
              return (
          <div key={post.node.id}> 
            <div className="rounded-lg overflow-hidden">
              <div className="relative overflow-hidden pb-1">
               
                  {post.node.featured_image && post.node.featured_image ? 
                   <Link to={`/blog/${post.node.slug}`}>
                  <Img 
                  alt={post.node.title}
                  key={post.node.featured_image.childImageSharp.fluid.src}
                  imgStyle={{ objectFit: 'contain' }}
                  fluid={post.node.featured_image.childImageSharp.fluid} 
                  className="mb-1"/>
                  </Link>
                  :""}
               
              </div>
              <div className="relative bg-gray-50">
                <div className="py-10 px-8">
                  <h5 className="text-lg font-bold">
                   <Link to={`/blog/${post.node.slug}`}> {post.node.title}</Link>
                  </h5>
                  {/* WRITEN BY */}
                  <div className="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                    <p className="text-xs mr-1">{`Writen by `} </p>
                    {
                    post.node.user.length === 1 ? <Link className="hover:text-black transition duration-300 ease-in-out text-xs mr-1" to={'/'}>{` ${post.node.user[0].username}`}</Link> 
                    : post.node.user.length === 2 ? authorsData.map((x, index) => <Link to={`/author/${x.id}`}className="hover:text-black transition duration-300 ease-in-out text-xs mr-1">{x.username} {index < authorsData.length -1  ? ' & ' : ''}</Link>)
                    :null
                    }
                  </div>
                  <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum justo nunc, pellentesque eget auctor sed, condimentum ut magna. Donec sit amet sollicitudin ligula. Vestibulum tempus tortor non felis dignissim, quis euismod diam faucibus. Vivamus ullamcorper massa a odio dignissim venenatis</p>
        
                  <div className="mt-10 flex justify-between items-center">
                    <div>
                     
                   {/* CATEGORIE TAG */}
                      {post.node.categories.map(cat=>{
                        return (
                        <div key={post.node.id}>
                        <Link  to={cat.name} className={`bg-russian-violet-dark-${cat.name} py-1 px-2 rounded text-white text-xs`}>
                          {cat.name}
                      </Link>
                      </div>
                      )
                      })}
                        
                      
                    </div>
                    <Link
                    to={'/'}
                      href={`/blog/${post.node.slug}`}
                      className="flex items-center"
                    >
                      <p className="mr-4 text-lg">Read more</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14.125"
                        height="13.358"
                        viewBox="0 0 14.125 13.358"
                      >
                        <g transform="translate(-3 -3.293)">
                          <path
                            id="Path_7"
                            data-name="Path 7"
                            d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                            fill="#1d1d1d"
                            fillRule="evenodd"
                          ></path>
                        </g>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div> )
          {/* single post card start here */}
          })}

        </div>
      </div>{" "}
      {/* end of all posts */}
    </section>
      </div>
    </Layout>
  )
}


