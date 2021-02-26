import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <section className="posts-container mx-auto all-blog-content sm:my-20 px-5">
      <h3 className="text-5xl font-black mb-1">
        Tools and models to measure Open Banking Value
      </h3>
      <div class="author flex items-center -ml-3 my-1">
        <div class="user-logo">
          <img
            class="w-12 h-12 object-cover rounded-full mx-4  shadow"
            src="https://platformable.com/content/images/2020/03/headshot-profile.png"
            alt="avatar"
          />
        </div>
        <h2 class="text-sm tracking-tighter text-gray-900">
          <a href="#" class="mr-3">
            By Mark Boyd
          </a>{" "}
          <span class="text-gray-600 mr-3">20 Jan 2021.</span>
        </h2>
        <div>
          <ul className="flex">
            <li className="bg-red-orange-dark rounded-md px-4  text-sm ml-1 text-white">
              Banks
            </li>
            <li className="bg-blue-500 rounded-md px-4  text-sm ml-1 text-white">
              Health
            </li>
            <li className="bg-red-orange-dark rounded-md px-4  text-sm ml-1 text-white">
              Banks
            </li>
            <li className="bg-blue-500 rounded-md px-4  text-sm ml-1 text-white">
              Health
            </li>
          </ul>
        </div>
      </div>
      <div className="all-posts">
        <img
          class=""
          src="https://platformable.com/content/images/2021/01/mandy-choi-_qZ0us4az20-unsplash.jpg"
          alt=""
        />

        <div class="author flex items-center -ml-3 my-1">
          <div class="user-logo">
            <img
              class="w-12 h-12 object-cover rounded-full mx-4  shadow"
              src="https://platformable.com/content/images/2020/03/headshot-profile.png"
              alt="avatar"
            />
          </div>
          <h2 class="text-sm tracking-tighter text-gray-900">
            <a href="#" class="mr-3">
              By Mark Boyd
            </a>{" "}
            <span class="text-gray-600 mr-3">20 Jan 2021.</span>
          </h2>
          <div>
            <ul className="flex">
              <li className="bg-red-orange-dark rounded-md px-4  text-sm ml-1 text-white">
                <small>Banks</small>
              </li>
              <li className="bg-blue-500 rounded-md px-4  text-sm ml-1 text-white">
                Health
              </li>
              <li className="bg-red-orange-dark rounded-md px-4  text-sm ml-1 text-white">
                Banks
              </li>
              <li className="bg-blue-500 rounded-md px-4  text-sm ml-1 text-white">
                Health
              </li>
            </ul>
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
          felis dui. Sed a sem id nunc posuere porta vel sed magna. Pellentesque
          tristique posuere magna. Duis venenatis sem tortor, vitae posuere
          lorem eleifend eu. Donec imperdiet enim sed convallis porttitor. Duis
          vel tortor augue. Integer in nunc et lorem rhoncus aliquet. Fusce ac
          accumsan neque. Morbi commodo blandit nisl id dictum. Mauris posuere
          venenatis felis, et lobortis quam imperdiet a. Sed commodo felis a
          tincidunt lacinia. Ut maximus dapibus felis sed eleifend. Nunc vel
          mauris bibendum lorem pretium sagittis vitae ac eros. Maecenas rutrum
          placerat est ac ullamcorper.
        </p>

        <p>
          Sed varius elementum arcu non tempor. Proin sagittis viverra purus, at
          ultrices ex placerat id. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Aenean ac placerat enim.
          Curabitur pharetra ultrices suscipit. Sed leo elit, pharetra at ornare
          sit amet, laoreet a nisl. Cras malesuada consequat erat, ut accumsan
          erat tempor nec. Nam semper at lectus eu malesuada. Aliquam dictum
          tristique justo vitae convallis.
        </p>

        <p>
          Vestibulum vel ex eu elit blandit vulputate. Aenean gravida ipsum non
          tortor sagittis, a dapibus dui ultricies. Nulla nec dignissim sapien.
          Curabitur nec quam aliquet, vulputate ligula ac, vestibulum arcu.
          Proin eget augue sit amet libero congue tempus. Mauris finibus risus
          risus, eu sollicitudin nulla viverra non. Maecenas finibus est nibh,
          quis blandit neque lobortis quis. Suspendisse laoreet nulla leo, ac
          tincidunt augue pellentesque ut.
        </p>

        <p>
          Nullam hendrerit ex quis felis gravida, et consequat nunc elementum.
          Vestibulum id leo a nibh venenatis suscipit. Nullam ac condimentum
          risus. Morbi vitae nunc feugiat, mattis lacus aliquam, finibus massa.
          Pellentesque pellentesque hendrerit enim, id molestie nulla imperdiet
          et. Donec vitae finibus turpis, a rutrum purus. Donec rhoncus
          ullamcorper metus non sodales. Maecenas mattis urna eu libero sagittis
          sodales. Nulla facilisi. Quisque et finibus mi, ac vehicula lectus.
          Sed elit arcu, euismod quis rutrum id, luctus ac nunc. Vestibulum vel
          imperdiet ligula.
        </p>

        <p>
          Mauris porta mattis nibh tempus lobortis. Duis feugiat vulputate nisi
          at semper. Vivamus et tempor nisi. Sed volutpat sollicitudin purus,
          vitae vehicula est faucibus sed. Duis finibus dignissim nulla, sed
          aliquam libero mollis ac. Proin bibendum vel est eu fermentum. Nulla
          quam nulla, imperdiet consequat hendrerit ut, volutpat ut nibh. Etiam
          suscipit facilisis mauris quis rhoncus. Etiam efficitur velit at enim
          lacinia, vitae molestie eros mattis. Pellentesque imperdiet, lorem
          eget maximus imperdiet, neque magna egestas libero, a mattis enim odio
          a erat. Sed interdum mauris ut laoreet faucibus. Curabitur laoreet
          quis libero nec aliquam. Integer vehicula pharetra ipsum, quis
          tincidunt est maximus sed.
        </p>
      </div>{" "}
      {/* end of all posts */}
      <h3 className="text-2xl font-black text-center my-10">
        Read More posts by this Author{" "}
      </h3>
      <div class="flex items-center justify-center ">
        <div class="max-w-md md:max-w-2xl sm:max-w-2xl px-2 ">
          <div class="bg-gray-50 shadow-xl rounded-lg overflow-hidden md:flex sm:flex xs:flex">
            <div
              class="bg-cover bg-bottom h-56 md:h-auto md:w-56 px-5  hidden md:block"
              style={{
                backgroundImage: `url('https://platformable.com/content/images/2020/03/headshot-profile.png')`,
              }}
            ></div>
            <div>
              <div class="p-4 md:p-5">
                <p class="font-bold text-xl md:text-2xl">Mark Boyd</p>
                <p class="text-gray-700 md:text-sm">
                  Mark Boyd is the Founder of Platformable. He works as a
                  writer/analyst, primarily on the Digital Government products.
                  He is interested in using APIs to enable participation and to
                  reduce inequality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="posts-container mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 my-5">
        <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img
              src="https://platformable.com/content/images/2020/03/headshot-profile.png"
              alt=""
              class="h-full w-full my-0"
            />
          </div>

          <h2 class="mt-4 font-bold text-xl">Mark Boyd</h2>
          <h6 class="mt-2 text-sm font-medium">Founder</h6>

          <p class="text-xs text-gray-500 text-center mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
            molestiae nulla.
          </p>

          <ul class="flex flex-row mt-4 space-x-2">
            <li>
              <a
                href=""
                class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href=""
                class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href=""
                class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img
              src="https://platformable.com/content/images/2020/12/Mayara-Soares-Faira.png"
              alt=""
              class="h-full w-full my-0"
            />
          </div>

          <h2 class="mt-4 font-bold text-xl">Mark Boyd</h2>
          <h6 class="mt-2 text-sm font-medium">Founder</h6>

          <p class="text-xs text-gray-500 text-center mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
            molestiae nulla.
          </p>

          <ul class="flex flex-row mt-4 space-x-2">
            <li>
              <a
                href=""
                class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href=""
                class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href=""
                class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img
              src="https://platformable.com/content/images/2020/08/Phuong-Pham.png"
              alt=""
              class="h-full w-full my-0"
            />
          </div>

          <h2 class="mt-4 font-bold text-xl">Mark Boyd</h2>
          <h6 class="mt-2 text-sm font-medium">Founder</h6>

          <p class="text-xs text-gray-500 text-center mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
            molestiae nulla.
          </p>

          <ul class="flex flex-row mt-4 space-x-2">
            <li>
              <a
                href=""
                class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href=""
                class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href=""
                class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img
              src="https://platformable.com/content/images/2020/03/32B0CEA9-ED48-4031-B2CE-EECAC3DED622.jpg"
              alt=""
              class="h-full w-full my-0"
            />
          </div>

          <h2 class="mt-4 font-bold text-xl">Mark Boyd</h2>
          <h6 class="mt-2 text-sm font-medium">Founder</h6>

          <p class="text-xs text-gray-500 text-center mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
            molestiae nulla.
          </p>

          <ul class="flex flex-row mt-4 space-x-2">
            <li>
              <a
                href=""
                class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href=""
                class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href=""
                class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
)

export default SecondPage
