import React from 'react'
import {Link, navigate} from 'gatsby'
import successImg from '../images/successImg.png';


export const RegistrationSuccess = () => {

    const handleSuccess = () => {
        navigate("/login")
    }
    return (
        <div className="container mx-auto ">
      <div className="grid md:grid-cols-6 md:gap-4 grid-cols-1 md:gap-2 px-5 justify-center items-center h-screen  ">
        <div className="col-start-3 col-span-2  rounded-xl  px-10 py-10">
            <h3 className="text-3xl text-center font-black">Registration Completed!</h3>
          <img
            src={successImg}
            className="my-10"
          />

    
          <div className="flex items-center justify-center">
            <button
              className="bg-russian-violet-dark text-white  hover:russian-violet-light font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleSuccess}
            >

       Go to login page! 
            </button>

           
          </div>
        </div>
      </div>
    </div>
    )
}


export default RegistrationSuccess;