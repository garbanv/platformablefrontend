import React from "react"
import Layout from "../components/layout"
import AboutTeamComponent from '../components/AboutTeamComponent'
import Img from 'gatsby-image'
import SEO from "../components/seo"
import {BiCheckShield} from 'react-icons/Bi'

export default function about({data}) {

  return (
    <Layout>
      <SEO title="About"/>
      <div className="posts-container mx-auto my-10 px-5">
        <section>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <h3 className="text-2xl md:text-4xl font-black mt-5 md:mt-10 md:mt-32 mb-5 md:mb-20">
                We build platforms and ecosystems that allow users to
                participate and co-create
                {data.strapiAbout.heroTitle}
              </h3>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="ae41f8f6-95ed-4208-8916-9cfd619440f6"
                data-name="Layer 1"
                width="836.94851"
                height="413"
                viewBox="0 0 836.94851 413"
                class="injected-svg modal__media modal__lg_media"
                data-src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Segment_re_a3e7.svg"
              >
                <path
                  d="M463.72727,598.09686l-9.56074-4.02569-6.55863-47.92811H360.268l-7.10907,47.73229-8.55359,4.27674A2.0312,2.0312,0,0,0,345.51377,602H462.9393A2.03109,2.03109,0,0,0,463.72727,598.09686Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#e6e6e6"
                ></path>
                <path
                  d="M593.92671,550.71317h-378.962a33.0063,33.0063,0,0,1-32.93119-33.00637v-34.022H626.8579v34.022A33.00622,33.00622,0,0,1,593.92671,550.71317Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#ccc"
                ></path>
                <path
                  d="M627.36569,511.61331H181.52575V276.50637A33.04387,33.04387,0,0,1,214.53212,243.5h379.8272a33.04379,33.04379,0,0,1,33.00637,33.00637Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#e6e6e6"
                ></path>
                <path
                  d="M591.82036,492.82507H217.07107A16.776,16.776,0,0,1,200.314,476.068V279.04533a16.776,16.776,0,0,1,16.75708-16.75709H591.82036a16.77606,16.77606,0,0,1,16.75709,16.75709V476.068A16.776,16.776,0,0,1,591.82036,492.82507Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#fff"
                ></path>
                <path
                  d="M427.10255,362.869q0,.04774.00306.09549a64.14452,64.14452,0,0,0,128.03071-.00007,1.46335,1.46335,0,0,0-.39627-1.10311,1.448,1.448,0,0,0-1.06556-.46115l-125.10684.00007a1.46846,1.46846,0,0,0-1.4651,1.46877Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#3f3d56"
                ></path>
                <path
                  d="M533.87038,311.36286a1.88883,1.88883,0,0,1-.55135,1.332l-43.55736,43.55742a1.86848,1.86848,0,0,1-1.32981.55094l-59.86422,0a1.86186,1.86186,0,0,1-1.3698-.593,1.8904,1.8904,0,0,1-.50932-1.41531,64.564,64.564,0,0,1,106.52685-44.85971,1.89091,1.89091,0,0,1,.65379,1.35776Q533.87038,311.328,533.87038,311.36286Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#e6e6e6"
                ></path>
                <path
                  d="M718.69085,485.24783a1.89628,1.89628,0,0,1-1.26007.59186,1.86322,1.86322,0,0,1-1.40558-.50716l-39.33883-37.012a1.8806,1.8806,0,0,1,1.2312-3.24925l53.72819-1.63741a1.88455,1.88455,0,0,1,1.94039,1.92255,64.6996,64.6996,0,0,1-14.818,39.80385C718.74337,485.19022,718.71742,485.21959,718.69085,485.24783Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#1b014c"
                ></path>
                <path
                  d="M468.80016,448.70778A11.521,11.521,0,1,1,457.398,437.06922,11.53409,11.53409,0,0,1,468.80016,448.70778Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#1b014c"
                ></path>
                <path
                  d="M501.71552,449.04545a11.521,11.521,0,1,1-11.40219-11.63856A11.53409,11.53409,0,0,1,501.71552,449.04545Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#3f3d56"
                ></path>
                <path
                  d="M534.63088,449.38313a11.521,11.521,0,1,1-11.40219-11.63857A11.53411,11.53411,0,0,1,534.63088,449.38313Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#e6e6e6"
                ></path>
                <path
                  d="M367.8449,324.91349l-105.70262-1.08442a7.83978,7.83978,0,1,0-.16085,15.67873l105.70262,1.08442a7.83978,7.83978,0,1,0,.16085-15.67873Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#e6e6e6"
                ></path>
                <path
                  d="M367.40541,367.752,261.7028,366.66762a7.83413,7.83413,0,0,0-3.37312,14.9489,7.73546,7.73546,0,0,0,3.21227.72983l105.70261,1.08441a7.83978,7.83978,0,1,0,.16085-15.67872Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#e6e6e6"
                ></path>
                <path
                  d="M366.96592,410.59059l-105.70261-1.08442a7.83978,7.83978,0,1,0-.16085,15.67873l105.70261,1.08441a7.83978,7.83978,0,1,0,.16085-15.67872Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#e6e6e6"
                ></path>
                <path
                  d="M337.76439,324.60489l-75.62211-.77582a7.83978,7.83978,0,1,0-.16085,15.67873l74.04643.75965a8.92535,8.92535,0,0,0,1.73653-15.66256Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#1b014c"
                ></path>
                <path
                  d="M302.40071,367.08515l-40.69791-.41753a7.83413,7.83413,0,0,0-3.37312,14.9489L295.71016,382a8.92946,8.92946,0,0,0,9.01746-8.83452A8.74507,8.74507,0,0,0,302.40071,367.08515Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#1b014c"
                ></path>
                <path
                  d="M359.06808,410.50956l-97.80477-1.00339a7.83978,7.83978,0,1,0-.16085,15.67873l98.435,1.00985a8.906,8.906,0,0,0-.46942-15.68519Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#1b014c"
                ></path>
                <polygon
                  points="586.148 401.231 574.716 401.23 569.279 357.134 586.152 357.135 586.148 401.231"
                  fill="#a0616a"
                ></polygon>
                <path
                  d="M566.54992,397.96333h22.04781a0,0,0,0,1,0,0v13.88195a0,0,0,0,1,0,0H552.668a0,0,0,0,1,0,0v0A13.88193,13.88193,0,0,1,566.54992,397.96333Z"
                  fill="#2f2e41"
                ></path>
                <polygon
                  points="706.929 392.683 695.88 395.619 679.296 354.4 695.603 350.066 706.929 392.683"
                  fill="#a0616a"
                ></polygon>
                <path
                  d="M870.32045,636.77807h22.04781a0,0,0,0,1,0,0V650.66a0,0,0,0,1,0,0H856.43852a0,0,0,0,1,0,0v0A13.88193,13.88193,0,0,1,870.32045,636.77807Z"
                  transform="translate(-317.52376 2.67093) rotate(-14.88235)"
                  fill="#2f2e41"
                ></path>
                <circle
                  cx="634.96479"
                  cy="55.60454"
                  r="24.56103"
                  fill="#a0616a"
                ></circle>
                <path
                  d="M864.19435,626.01318l-35.85889-71.22509-33.61719-77.0918-16.0979,65.8999-2.46362,78.34766a4.47331,4.47331,0,0,1-3.977,4.3291c-8.39722.98144-22.59741,1.83789-23.36011-3.45117-10.47851-72.62989-8.938-113.92432-5.80029-135.77637,3.417-23.79785,9.28369-30.27637,9.53174-30.54053l.167-.17773,87.43872,7.9956.3335.03077,23.49707,76.17431,28.06592,76.876a4.50044,4.50044,0,0,1-3.10669,5.90137l-19.61206,5.043a4.44755,4.44755,0,0,1-1.106.13965A4.53124,4.53124,0,0,1,864.19435,626.01318Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#2f2e41"
                ></path>
                <path
                  d="M869.68214,458.15479l-10.687-64.12391,2.6333-15.87622a66.04492,66.04492,0,0,0-5.75879-39.68866h0l-14.75976,69.977,18.86963,52.56452a9.99728,9.99728,0,1,0,9.70263-2.85272Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#a0616a"
                ></path>
                <path
                  d="M762.69728,394.45959l-31.98145,56.59748a10.00516,10.00516,0,1,0,8.14112,6.00024L774.57179,414.121,784.645,343.31744a66.04716,66.04716,0,0,0-18.99072,35.32306Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#a0616a"
                ></path>
                <path
                  d="M834.79,471.07568l-79.76172-8.71a7.07338,7.07338,0,0,1-5.71582-9.86035l13.56763-31.09668a116.90426,116.90426,0,0,0,8.08325-27.07129l1.42383-8.34912a73.73859,73.73859,0,0,0,.39624-20.75586,37.47147,37.47147,0,0,1,.46655-10.58008,18.43624,18.43624,0,0,1,13.55371-14.644l14.52539-3.75684.39673-1.083a5.11775,5.11775,0,0,1,4.64624-3.36524,4.93968,4.93968,0,0,1,2.12867.38233l6.81982,2.80078,14.90259-7.25a5.60316,5.60316,0,0,1,1.50757-.48487h0a5.60062,5.60062,0,0,1,6.24243,3.66456l.1521.43066,13.35132.15625a12.46136,12.46136,0,0,1,12.228,11.083l.9812,8.89795-17.81811,57.45849a108.76694,108.76694,0,0,0-3.53638,48.87061l.582,3.6958a8.32332,8.32332,0,0,1-8.20019,9.61719A8.51828,8.51828,0,0,1,834.79,471.07568Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#3f3d56"
                ></path>
                <path
                  d="M851.10084,345.95068l8.93531-1.30761,2.72558,3.1997a10.03693,10.03693,0,0,1,2.3772,6.06641l1.27368,30.72656a9.887,9.887,0,0,1-4.25952,8.57178l-26.03345,18.0791Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#3f3d56"
                ></path>
                <path
                  d="M763.39308,392.03174a9.88732,9.88732,0,0,1-1.45166-9.46192l10.5564-28.88427a10.037,10.037,0,0,1,4.10937-5.05567l3.56958-2.21924,8.1145,3.96241-5.595,66.79736Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#3f3d56"
                ></path>
                <path
                  d="M825.63672,289.00951c-6.85929,6.20847-16.64211,9.78771-25.56733,7.35146s-15.93411-11.96346-13.79469-20.96445,14.79352-14.08882,21.65165-7.87908c12.39265-9.80134,32.32-8.108,42.88114,3.64395s10.12392,31.74634-.94075,43.0254c-6.53728,6.664-18.79321,6.30523-24.92953-.72968S820.11,294.23112,825.63672,289.00951Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#2f2e41"
                ></path>
                <path
                  d="M1017.47425,656.5h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#ccc"
                ></path>
                <path
                  d="M597.47425,602.5h-381a1,1,0,1,1,0-2h381a1,1,0,0,1,0,2Z"
                  transform="translate(-181.52575 -243.5)"
                  fill="#ccc"
                ></path>
              </svg>
            </div>
          </div>

          <div className="py-10">
            <h3 className="text-2xl md:text-4xl font-black text-center">Key Work Areas</h3>
            <p className="text-center text-2xl font-black">We focus on the following areas:</p>
            <ul>
              <li className="text-center text-2xl "><span className="text-2xl font-black">{`> `}</span>Digital Government</li>
              <li className="text-center text-2xl "><span className="text-2xl font-black">{`> `}</span>Open Banking</li>
              <li className="text-center text-2xl "><span className="text-2xl font-black">{`> `}</span>Sustainable Food Systems (Q3 2020)</li>
              <li className="text-center text-2xl "><span className="text-2xl font-black">{`> `}</span>Public Health (Q4 2020)</li>
              <li className="text-center text-2xl "><span className="text-2xl font-black">{`> `}</span>Climate Crisis (Q4 2020)</li>
              
            </ul>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">

          </div>
          </div>
        </section>

        
      </div>
      {/*end of container */}
      <section className="our-team bg-gray-50 py-10">
      <h3 className="text-5xl font-black text-center mb-5 mt-20">Platformable's Team</h3>
          <div class="posts-container mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-3">

            
            {/* {console.log(data.strapiAbout)} */}
            {data.strapiAbout.Author.map((user,index)=>{
                    return(
                      user.users_permissions_users.map((x,ind) =>{
                       console.log(x)
                       return (
              

            <div key={ind} class=" pt-5 rounded overflow-hidden border-b-4 border-russian-violet-dark bg-gray-50 w-1/1">
        <img
          src={x.image.childImageSharp.fluid.src}
          alt="Platformable team"
          class="w-full object-contain h-32 sm:h-48 md:h-64 my-0"
        /> 
        <div class="p-4 md:p-6">
          <h3 class="font-semibold mb-2 text-center text-xl leading-tight sm:leading-normal">
            {`${x.name} ${x.lastname}`}
          </h3>
          <p className="text-center text-xs">{x.position}</p>
          <div class="text-sm">
            <p class="leading-none text-sm" dangerouslySetInnerHTML={{ __html: x.bio}}></p>
          </div>
        </div>
      </div>
                        )
                      })
                      )
            })}           
          </div>
        </section>


        <section className="about-cta bg-russian-violet-dark py-40">
        <h3 className="font-black text-center text-white text-4xl">Have an idea in mind?</h3>
        <div className="text-center my-5">
        <button className="bg-red-orange-dark rounded-md px-10 py-2 text-center text-white">LET'S TALK!</button>
        </div>
        
        </section>
    </Layout>
  )
}


export const query = graphql`
query MyAbout {
  strapiAbout {
    heroText
    Author {
      id
      users_permissions_users {
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
  }
}
`