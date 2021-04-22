import React from 'react'
import {Link, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../../components/layout'
import GridDisplay from '../../../components/shared-components/GridDisplay'
import HowWeWork from '../../../components/lp-components/open-banking/open-ecosystem-mapping/howWeWork'
import FourHorizontalCircles from '../../../components/lp-components/open-banking/open-ecosystem-mapping/FourHorizontalCircles'
import OBOpenEcosystemTitle from '../../../assets/ob-open-ecosystem-mapping/OB - Open Ecosystem Title.png'
import Form from '../../../components/shared-components/Form'
import BuildADataImg from '../../../assets/ob-open-ecosystem-mapping/build-a-data.png'
import UseOurExistingImg from '../../../assets/ob-open-ecosystem-mapping/use-our-existing.png'
import CreateARangeImg from '../../../assets/ob-open-ecosystem-mapping/create-a-range.png'
import OESMLine from '../../../assets/ob-open-ecosystem-mapping/oecmappingLines.png'
import PanoramaImg from '../../../assets/ob-open-ecosystem-mapping/Panorama.png'
import PolicyImg from '../../../assets/ob-open-ecosystem-mapping/Policy.png'
import ProcessImg from '../../../assets/ob-open-ecosystem-mapping/Process.png'


export default function index({data}) {
    const authorsData = data?data.allStrapiPost.edges[0].node.user :null
    return (
       <Layout>
        <GridDisplay
      gridDisplayClass="hero-section flex flex-col sm:flex-row flex-wrap my-6 mx-auto py-6 px-5 justify-center items-center"
      gridContentClass="md:w-2/5"
      title="Open Banking / Open Finance"
      subtitle="Open Ecosystem Mapping"
      secondParagraph=""
      secondParagraphClass="py-2"
      paragraphOne=""
      paragraphTwo=""
      paragraphThree=""
      imgContentClass=""
      imgClass="object-cointain w-96 h-94"
      backImgSrc={OBOpenEcosystemTitle}
      alt="Hero"
    ></GridDisplay>

   <FourHorizontalCircles/>
   <section className="bg-lightPink py-10 anOpenEcosystemIs">
       <div className="container mx-auto md:w-2/5 ">
           <h3 className="font-black text-center my-5">An open ecosystem is</h3>
           <p className="italic">A network of <strong>equitable participation opportunities</strong> that <strong>allow stakeholders</strong> (including governments and regulators, associations, industry enterprises, small and medium enterprises, researchers, community groups and individuals) <strong>to co-create, collaborate, compete, complement, and/or coordinate</strong> with each other, using open standards, common tools, APIs, and digital infrastructures.</p>
       </div>

   </section>

    {/* AUDIENCE */}
   <HowWeWork/>

   {/* OUR PROCESS */}

   <section className="our-process my-10">
     <div className="container mx-auto ">

        <h3 className="font-black text-center my-5">Our process</h3>

        <div className="our-process-pill w-4/4 md:w-2/4 flex md:flex-nowrap flex-wrap justify-center items-center  py-5 px-10 shadow mx-auto md:rounded-full border-gray-100 shadow">
          <div className="our-process-img">
            <img src={BuildADataImg} className="img-thumbnail"/>
          </div>
          <div className="our-process-text">
            <p className="text-sm md:text-md">Build a <strong>data model</strong> and taxonomies for each element of the ecosystem</p>
          </div>
        </div>

      <div className="our-process-vertical-line"></div>

        <div className="our-process-pill w-4/4 md:w-2/4 flex md:flex-nowrap flex-wrap justify-center items-center  py-5 px-10 shadow mx-auto md:rounded-full border-gray-100 shadow">
          <div className="our-process-img">
            <img src={UseOurExistingImg} className="img-thumbnail"/>
          </div>
          <div className="our-process-text">
            <p className="text-sm md:text-md"> Use our existing <strong>data collection</strong> to enhance your mapping needs</p>
          </div>
        </div>

        <div className="our-process-vertical-line"></div>

        <div className="our-process-pill w-4/4 md:w-2/4 flex md:flex-nowrap flex-wrap justify-center items-center  py-5 px-10 shadow mx-auto md:rounded-full border-gray-100 shadow">
          <div className="our-process-img">
            <img src={CreateARangeImg} className="img-thumbnail"/>
          </div>
          <div className="our-process-text">
            <p className="text-sm md:text-md">Create a range of <strong>tools</strong> to help you understand and strategise around your ecosystem</p>
          </div>
        </div>

        <div className="mx-auto flex justify-center">
          <img src={OESMLine}/>
        </div>
        
     </div>
   </section>


{/* TOOLS */}
   <section className="tools"> 
   <div className="container mx-auto">
     <div className="tools-cards-container flex flex-wrap md:flex-nowrap gap-4 px-5">

       <div className="tools-card-item shadow p-5 rounded-2xl flex-grow md:flex-grow">
       <div className="grid justify-center border-b border-gray-100"><img src={PanoramaImg} className=" text-center img-thumbnail"/></div>
          <h3 className="font-black mt-5">Panorama</h3>
          <p className="text-sm">A “State of the Market” report and dashboard outlining the ecosystem stakeholders and value being generated</p>
       </div>

       <div className="tools-card-item shadow p-5 rounded-2xl flex-grow md:flex-grow" >
       <div className="grid justify-center border-b border-gray-100"><img src={PolicyImg} className=" img-thumbnail"/></div>
          <h3 className="font-black mt-5">Policy</h3>
          <p className="text-sm">A series of insight tools to help you identify partnerships and opportunities to be part of the wider ecosystem </p>
       </div>

       <div className="tools-card-item shadow p-5 rounded-2xl flex-grow md:flex-grow">
         <div className="grid justify-center border-b border-gray-100"><img src={ProcessImg} className=" img-thumbnail text-center mx-auto"/></div>
          <h3 className="font-black mt-5">Process</h3>
          <p className="text-sm">Data model and guidelines to assist you to measure the value generated by stakeholders through a systematic, structured and regularly scheduled process </p>
       </div>


     </div>

   </div>
   </section>

  

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





        <Form
      formClass="text-center my-5 mx-auto overflow-hidden py-6"
      formID="lp-training-form"
      titleClass=""
      title="Contact us to discuss mapping your ecosystem"
      iframeId="submitMailerlite"
      iframeSrc={"https://landing.mailerlite.com/webforms/landing/q8j2m7"}
    />
     
    
       </Layout>
    )
}



export const OBOpenEcosystemPagePosts = graphql`
query OBOpenEcosystemPagePosts {
  allStrapiPost(limit:3, filter: {categories: {elemMatch: {name: {eq: "Open Banking / Open Finance"}}}, tags: {elemMatch: {name: {eq: "mapping"}}}})  {
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