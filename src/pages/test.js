import React,{useEffect, useState} from 'react'
import {Link, graphql} from 'gatsby'
import Img from "gatsby-image"



export default function Test({data}) {
    const authorsData = data?data.allStrapiPost.edges[0].node.user :null
    const [post,setPost]=useState([]);

    // useEffect(()=>{
    //     fetch(`https://websiteserver-ds7cf.ondigitalocean.app/posts/1`)
    //     .then(res=>res.json())
    //     .then(response=>setPost(response))
    //     },[]) 

    return (
        <div className="container mx-auto bg-red-500 my-5 px-5">
 
          {/* blog CARD START HERE */}
        {/* <div class="blog-cards"> */}
          <div class="masonry container">
          {data.allStrapiPost.edges.map(post =>{
              return (
                //   CARD ITEM
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
             })}
          </div>
        {/* </div> */}
      </div>
    )
}


export const blogQuery = graphql`
query TestpagePosts {
  allStrapiPost(limit: 4, sort: { fields: slug, order: ASC })  {
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