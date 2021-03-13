import React, { useEffect,useState, Suspense } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import EmbedContainer from "react-oembed-container"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"


const PostContentComponent = React.lazy(() => import('../components/PostContentComponent'));

const BlogPost = ({ data }) => {

  const [scripts,setScripts] = useState([])

  function getScripts () {
 // get all script tags from content
 const re = /<script\b[^>]*>[\s\S]*?<\/script\b[^>]*>/g
 const results = setScripts(data.strapiPost.content.match(re))
 
 return results
  }
 
  console.log('scripts', scripts)


  useEffect(() => {
    getScripts()
 

    // window.instgrm.Embeds.process()
    // window.twttr.widgets.load()
  }, [data])
  return (
    <>
      <Layout>
        <Helmet>
          {scripts ? scripts.map((script)=> {
           return script  
          }): null}
        </Helmet>
        <SEO title={data.strapiPost.title}/>
        <section className="posts-container mx-auto all-blog-content my-5 sm:my-20 px-5">
          <h3 className="text-1xl sm:text-3xl font-black mb-3">
            {data.strapiPost.title}
          </h3>
      

          <div className="autor flex flex-wrap items-start">
            <div className="autores flex  ">
              <div className="autorInfo flex items-start">
                <h2 className="text-sm tracking-tighter text-gray-900">
                  By{" "}
                  {data.strapiPost.users_permissions_users.length === 1 ? (
                    <>
                      <Link className="hover:text-black transition duration-300 ease-in-out text-xs mr-1">
                        {data.strapiPost.users_permissions_users[0].username}
                      </Link>{" "}
                    </>
                  ) : data.strapiPost.users_permissions_users.length === 2 ? (
                    data.strapiPost.users_permissions_users.map((x, index) => (
                      <>
                        <Link
                         
                          className="hover:text-black transition duration-300 ease-in-out text-xs mr-1"
                        >
                          {x.name} {x.lastname}{" "}
                          {index <
                          data.strapiPost.users_permissions_users.length - 1
                            ? " &"
                            : ""}
                        </Link>
                      </>
                    ))
                  ) : null}
                </h2>
              </div>
            </div>
            {/* LOAD CATEGORIES */}
            <div className="md:ml-5">
              <ul className="flex flex-nowrap relative ">
                {data.strapiPost.categories.map(cat => {
                  return (
                    <Link
                      key={cat.name}
                      
                      className={`bg-gray-200 py-1 px-2 mr-1 rounded-lg text-black text-xs flex-grow `}
                    >
                      {cat.name}
                    </Link>
                  )
                })}
              </ul>
            </div>
          </div>
          <span className="text-gray-600 mr-3 text-xs">
            Updated at {new Date(data.strapiPost.updated_at).toDateString()}
          </span>

          <div className="posts-content py-10">
            <Img
              alt={data.strapiPost.title}
              key={data.strapiPost.featured_image.childImageSharp.fluid.src}
              imgStyle={{ objectFit: "contain" }}
              fluid={data.strapiPost.featured_image.childImageSharp.fluid}
              className="mb-10"
            />

            <EmbedContainer markup={data.strapiPost.content}>
              <div
                dangerouslySetInnerHTML={{ __html: unescape(data.strapiPost.content) }}
              />
            </EmbedContainer>





          </div>

          {/* end of all posts */}

          {/* AUTHOR CARD */}

          <h3 className="text-2xl font-black text-center my-10">
            Read More posts by this Author{" "}
          </h3>
        </section>

        <section className="posts-container mx-auto">
          <div
            className={`grid grid-cols-1 sm:grid-cols-${data.strapiPost.users_permissions_users.length} md:grid-cols-${data.strapiPost.users_permissions_users.length} xl:grid-cols-${data.strapiPost.users_permissions_users.length} gap-4 my-5`}
          >
            {data.strapiPost.users_permissions_users.map((user, index) => {
              return (
                <div
                  key={index}
                  className="bg-purple-50 flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg"
                >
                  <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
                    {/* <img
              src="https://platformable.com/content/images/2020/03/headshot-profile.png"
              alt=""
              className="h-full w-full my-0"
            /> */}
                    <Img
                      alt={data.strapiPost.title}
                      key={index}
                      fluid={user.image.childImageSharp.fluid}
                      className="h-full w-full my-0"
                    />
                  </div>

                  <h2 className="mt-4 font-bold text-xl">
                    {user.name} {user.lastname}
                  </h2>
                  <h6 className="mt-2 text-sm font-medium">{user.position}</h6>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    {user.bio}
                  </p>
                </div>
              )
            })}
          </div>
        </section>
      </Layout>
    </>
  )
}

export default BlogPost

export const query = graphql`
  query MyPost($slug: String!) {
    strapiPost(slug: { eq: $slug }) {
      categories {
        name
      }
      content
      id
      title
      users_permissions_users {
        id
        name
        lastname
        username
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        position
      }
      updated_at
      featured_image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
