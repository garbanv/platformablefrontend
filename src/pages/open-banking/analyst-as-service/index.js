import React from 'react'
import {Link,graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../../components/layout'
import GridDisplay from '../../../components/shared-components/GridDisplay'
import HowWeWork from '../../../components/lp-components/open-banking/analyst-as-service/howWeWork'
import FourHorizontalCircles from '../../../components/lp-components/open-banking/analyst-as-service/FourHorizontalCircles'
import AnalistAsServiceTitle from '../../../assets/ob-analyst-as-service/ANalyst as a Service Title.svg'
import HowToHire from '../../../components/lp-components/open-banking/analyst-as-service/HowToHire'
import Form from '../../../components/shared-components/Form'
export default function index({data}) {
    const authorsData = data?data.allStrapiPost.edges[0].node.user :null
    return (
       <Layout>
         {/* <section className="mainHero py-20">
           <div className="container mx-auto flex">
          <div className="heroLeft">
            <h3 className="font-black text-3xl">Analyst as a service</h3>
          </div>
          <div className="heroRight">
            <img src={AnalistAsServiceTitle} />
          </div>
          </div>
         </section> */}

        <GridDisplay
      gridDisplayClass="hero-section flex flex-col sm:flex-row flex-wrap my-6 mx-auto py-6 px-5 justify-center items-center"
      gridContentClass="md:w-2/5 "
      title="Open Banking / Open Finance"
      subtitle="Analyst as a service"
      secondParagraph=""
      secondParagraphClass=""
      paragraphOne="Subscribe to a set range of hours and answer key questions to support your growth"
      paragraphTwo=""
      paragraphThree=""
      imgContentClass=""
      imgClass="object-cointain w-96 h-94"
      backImgSrc={AnalistAsServiceTitle}
      alt="Hero"
    ></GridDisplay>

   <FourHorizontalCircles/>

   <HowWeWork/>



   {/* <PostsCards/> */}
   <h3 className="text-center font-black mt-5">Our Latest Work </h3>
    {/* POSTS */}
    <section className="container mx-auto all-blog-content my-20 px-5">
          
    <div className="blog-cards">
          <div className="home-posts-container-index grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {data?data.allStrapiPost.edges.map(post =>{
              return (
                //   CARD ITEM
            <div class="item rounded bg-gray-100  p-2  shadow-lg">
              {/* Check if post has image, if we dont do the check netlify wont build */}
              {post.node.featured_image && post.node.featured_image ? (
                <Link to={`/${post.node.slug}`}>
                  <Img
                    alt={post.node.title}
                    key={post.node.featured_image.childImageSharp.fluid.src}
                    imgStyle={{ objectFit: "contain" }}
                    fluid={post.node.featured_image.childImageSharp.fluid}
                    className="mb-2"
                  />
                </Link>
              ) : (
                ""
              )}

              <h5 className="text-lg font-bold leading-5">
                <Link to={`/${post.node.slug}`}> {post.node.title}</Link>
              </h5>
              <div className="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                <small className="text-xs mr-1">{`Writen by `} </small>
                {post.node.user.length === 1 ? (
                  <div
                    className="hover:text-black transition duration-300 ease-in-out text-xs mr-1"
                    to="/"
                  >{` ${post.node.user[0].username}`}</div>
                ) : post.node.user.length === 2 ? (
                  post.node.user.map((x, index) => (
                    <Link
                      to={"/"}
                      className="hover:text-black transition duration-300 ease-in-out text-xs mr-1"
                    >
                      {x.username} {index < post.node.user.length - 1 ? " & " : ""}
                    </Link>
                  ))
                ) : null}
              </div>
              <div>
                {post.node.categories.map(cat => {
                  return (
                    <div key={post.node.id} className="">
                      <button
                        to={cat.name}
                        className={`bg-${cat.name} py-1 px-2 rounded text-white small-text text-xs`}
                      >
                        {cat.name}
                      </button>
                    </div>
                  )
                })}
              </div>
            
            </div>
            )
             }) : ''}
          </div>
        </div>


        </section>



        <HowToHire/>

        <Form
      formClass="text-center my-5 mx-auto overflow-hidden py-6"
      formID="lp-training-form"
      titleClass=""
      title="Sign up now to gain new insights into your open banking / open finance strategy"
      iframeId="submitMailerlite"
      iframeSrc={"https://landing.mailerlite.com/webforms/landing/b9q0r6"}
    />
     
    
       </Layout>
    )
}



export const AnalystPagePosts = graphql`
query AnalystPagePosts {
  allStrapiPost(limit:3, filter: {categories: {elemMatch: {name: {eq: "Open Banking / Open Finance"}}}, tags: {elemMatch: {name: {eq: "analysis"}}}}) {
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
}
`