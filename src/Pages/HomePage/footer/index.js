import React, { Component } from 'react';
import Footer_item from '../../../Components/home/footer/footer/footer ';
import Naadgai from '../../../Components/home/footer/naadgai/naadgai';
import Suvag from '../../../Components/home/footer/suvag/suvag';

class Footer extends Component {
    
  render() {
    return (
      <>
        <div className='flex'>
            <div className="w-40 xl:block hidden"></div>
            <Suvag />
        </div>
        <div className='flex'>
            <div className="w-44 xl:block hidden"></div>
            <Naadgai />
        </div>
      </>
    )
  }
}

export default Footer;