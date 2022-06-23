import React, { Component } from 'react';
import Bg_img from '../Components/home/header/bg_img/bg_img';
import Trailer from '../Components/home/header/trailer/trailer';
import Footer from './HomePage/footer';

class Pages extends Component {

  render() {
    return (
        <>
          <div className="flex justify-center ">
            <div className='w-full h-full flex justify-center items-center'>
              <Bg_img />
            </div>
          </div>

          <div className="flex">
            <div className="w-44 xl:block hidden"></div>
            <Trailer />
          </div>

          <Footer />
        </>
    )
  }
}

export default Pages ;