import React from 'react';
import fb from "../../../../Images/Home/fb.png";
import ig from "../../../../Images/Home/ig.png";
import tictok from "../../../../Images/Home/tictok.png";
import youtube from "../../../../Images/Home/youtube.png";

const Social_ikon_menu = () => {

    return (
        <div className=' w-14 fixed right-4 flex gap-4 flex-col items-center bg-white  rounded-2xl py-5 bottom-20 z-50 shadow-inner shadow-2xl shadow-gray-400 z-50'>
          <div className='rounded-full bg-zinc-100 cursor-pointer'>
            <img className='h-full' src={fb} alt="" />
          </div>

          <div className='rounded-full cursor-pointer'>
            <img className='h-full' src={fb} alt="" />
          </div>

          <div className='rounded-full cursor-pointer'>
            <img className='h-full' src={ig} alt="" />
          </div>

          <div className='rounded-full cursor-pointer'>
            <img className='h-full' src={ig} alt="" />
          </div>

          <div className='rounded-full cursor-pointer'>
            <img className='h-full' src={tictok} alt="" />
          </div>

          <div className='rounded-full shadow-rose-200 shadow-inner cursor-pointer overflow-hidden'>
            <img className='h-full' src={youtube} alt="" />
          </div>
        </div>
    )
}

export default Social_ikon_menu ;