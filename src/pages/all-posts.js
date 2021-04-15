import React, {useEffect,useState} from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from '../components/seo'

const AllPosts = ({data}) => {

  const authorsData = data.allStrapiPost.edges[0].node.user;

 const [category,setCategory]=useState('')
  useEffect(()=>{

  },[])

  return(
  <Layout>
    <SEO title="Blog"/>
    <section className="container mx-auto all-blog-content my-20 px-5">
      <h3 className="text-3xl font-black text-center mb-5">
        Open ecosystem:
      </h3>
      <h4 className="text-1xl font-black text-center mb-5">Blogs & Articles</h4>
     
      <div className="all-posts">
        <div className="container mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {/* single post card start here */}
          {data.allStrapiPost.edges.map(post =>{
              return (
          <div key={post.node.id}> 
            <div className="rounded-lg overflow-hidden">
              <div className="relative overflow-hidden pb-1">
                {/* Check if post has image, if we dont do the check netlify wont build */}
              {post.node.featured_image && post.node.featured_image ? 
              <Link to={`/${post.node.slug}`}>
              <Img 
              alt={post.node.title}
              key={post.node.featured_image.childImageSharp.fluid.src}
              imgStyle={{ objectFit: 'contain' }}
              fluid={post.node.featured_image.childImageSharp.fluid} 
              className="mb-1"/>
              </Link>
              : ''}
                
              </div>
              <div className="relative bg-gray-50">
                <div className="py-10 px-8">
                  <h3 className="text-lg font-bold">
                   <Link to={`/${post.node.slug}`}> {post.node.title}</Link>
                  </h3>
                  <div className="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                    <p className="text-xs mr-1">{`Writen by `} </p>
                    {
                    post.node.user.length === 1 ? <Link className="hover:text-black transition duration-300 ease-in-out text-xs mr-1" to='/'>{` ${post.node.user[0].username}`}</Link> 
                    : post.node.user.length === 2 ? authorsData.map((x, index) => <Link to={'/'} className="hover:text-black transition duration-300 ease-in-out text-xs mr-1">{x.username} {index < authorsData.length -1  ? ' & ' : ''}</Link>)
                    :null
                    }
                  </div>
                  <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum justo nunc, pellentesque eget auctor sed, condimentum ut magna. Donec sit amet sollicitudin ligula. Vestibulum tempus tortor non felis dignissim, quis euismod diam faucibus. Vivamus ullamcorper massa a odio dignissim venenatis</p>

        
                  <div className="mt-10 flex justify-between items-center">
                    <div>
                     
                   
                      {post.node.categories.map(cat=>{
                        return (
                        <div key={post.node.id}>
                        <Link  to={cat.name} className={`bg-${cat.name} py-1 px-2 rounded text-white text-xs`}>
                          {cat.name}
                      </Link>
                      </div>
                      )
                      })}
                        
                      
                    </div>
                    <Link
                      to={`/${post.node.slug}`}
                      className="flex items-center"
                    >
                      <p className="mr-4 text-lg">Read more</p>
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div> )
          {/* single post card ends here */}
          })}

        </div>
      </div>{" "}
      {/* end of all posts */}
    </section>
  </Layout>
)}

export default AllPosts

export const blogQuery = graphql`
query AllBloxPosts {
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
        user {
          id
          username
        }
      }
    }
  }
}
`




