import React, { Component } from 'react'
import contact from "../../images/pagesPoster/contact.png"
import zuuzu from "../../images/contact/contact_zuuzuu.png"
import tortor from "../../images/contact/contact_tortor.png"

class Contact extends Component {
  render() {
    return (
      <>
        <div className="w-full flex flex-col justify-center items-center mt-6">
          <div className='w-full flex flex-col justify-center items-center text-center mt-4'>
            <img className='w-full xl:h-64 md:h-44 sm:h-32 h-full' src={contact} alt=""/>
            <p className='xl:text-3xl md:text-2xl sm:text-xl text-sm font-bold text-center absolute ml-32 text-white'>ZUUZUU APP</p>
          </div>

          <div className='w-full flex my-10 mt-20'>
            <div className="w-44 xl:block hidden"></div>
            <div className="w-full relative flex justify-center items-center sm:px-0 px-5">
              
              <div className='h-full md:flex justify-center gap-6  rounded-3xl px-6 py-9'>
                <div className='lg:w-72 md:w-52 sm:w-72 w-60 h-80 shadow-2xl rounded-md'></div>
                <div className='lg:w-72 md:w-52 sm:w-72 w-60 h-80 shadow-2xl rounded-md md:mt-0 mt-10'></div>
                <div className='lg:w-72 md:w-52 sm:w-72 w-60 h-80 shadow-2xl rounded-md md:mt-0 mt-10'></div>
              </div>

              {/* <div className='w-full h-full absolute flex '>
                <img className='h-80 absolute left-20 bottom-0' src={zuuzu} alt=""/>
                <img className='h-80 absolute bottom-36 right-0 z-0 bg-0' src={tortor} alt=""/>
              </div> */}
          </div>
          </div>
        </div>
      </>
    )
  }
}

export default Contact;