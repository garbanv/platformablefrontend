import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from '../components/seo'

const OpenGovernmentPosts = ({data}) => {

  const authorsData = data.allStrapiPost.edges[0].node.user;

  return(
  <Layout>
    <SEO title="Blog"/>
    <section className="container mx-auto all-blog-content my-20 px-5">
      <h3 className="text-3xl font-black text-center">
        Open Government
      </h3>
      <h3 className="text-1xl font-black text-center mb-5">Posts and Articles</h3>
     
      <div class="blog-cards">
          <div class="masonry">
          {data.allStrapiPost.edges.map(post =>{
              return (
            <div class="item rounded bg-gray-100 red shadow-lg">
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
                    <div key={post.node.id}>
                      <button
                        to={cat.name}
                        className={`bg-${cat.name} py-1 px-2 rounded small-text text-white text-xs`}
                      >
                        {cat.name}
                      </button>
                    </div>
                  )
                })}
              </div>
              <p className="text-xs leading-5 my-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m
              </p>
            </div>)
             })}
          </div>
        </div>{" "}
      {/* end of all posts */}
    </section>
  </Layout>
)}

export default OpenGovernmentPosts

export const blogQuery = graphql`
query OpenGovernmentBlogPosts {
    allStrapiPost(filter: {categories: {elemMatch: {name: {eq: "Open Government"}}}}) {
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
}
`




