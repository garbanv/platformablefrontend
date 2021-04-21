import React from "react"
import { Link,graphql } from "gatsby"
import Layout from "../../components/layout"
import Img from 'gatsby-image'

const AuthorPage = ({ data }) => {
  const user = data.strapiUser;

  return (
    <Layout>
      <div className="container mx-auto">
       
       
       <section className="grid md:grid-cols-2  grid-cols-1 py-10 justify-center  items-center bg-gray-50 my-5 rounded-xl">
         <div className="authors-page-left grid justify-center">
      {/* <img src={user.image.childImageSharp.fluid.src}/> */}
         {user.image && user.image ? (
                <img src={user.image.childImageSharp.fluid.src}/>
                  // <Img
                  //   alt={user.title}
                  //   key={user.image.childImageSharp.fluid}
                  //   imgStyle={{ objectFit: "contain" }}
                  //   fluid={user.image.childImageSharp.fluid.src}
                  //   className="w-full object-contain h-32 sm:h-48 md:h-64 my-0"
                  // />
                
              ) : (
                ""
              )}
      
          {/* <Img
                    alt={post.title}
                    key={user.image.childImageSharp.fluid.src}
                    imgStyle={{ objectFit: "contain" }}
                    fluid={image.childImageSharp.fluid}
                    className="w-full object-contain h-32 sm:h-48 md:h-64 my-0"
                  /> */}
         </div>
         <div className="right px-5">
           <h3 className="font-black">{user.name} {user.lastname}</h3>
           <h5 className="font-black italic">{user.position}</h5>
           <h6 className=""><strong>Email: </strong> {` ${user.email}`}</h6>
           <p dangerouslySetInnerHTML={{ __html: user.bio}}></p>
         </div>
       </section>


      <section className="blog-cards px-5 md:px-0">
        <h3 className="text-center font-black mt-14">{`Posts`}</h3>
        <div className="bottom-line"></div>
        <div className="masonry">
          {user.posts.map(post=> {

            return (
        <>       
                 
                
                   <div className="item rounded bg-gray-100  shadow-lg mb-5">
                   <Link to={`/${post.slug}`}>
                   {post.featured_image && post.featured_image ? (
                <Link to={`/${post.slug}`}>
                  <Img
                    alt={post.title}
                    key={post.featured_image.childImageSharp.fluid.src}
                    imgStyle={{ objectFit: "contain" }}
                    fluid={post.featured_image.childImageSharp.fluid}
                    className="w-full object-contain h-32 sm:h-48 md:h-64 my-0"
                  />
                </Link>
              ) : (
                ""
              )}
                     
                     <h5 className="text-lg font-bold leading-5 my-5">{post.title}</h5>
                     </Link>
                   </div>
                 
                
            </>
            )
          })}
        </div>
        </section>

        
      </div>
      {/* end of container */}
    {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
    </Layout>
  )
}

export const query = graphql`
query strapiAuthorPage($strapiId: Int){
  strapiUser(strapiId: {eq: $strapiId}) {
    bio
    id
    image {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    name
    email
    lastname
    position
    strapiId
    posts {
      slug
      title
      featured_image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      excerpt
    }
  }
  }
`

export default AuthorPage

