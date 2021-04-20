import React, { useEffect,useState, useRef,useContext } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import EmbedContainer from "react-oembed-container"
import { InlineWidget } from "react-calendly";
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import BlogPostAlertMessage from '../components/BlogPostAlertMessage'
import PostContentComponent from '../components/PostContentComponent'
import UserContext from '../context/UserContext'




const BlogPost = ({ data }) => {
  const [user,setUser] = useContext(UserContext)
  const [scripts,setScripts] = useState([])
  const [update,setUpdate]=useState(false);
  const [category,setCategory]=useState('');



  

  useEffect(() => {
    
    const loggedInUser = localStorage.getItem("user");
    if(typeof window !==`undefined`) {
      if (loggedInUser) {
      
        setUser(prevUser => ({ ...prevUser,loggedInUser }))} else {
        // console.log('not logged')
      }
    }

    const checkIfCategoryNameIncludesSymbol = (string)=>{
      const myStringReplaced = string.replace(/[/ " "]/g, '-');
      setCategory(myStringReplaced)
    }

   
 
  
    
  }, [category]);

const getMembership = (subscription, isLoggedIn)=>{
 if(subscription==="free") {
   return (
    
    <PostContentComponent data={data.strapiPost.content} />

   )
 } else if (subscription==="free_login" && !user.isLoggedIn) {
  return (<BlogPostAlertMessage message="Hi, this is a login-only blog post. Become a member to get unlimited access and discover more of ours services."/>)
 } else if (subscription==="free_login" && user.isLoggedIn){
  return (

    <PostContentComponent data={data.strapiPost.content} />

   )
 } else if (subscription==="paid" && !user.isLoggedIn) {
  return (<BlogPostAlertMessage message="Hi, this is a member-only blog post. Become a member to get unlimited access and discover more of ours services."/>)
 } else if (subscription==="paid" && user.isLoggedIn && user.membership==="free"){
  return (<BlogPostAlertMessage message="Hi, this is a member-only blog post. Become a member to get unlimited access and discover more of ours services."/>)
 }
 else if (subscription==="paid" && user.isLoggedIn && user.membership==="paid") {
  return (

    <PostContentComponent data={data.strapiPost.content} />
  
   )
 }
}


  function getScripts () {
 // get all script tags from content
 const re = /<script\b[^>]*>[\s\S]*?<\/script\b[^>]*>/g
 const results = setScripts(data.strapiPost.content.match(re))
 
 return results
  }
 
  // console.log('scripts', scripts)

  const isInitialMount = useRef(true);
  useEffect(() => {
    
   

    if (isInitialMount.current) {

      getScripts()
      setUpdate(true)
      isInitialMount.current = false;
    } else {
      console.log("hey not initial mount")
      //getScripts()
    }
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
                  {data.strapiPost.user.length === 1 ? (
                    <>
                      <Link 
                      to={`/author/${data.strapiPost.user[0].id}`}
                      className="hover:text-black transition duration-300 ease-in-out text-xs mr-1">
                        {data.strapiPost.user[0].username}
                      </Link>{" "}
                    </>
                  ) : data.strapiPost.user.length > 1 ? (
                    data.strapiPost.user.map((x, index) => (
                      <>
                        <Link
                         to={`/author/${x.id}`}
                          className="hover:text-black transition duration-300 ease-in-out text-xs mr-1"
                        >
                          {x.name} {x.lastname}{" "}
                          {index <
                          data.strapiPost.user.length - 1
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
                      
                      className={`bg-${cat.name} py-1 px-2 mr-1 rounded-lg text-black text-xs flex-grow `}
                    >
                      
                      {cat.name}
                    </Link>
                  )
                })}
              </ul>
            </div>
          </div>
          <span className="text-gray-600 mr-3 text-sm">
            Updated at {new Date(data.strapiPost.updated_at).toDateString()}
          </span>

          <div className="posts-content py-10">
            {data.strapiPost.featured_image && data.strapiPost.featured_image ? 
            <div className="post-featured-img  max-w-md flex justify-center center container">
              {/* <img src={data.strapiPost.featured_image.childImageSharp.fixed.src} className="text-center mb-5 center"/> */}
              <div style={{ width: '100%' }}>
              {/* <img src={data.strapiPost.featured_image.childImageSharp.fluid.src} className="text-center mb-5 center"/> */}
              <Img
            alt={data.strapiPost.title}
            key={data.strapiPost.featured_image.childImageSharp.fluid.src}
            imgStyle={{ objectFit: "contain" }}
            fluid={data.strapiPost.featured_image.childImageSharp.fluid}
            className="mb-10"
          />
          
          </div>
          </div>
            : ''}
            
              {getMembership(data.strapiPost.membership,user.isLoggedIn)}
         
              {data.strapiPost.calendly ? <section className="posts-container mx-auto calendly">
             <InlineWidget url="https://calendly.com/platformable" />
             </section> : ''}
          </div>

          {/* end of all posts */}

          {/* AUTHOR CARD */}

        </section>



    
        

        <section className="posts-container mx-auto">
          <div
            className={`grid grid-cols-1 sm:grid-cols-${data.strapiPost.user.length} md:grid-cols-${data.strapiPost.user.length} xl:grid-cols-${data.strapiPost.user.length} gap-4 my-5`}
          >
            {data.strapiPost.user.map((user, index) => {
              return (
                <Link
                to= {`/author/${user.id}`}
                  key={index}
                  className="bg-purple-50 flex flex-col items-center justify-center p-4 shadow rounded-lg"
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
                </Link>
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
  query MyPost($slug: String) {
    strapiPost(slug: { eq: $slug }) {
      categories {
        name
      }
      membership
      content
      id
      title
      user {
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
      calendly
    }
  }
`
