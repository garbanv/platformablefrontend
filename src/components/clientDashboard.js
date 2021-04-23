import React, { useState, useEffect, useContext } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { loadStripe } from "@stripe/stripe-js"
import { useStaticQuery, graphql } from "gatsby"

import UserContext from "../context/UserContext"

// LOAD STRIPE CLIENT SIDE, this way wont be able to modify, edit, just client side checkout
let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.GATSBY_STRIPE_CHECKOUT_KEY)
  }
  return stripePromise
}
// END STRIPE CALL

export default function Dashboard() {
  const [user, setUser] = useContext(UserContext)
  const [selectedPlan, setSelectedPlan] = useState("")

  const data = useStaticQuery(graphql`
    {
      allStripePrice(sort: {fields: unit_amount, order: ASC}, filter: {product: {metadata: {Category: {eq: "Website Plan"}}}}) {
        edges {
          node {
            product {
              id
              description
              name
              metadata {
                Category
                Payment
              }
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
      allStrapiPost(limit: 3, sort: { fields: slug, order: ASC }) {
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
                fluid {
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

  const authorsData = data.allStrapiPost.edges[0].node.user
  const connectedUserEmail = user.email

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
      successUrl: "https://www.platformable.com/payment-success",
      cancelUrl: "https://www.platformable.com/cancel-payment",
    })
    if (error) {
      console.warn("Error:", error)
      //   setLoading(false)
    }
  }

  return (
    <Layout>
      <SEO title="Dashboard" />
      <div className="container mx-auto">
        {/* SECTION profile */}
        <section className="dashboard-profile my-10 px-5">
          <h6 className=" py-5 text-gray-300">Dashboard </h6>
          
          <div className="dashboard-profile-cards grid grid-cols-1 md:grid-cols-3 gap-4">

          

            <div className="dashboard-profile-card bg-gray-50 rounded-lg flex flex-wrap shadow-xl">
              <div className="dashboard-profile-card-img py-10"></div>
              <div className="dashboard-profile-card-text p-5">
                <h5 className="font-black text-primary">Hi! {user.name}</h5>
                
                {/* <Link
                  to={`/app/profile/1`}
                  className="text-sm text-white bg-yellow-300 px-5 py-1 text-center rounded"
                >
                  Edit Profile
                </Link> */}
                <h6 className="text-xs text-primary">
                  {user.isStripeActive
                    ? "Your Plan is Active"
                    : "No Active Plan yet!"}
                </h6>
              </div>
            </div>

            {/* <div className="dashboard-profile-card bg-gray-50 rounded-lg shadow-sm flex flex-wrap">
              <div className="dashboard-profile-card-img pl-10 py-10 pr-5"></div>
              <div className="dashboard-profile-card-text p-10">
                <h5 className="font-black text-primary">
                  {user.isStripeActive
                    ? "Your Plan is Active"
                    : "No Active Plan yet!"}
                </h5>
                {!user.isStripeActive ? (
                  <Link
                    to="/"
                    className="text-sm text-white bg-yellow-300 px-5 py-1 text-center rounded"
                  >
                    Change Plan
                  </Link>
                ) : (
                  <Link
                    to="/"
                    className="text-sm text-white bg-yellow-300 px-5 py-1 text-center rounded"
                  >
                    See plans
                  </Link>
                )}
              </div>
            </div> */}


            {/* <div className="dashboard-profile-card bg-gray-50 rounded-lg shadow-sm flex flex-wrap">
              <div className="dashboard-profile-card-img  "></div>
              <div className="dashboard-profile-card-text">
                <h5 className="font-black text-primary">
                  Current period Start: {new Date(user.stripeStartDay).toDateString()}
                </h5>
                <h5 className="font-black text-primary">
                  Current period End: {new Date(user.stripeEndDay ).toDateString()}
                </h5>
              </div>
            </div> */}

            


          </div>
        </section>

        {/* PLANS */}
        <section className="">
          <h6 className=" py-5 text-gray-300">
            Select a Subscription Pack
          </h6>
          {/* <div className="plans-group flex flex-wrap flex-col md:flex-row  text-center text-sm my-5 gap-4"> */}
          <div className="plans-group grid grid-cols-1 md:grid-cols-4 gap-4">
           {data.allStripePrice.edges.map(plan => {
              return (
                <React.Fragment key={plan.node.product.id}>
                  {/* <div className="plans-item lg:w-1/5 md:w-2/5 w-4/6 px-3 md:px-0 bg-gray-100 shadow-lg rounded-3xl sm:mx-1 md:mx-0 my-4 relative mx-auto "> */}
                    <div className="bg-gray-50 shadow-md rounded-lg text-center" >
                    {/* <img
                      src=""
                      alt=""
                      className="w-14 self-center mx-auto absolute -top-7 inset-x-0"
                    /> */}
                    <div className="h-14 border-bottom px-1">
                      <h5 className="text-primary my-8 font-black">
                        
                        {plan.node.product.name}
                      </h5>
                    </div>
                    <div className="plans-price ">
                      <div className="font-bold">
                        <h2 className="text-primary font-black text-3xl leading-tight">
                        ${(plan.node.unit_amount / 100).toFixed(2)}
                        </h2>
                        <span className="text-black">
                          {" "}
                          / {plan.node.product.metadata.Payment}
          
                          
                        </span>
                      </div>
                      <button
                        label="Subscribe"
                        className="btn bg-russian-violet-dark font-bold text-white my-5 mx-0 py-2 px-10 rounded-full hover:bg-primary hover:text-white  cursor-pointer "
                        onClick={() => redirectToCheckout(plan.node.id)}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </React.Fragment>
              )
            })}
          </div>
        </section>

       
      </div>
    </Layout>
  )
}
