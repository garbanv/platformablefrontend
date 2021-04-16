import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"

export default function blogs({data}) {
const authorsData = data.allStrapiPost.edges[0].node.user;
  return (
    <Layout>
        
      <div className="container mx-auto all-blog-content my-20 px-5">
      {/* <h3 className="text-3xl font-black text-center">
        Open Ecosytems
      </h3>
      <h3 className="text-1xl font-black text-center mb-10">Posts and Articles</h3> */}
          {/* blog CARD START HERE */}
        <div class="blog-cards">
          <div class="masonry">
          {data.allStrapiPost.edges.map(post =>{
              return (
                //   CARD ITEM
            <div class="item rounded bg-gray-100  shadow-lg mb-5">
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
           
              <span className="text-gray-600 mr-3 text-xs small-text mt-1">
            Published {new Date(post.node.published_at).toDateString()}
       
          </span>
                   {' '}
          <span className="text-gray-600 mr-3 text-xs small-text mt-1">
            Updated at {new Date(post.node.updated_at).toDateString()}
          </span>
              <div className="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                <small className="text-xs mr-1">{`Writen by `} </small>
                {post.node.user.length === 1 ? (
                  <Link
                    className="hover:text-black transition duration-300 ease-in-out text-xs mr-1"
                    to={`/author/${post.node.user[0].id}`}
                  >{` ${post.node.user[0].username}`}</Link>
                ) : post.node.user.length > 1 ? (
                  post.node.user.map((x, index) => (
                    <Link
                      to={`/author/${post.node.user[index].id}`}
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
              <p className="text-xs leading-5 my-5">
             {post.node.excerpt ? post.node.excerpt : ""}
              </p>
            </div>
            )
             })}
          </div>
        </div>
      </div>
    </Layout>
  )
}


export const blogQuery = graphql`
query AllBlogPosts {
  allStrapiPost(sort: {fields: published_at, order: ASC}) {
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
        published_at
        excerpt
      }
    }
  }
}
`

