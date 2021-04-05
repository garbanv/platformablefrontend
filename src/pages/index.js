import React from "react"
import {Link, graphql} from 'gatsby'
import Img from "gatsby-image"
/*shared-components*/
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridDisplay from "../components/shared-components/GridDisplay"
import Form from "../components/shared-components/Form"
/*specific-components*/
import PositionedSection from '../components/home-components/PositionedSection';
import PostsCards from "../components/home-components/PostsCards"
// import ProductStreamsCards from './../components/home-components/ProductStreamsCards';
import HowWeDoItCards from '../components/home-components/HowWeDoItCards';
import WorkWithCards from '../components/home-components/WorkWithCards';

/*assets*/
import sectionOneImg from "../assets/home/hero_squares.png"
import sectionTwoImg from "../assets/home/quarterly_trends.png"
import sectionSixImg from '../assets/home/we_publish_analysis.png'

const IndexPage = ({data}) => {
  const authorsData = data?data.allStrapiPost.edges[0].node.user :null
return(
  <Layout>
    <SEO title="Home" />

    <GridDisplay
      gridDisplayClass="hero-section flex flex-col sm:flex-row flex-wrap my-6 mx-auto py-6 px-5 justify-center items-center"
      gridContentClass="md:w-2/5"
      title="We support open ecosystems that build economic opportunities, solve complex problems, and enable everyone to participate and co-create their own value"
      paragraphOne="> Platform business models"
      paragraphTwo="> Open ecosystems where everyone can participate."
      doNotDisplayAnchor="hidden"
      url="/about"
      type="button"
      label={"Learn more about us"}
      btnClass="outlinedBtn text-primary font-bold border-2 my-5 mx-0 py-2 px-10 rounded-full hover:bg-secondary cursor-pointer"
      imgContentClass=""
      imgClass="object-cointain w-96 h-94"
      backImgSrc={sectionOneImg}
      alt="Hero"
    ></GridDisplay>

    <GridDisplay
      gridDisplayClass="bg-lightBlue flex flex-col sm:flex-row flex-wrap my-6 mx-auto py-6 px-5 justify-center items-center"
      gridContentClass="md:w-2/5"
      firstParagraph="Download our latest release"
      title={`Open Banking/Open Finance Quarterly Trend Reports
        ` + `\nQ1 2021`}
      doNotDisplayAnchor="hidden"
      url={"/landings/trends"}
      type="button"
      label={"More info on our reports"}
      btnClass="bg-secondary text-primary font-bold my-5 mx-0 py-2 px-10 rounded-full hover:bg-secondary cursor-pointer"
      imgContentClass=""
      imgClass="object-cointain w-96 h-94"
      backImgSrc={sectionTwoImg}
      alt="Hero"
    ></GridDisplay>

    {/* <PostsCards/> */}
    <h3 className="text-center font-black">Latest Posts </h3>
    {/* POSTS */}
    <section className="container mx-auto all-blog-content my-20 px-5">
          <div className="flex">

            {/* <BsShieldShaded/> */}
          </div>
          <div className="all-posts">
            <div className="container mx-auto mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {/* single post card start here */}
              {data?data.allStrapiPost.edges.map(post => {
                return (
                  <div key={post.node.id}>
                    <div className="rounded-lg overflow-hidden">
                      <div className="relative overflow-hidden pb-1">
                        {post.node.featured_image &&
                        post.node.featured_image ? (
                          <Link to={`/blog/${post.node.slug}`}>
                            <Img
                              alt={post.node.title}
                              key={
                                post.node.featured_image.childImageSharp.fluid
                                  .src
                              }
                              imgStyle={{ objectFit: "contain" }}
                              fluid={
                                post.node.featured_image.childImageSharp.fluid
                              }
                              className="mb-1"
                            />
                          </Link>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="relative bg-gray-50">
                        <div className="py-1 px-8">
                          <h5 className="text-lg font-bold">
                            <Link to={`/blog/${post.node.slug}`}>
                              {" "}
                              {post.node.title}
                            </Link>
                          </h5>
                          {/* WRITEN BY */}
                          <div className="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                            <p className="text-xs mr-1">{`Writen by `} </p>
                            {post.node.user.length === 1 ? (
                              <Link
                                className="hover:text-black transition duration-300 ease-in-out text-xs mr-1"
                                to={"/"}
                              >{` ${post.node.user[0].username}`}</Link>
                            ) : post.node.user.length === 2 ? (
                              authorsData.map((x, index) => (
                                <Link
                                  to={`/author/${x.id}`}
                                  className="hover:text-black transition duration-300 ease-in-out text-xs mr-1"
                                >
                                  {x.username}{" "}
                                  {index < authorsData.length - 1 ? " & " : ""}
                                </Link>
                              ))
                            ) : null}
                          </div>
        

                      
                        </div>
                      </div>
                    </div>
                  </div>
                )
                {
                  /* single post card start here */
                }
              }):null}
            </div>
          </div>{" "}
          {/* end of all posts */}
        </section>

    <PositionedSection/>

    <HowWeDoItCards/>

    <WorkWithCards/>

    <GridDisplay
      gridDisplayClass="bg-purple flex flex-col sm:flex-row flex-wrap my-6 mx-auto py-6 px-5 justify-center items-center"
      gridContentClass="md:w-2/5"
      title="We publish analysis
      and insights"
      paragraphOne="We share data on the growth of open ecosystems, and track how value is being generated and distributed"
      doNotDisplayAnchor="hidden"
      doNotDisplay="hidden" 

      imgContentClass="lg:w-2/5"
      imgClass="object-cointain w-96 h-94"
      backImgSrc={sectionSixImg}
      alt="Hero"
    ></GridDisplay>

    <Form
      formClass="text-center my-6 mx-auto"
      titleClass="text-sm"
      title="The future is open"
      iframeId=""
      iframeSrc={"https://landing.mailerlite.com/webforms/landing/b9q0r6"}
      paragraph="We share monthly updates on the move to open ecosystems"
      paragraphClass="mb-12"
    />


  </Layout>
)
            }

export default IndexPage


export const blogQuery = graphql`
query HomepagePosts {
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
