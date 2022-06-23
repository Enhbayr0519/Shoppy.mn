import React from 'react';
import fb from "../../../../../images/home/header/social_ikons/fb.png";
import ig from "../../../../../images/home/header/social_ikons/ig.png";
import tictok from "../../../../../images/home/header/social_ikons/tictok.png";
import youtube from "../../../../../images/home/header/social_ikons/youtube.png";

const Social_ikons = () => {

    return (
        <div className=' w-14 fixed right-4 flex gap-4 flex-col items-center bg-white  rounded-2xl py-5 bottom-20 z-50'>
          <div className='flex justify-center items-center rounded-full bg-zinc-100 shadow-rose-200 shadow-inner cursor-pointer'>
            <img className='h-full' src={fb} alt="" />
          </div>

          <div className='flex justify-center items-center rounded-full bg-zinc-100 shadow-rose-200 shadow-inner cursor-pointer'>
            <img className='h-full' src={fb} alt="" />
          </div>

          <div className='flex justify-center items-center rounded-full bg-zinc-100 shadow-rose-200 shadow-inner cursor-pointer'>
            <img className='h-full' src={ig} alt="" />
          </div>

          <div className='flex justify-center items-center rounded-full bg-zinc-100 shadow-rose-200 shadow-inner cursor-pointer'>
            <img className='h-full' src={ig} alt="" />
          </div>

          <div className='flex justify-center items-center rounded-full bg-zinc-100 shadow-rose-200 shadow-inner cursor-pointer'>
            <img className='h-full' src={tictok} alt="" />
          </div>

          <div className='flex justify-center items-center rounded-full bg-zinc-100 shadow-rose-200 shadow-inner cursor-pointer overflow-hidden'>
            <img className='h-full' src={youtube} alt="" />
          </div>
        </div>
    )
}

export default Social_ikons ;