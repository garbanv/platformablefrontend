import React from 'react'
import {Link} from 'gatsby'
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
        <GridDisplay
      gridDisplayClass="hero-section flex flex-col sm:flex-row flex-wrap my-6 mx-auto py-6 px-5 justify-center items-center"
      gridContentClass="md:w-2/5"
      title="Analyst as service"
      secondParagraph="Understand the market environment, what has worked for others and where tha gaps and opportunities are."
      secondParagraphClass="py-2"
      paragraphOne="Understand the market environment, what has worked for others and where tha gaps and opportunities are."
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
          <div className="masonry">
          {data?data.allStrapiPost.edges.map(post =>{
              return (
                //   CARD ITEM
            <div class="item rounded bg-gray-100  shadow-lg">
              {/* Check if post has image, if we dont do the check netlify wont build */}
              {post.node.featured_image && post.node.featured_image ? (
                <Link to={`/blog/${post.node.slug}`}>
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
                <Link to={`/blog/${post.node.slug}`}> {post.node.title}</Link>
              </h5>
              <div className="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                <small className="text-xs mr-1">{`Writen by `} </small>
                {post.node.user.length === 1 ? (
                  <div
                    className="hover:text-black transition duration-300 ease-in-out text-xs mr-1"
                    to="/"
                  >{` ${post.node.user[0].username}`}</div>
                ) : post.node.user.length === 2 ? (
                  authorsData.map((x, index) => (
                    <div
                      to={"/"}
                      className="hover:text-black transition duration-300 ease-in-out text-xs mr-1"
                    >
                      {x.username} {index < authorsData.length - 1 ? " & " : ""}
                    </div>
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
      title="Sign up now for pricing and calendar availability"
      iframeId="submitMailerlite"
      iframeSrc={"https://landing.mailerlite.com/webforms/landing/b9q0r6"}
    />
     
    
       </Layout>
    )
}



export const AnalystPagePosts = graphql`
query AnalystPagePosts {
  allStrapiPost(limit: 3, sort: { fields: slug, order: ASC })  {
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