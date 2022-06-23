import React, { Component } from 'react'
import zuuzuuApp from "../../images/pagesPoster/Zuuzuu_app.png"
import poster from "../../images/pagesPoster/poster.png"
import { AppleOutlined, AppstoreOutlined } from '@ant-design/icons';

class App extends Component {
  render() {
    return (
      <>
        <div className="w-full flex flex-col justify-center items-center mt-8">
          <div className='w-full flex flex-col justify-center items-center text-center mt-4'>
            <img className='w-full xl:h-64 md:h-44 sm:h-32 h-full' src={zuuzuuApp} alt=""/>
            <p className='xl:text-3xl md:text-2xl sm:text-xl text-sm font-bold text-center absolute mr-32 text-white'>ZUUZUU APP</p>
          </div>

          <div className="w-full flex justify-center items-center sm:px-0 px-5">
            <div className="w-44 xl:block hidden"></div>

            <div className='sm:w-4/5 w-full md:flex lg:gap-10 gap-5 items-center my-28 rounded-3xl lg:px-14 md:px-8 px-5 lg:py-9 md:py-5 py-7' style={{background: '#f6f6f6'}}>
              <div className='xl:w-40 md:w-40 sm:w-40 w-40 xl:h-40 md:h-32 sm:h-30 h-40 m-auto'>
                <img className='w-full h-full m-auto' src={poster} alt=""/>
              </div>
              <div className='flex flex-col lg:gap-5 md:gap-2 md:mt-0 mt-4 md:text-justify text-center'>
                <p className='xl:text-3xl lg:text-xl md:text-lg text-sm font-bold ' style={{color: '#993EFD'}}>
                  Mobile Apps for iOS and Android
                </p>

                <p className='text-xs font-bold'>
                  "Zuuzuu's Friends" created by "Amjilt Animation LLC" is a 3D animation and you can find cartoons, fairy tales, quick expressions, proverbs, songs etc...
                </p>
                  <div className=" flex gap-3 mt-5 text-zinc-700 md:mx-0 m-auto">
                      <div className="md:w-36 w-28 md:h-12 h-10 rounded-lg flex justify-evenly items-center cursor-pointer bg-white">
                          <AppleOutlined className='md:text-3xl text-xl mb-2'/>
                          <div className='flex flex-col text-xs '>
                              Download
                              <span className='font-semibold md:text-base text-sm'>
                                  App Store
                              </span>
                          </div>
                      </div>
                      
                      <div className="md:w-36 w-28 md:h-12 h-10 bg-white rounded-lg flex justify-evenly items-center cursor-pointer bg-white">
                          <AppstoreOutlined className='text-3xl mb-2'/>
                          <div className='flex flex-col text-xs '>
                              Download
                              <span className='font-semibold md:text-base text-sm'>
                                  App Store
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </>
    )
  }
}

export default App;