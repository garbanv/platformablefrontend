import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import EmbedContainer from "react-oembed-container"
import SEO from '../components/seo'



const BlogPost = ({ data }) => {
  useEffect(() => {
    window.instgrm.Embeds.process()
    window.twttr.widgets.load()
  }, [data])
  return (
    <>
      <Layout>
        {/* PAGE TITLE ON BROWSER */}
        <SEO title={data.strapiPage.title}/>
        <section className="posts-container mx-auto all-blog-content my-5 sm:my-20 px-5">
          <h3 className="text-1xl sm:text-3xl font-black mb-3">
            {/* page title */}
            {data.strapiPage.title} title
          </h3>

          {/* <div className="autor flex flex-wrap md:items-center">
            <div className="autores flex items-center">
              <div className="autorInfo flex">
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
                          to={`/author/${x.id}`}
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
            <div className="md:ml-5">
              <ul className="flex flex-nowrap">
                {data.strapiPost.categories.map(cat => {
                  return (
                    <Link
                      key={cat.name}
                      to={cat.name}
                      className={`bg-russian-violet-dark-${cat.name} py-1 px-2 mr-1 rounded text-white text-xs flex-grow`}
                    >
                      {cat.name}
                    </Link>
                  )
                })}
              </ul>
            </div>
          </div>
          <span className="text-gray-600 mr-3 text-xs">
            Updated at {new Date(data.strapiPage.updated_at).toDateString()}
          </span> */}

          <div className="posts-content">
            {/* <Img
              alt={data.strapiPost.title}
              key={data.strapiPost.featured_image.childImageSharp.fluid.src}
              imgStyle={{ objectFit: "contain" }}
              fluid={data.strapiPost.featured_image.childImageSharp.fluid}
              className="mb-10"
            /> */}

            <EmbedContainer markup={data.strapiPage.content}>
              <div
                dangerouslySetInnerHTML={{ __html: data.strapiPage.content }}
              />
            </EmbedContainer>
          </div>

          {/* end of all posts */}

          {/* AUTHOR CARD */}
        </section>

       
      </Layout>
    </>
  )
}

export default BlogPost

export const query = graphql`
query strapiPage($slug: String!){
    strapiPage(slug: { eq: $slug })  {
      id
      featured_image {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      slug
      title
      content
      updated_at
    }
  }
`
