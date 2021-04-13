import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'

export default function BlogCards({data}) {
    const authorsData = data.allStrapiPost.edges[0].node.user;
    return (
        <div>
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
              <p className="text-xs leading-5 my-5 ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m
              </p>
            </div>)
             })}
          </div>
        </div>{" "}
            
        </div>
    )
}
