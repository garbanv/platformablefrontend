import React from "react"
import {Link, graphql} from 'gatsby'
import Img from 'gatsby-image'
/*shared-components*/
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import GridDisplay from "../../../components/shared-components/GridDisplay"
import Form from "../../../components/shared-components/Form"
import PostsCards from "../../../components/home-components/PostsCards"
/*specific-components*/
import Potential from "../../../components/lp-components/policy-development/Potential"
import ProductCards from '../../../components/lp-components/policy-development/ProductCards';
import HowWeDoIt from '../../../components/lp-components/policy-development/HowWeDoIt';

/*assets*/
import sectionOneImg from "../../../assets/lp-policy_development/policy_development _and_advocacy_services.svg"



const LPPolicyDevelopment = ({data}) => (
  <Layout>
    <SEO title="Policy Development" />
    <section className="hero-data-governance py-10">
        <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 items-center px-5 ">
          <div className="hero-data-governance-left">
            <h3 className="font-black text-3xl ">Policy development
      and advocacy services</h3>
            <p className="text-2xl">
            Join us as we map and respond
      to emerging policy opportunities
            </p>
          </div>
          <div className="hero-data-governance-right   grid justify-ends ">
            <img src={sectionOneImg}></img>
          </div>
        </div>
      </section>


    <Potential />

    <Form
      formClass="text-center mt-5 mx-auto overflow-hidden"
      formID="lp-training-form"
      titleClass="text-base"
      title="Sign up now to learn about the upcoming global policy agenda"
      iframeId="submitMailerlite"
      iframeSrc={"https://landing.mailerlite.com/webforms/landing/b9q0r6"}
    />

    <HowWeDoIt/>
    <ProductCards/>
    <section className="mt-6 mx-auto py-6 px-5 bg-whitePurple">
      <h2 className="text-center font-black">Current policy consultation opportunities</h2>
      <iframe src="https://airtable.com/embed/shrHdOaxfkJmBJUno?backgroundColor=red&viewControls=on" frameborder="0"  width="100%" height="533" className="my-8 mx-auto px-8">
      </iframe>
    </section>


    <section className=" bg-lightPurple py-10">
          
    <div className="blog-cards container mx-auto all-blog-content my-20 px-5">
      <h3 className="text-center font-black my-5 text-white">{`See our recent submissions\n and contribute to our next response`}</h3>
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


    <Form
      formClass="text-center my-5 mx-auto overflow-hidden"
      formID="lp-training-form"
      titleClass="text-base"
      title="Sign up now to learn about the upcoming global policy agenda"
      iframeId="submitMailerlite"
      iframeSrc={"https://landing.mailerlite.com/webforms/landing/b9q0r6"}
    />
  </Layout>
)

export default LPPolicyDevelopment


export const OGPolicyPostIndex = graphql`
query OGPolicyPostIndex {
  allStrapiPost(limit:3, filter: {categories: {elemMatch: {name: {eq: "Open Government"}}}}) {
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