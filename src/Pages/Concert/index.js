import React, { Component } from 'react'
import concert from "../../images/pagesPoster/concert.png"
import nuuhJil2 from "../../images/pagesPoster/nuuhjil2.png"

class Concert extends Component {
  render() {
    return (
      <>
          <div className="w-full flex flex-col justify-center items-center mt-8">
          <div className='w-full flex flex-col justify-center items-center text-center mt-4'>
            <img className='w-full xl:h-64 md:h-44 sm:h-32 h-full' src={concert} alt=""/>
            <p className='xl:text-3xl md:text-2xl sm:text-xl text-sm font-bold text-center absolute mr-32 text-white'>БАГТАЙ ТОГЛОЛТ</p>
          </div>

          <div className="w-full flex justify-center items-center sm:px-0 px-5">
            <div className="w-44 xl:block hidden"></div>
            <div className='w-full h-96 mt-16 rounded-3xl relative md:px-16 px-6 py-9'>

              <div className="md:h-60 sm:h-56 h-40 absolute left-0 bottom-0">
                <img className="h-full" src={nuuhJil2} alt=""/>
              </div>

            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Concert;