import React from "react"
import Layout from "../components/layout"
import AboutTeamComponent from '../components/AboutTeamComponent'
import Img from 'gatsby-image'
import SEO from "../components/seo"
import EmbedContainer from "react-oembed-container"
import sectionOneImg from "../assets/home/hero_squares.png"

export default function about({data}) {

  return (
    <Layout>
      <SEO title="About"/>
      <div className="posts-container mx-auto my-10 px-5">
        <section>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
            <div>
              <h3 className="text-2xl md:text-4xl font-black mt-5 md:mt-10 md:mt-32 mb-5 md:mb-20">
                {/* We build platforms and ecosystems that allow users to
                participate and co-create */}
                {data.strapiAbout.heroText}
              </h3>
            </div>

            <div>
              <img src={sectionOneImg} alt="platformable"/>
            </div>
          </div>

          {/* <div className="py-10">
            <h3 className="text-2xl md:text-4xl font-black text-center">{data.strapiAbout.key_work_title && data.strapiAbout.key_work_title ? data.strapiAbout.key_work_title : '' }</h3>
            <p className="text-center text-2xl font-black">{data.strapiAbout.key_work_subtitle ? data.strapiAbout.key_work_subtitle : ''}</p>
            <ul>
              {data.strapiAbout.key_work_areas_items ? data.strapiAbout.key_work_areas_items.map(item=> {
                         return  <li className="text-center text-2xl " key={item.id}><span className="text-2xl font-black">{`> `}</span>{item.key_item}</li>
              }) : ''}
            </ul>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">

          </div>
          </div> */}
        </section>

        
      </div>


      <section className="content">
        <div className="posts-container mx-auto my-10 px-5 about-page">
      { data.strapiAbout.content && 
        <EmbedContainer markup={data.strapiAbout.content}>
              <div
                dangerouslySetInnerHTML={{ __html: unescape(data.strapiAbout.content) }}
              />
            </EmbedContainer>
      }  
        </div>
      </section>
      {/*end of container */}
      <section className="our-team bg-gray-50 py-10">
      <h3 className="text-5xl font-black text-center mb-5 mt-20">Platformable's Team</h3>
          <div class="posts-container mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-3">

            
            {/* {console.log(data.strapiAbout)} */}
            {data.strapiAbout.Author.map((userauthor,index)=>{
                    return(
                      userauthor.user.map((x,ind) =>{
                       return (
              

            <div key={ind} className=" pt-5 rounded overflow-hidden border-b-4 border-russian-violet-dark bg-gray-50 w-1/1">
        <img
          src={x.image.childImageSharp.fluid.src}
          alt="Platformable team"
          className="w-full object-contain h-32 sm:h-48 md:h-64 my-0"
        /> 
        <div className="p-4 md:p-6">
          <h3 className="font-semibold mb-2 text-center text-xl leading-tight sm:leading-normal">
            {`${x.name} ${x.lastname}`}
          </h3>
          <p className="text-center text-xs bg-red-orange-dark text-white rounded px-1 py-1 my-5">{x.position}</p>
          <div className="text-sm">
            <p className="leading-none text-xs" dangerouslySetInnerHTML={{ __html: x.bio}}></p>
          </div>
        </div>
      </div>
                        )
                      })
                      )
            })}           
          </div>
        </section>


        {/* <section className="about-cta bg-russian-violet-dark py-40">
        <h3 className="font-black text-center text-white text-4xl">Have an idea in mind?</h3>
        <div className="text-center my-5">
        <button className="bg-red-orange-dark rounded-md px-10 py-2 text-center text-white">LET'S TALK!</button>
        </div>
        
        </section> */}
    </Layout>
  )
}


export const query = graphql`
query MyAbout {
  strapiAbout {
    heroText
    Author {
      id
      user {
        name
        lastname
        position
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bio
      }
    }
    teamTitle
    content
  }
}
`