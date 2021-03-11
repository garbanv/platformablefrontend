import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"


const posts = ({data}) => {

  const authorsData = data.allStrapiPost.edges[0].node.users_permissions_users;

  return(
  <Layout>
    <section className="container mx-auto all-blog-content my-20">
      <h3 className="text-5xl font-black text-center mb-5">
        Our Ideas are worth reading
      </h3>
     
      <div className="all-posts">
        <div className="container mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {/* single post card start here */}
          {data.allStrapiPost.edges.map(post =>{
              return (
          <div key={post.node.id}> 
            <div className="rounded-lg overflow-hidden">
              <div className="relative overflow-hidden pb-1">
                <a href={`/blog/${post.node.slug}`}>
                {/* <img
                  className="absolute h-full w-full object-cover object-center"
                  src="https://platformable.com/content/images/2021/01/mandy-choi-_qZ0us4az20-unsplash.jpg"
                  alt=""
                /> */}
                <Img 
        alt={post.node.title}
        key={post.node.featured_image.childImageSharp.fluid.src}
        imgStyle={{ objectFit: 'contain' }}
        fluid={post.node.featured_image.childImageSharp.fluid} 
        className="mb-1"/>
                </a>
              </div>
              <div className="relative bg-gray-50">
                <div className="py-10 px-8">
                  <h3 className="text-2xl font-bold">
                   <a href={`/blog/${post.node.slug}`}> {post.node.title}</a>
                  </h3>
                  <div className="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                    <p className="text-xs">Writen by&nbsp;</p>
                    {
                    post.node.users_permissions_users.length === 1 ? <Link className="hover:text-black transition duration-300 ease-in-out text-xs mr-1" >{post.node.users_permissions_users[0].username}</Link> 
                    : post.node.users_permissions_users.length === 2 ? authorsData.map((x, index) => <Link to={`/author/${x.id}`}className="hover:text-black transition duration-300 ease-in-out text-xs mr-1">{x.username} {index < authorsData.length -1  ? ' & ' : ''}</Link>)
                    :null
                    }
                  </div>
                  <p className="leading-7">
                    High quality notepad mockup in a huge resolution and with
                    changeable everything.
                  </p>
                  <div className="mt-10 flex justify-between items-center">
                    <div>
                     
                   
                      {post.node.categories.map(cat=>{
                        return (
                        <div >
                        <Link key={cat.name} to={cat.name} className={`bg-russian-violet-dark-${cat.name} py-1 px-2 rounded text-white text-xs`}>
                          {cat.name}
                      </Link>
                      </div>
                      )
                      })}
                        
                      
                    </div>
                    <a
                      href="https://collect.criggzdesign.com/index.php/resources/mockups/notepad/"
                      className="flex items-center"
                    >
                      <p className="mr-4">Read more</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14.125"
                        height="13.358"
                        viewBox="0 0 14.125 13.358"
                      >
                        <g transform="translate(-3 -3.293)">
                          <path
                            id="Path_7"
                            data-name="Path 7"
                            d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                            fill="#1d1d1d"
                            fillRule="evenodd"
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> )
          {/* single post card start here */}
          })}

        </div>
      </div>{" "}
      {/* end of all posts */}
    </section>
  </Layout>
)}

export default posts

export const blogQuery = graphql`
query BlogPosts {
  allStrapiPost {
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
        users_permissions_users {
          id
          username
        }
      }
    }
  }
}
`


