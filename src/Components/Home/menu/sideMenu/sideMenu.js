import React from 'react';
import zuuzuu_txt from "../../../../Images/Home/zuuzuu_txt.png";
import zuuzuu1 from "../../../../Images/Home/zuuzuu 1.png";
import Гуригури1 from "../../../../Images/Home/Гуригури 1.png";
import Дирдир1 from "../../../../Images/Home/Дирдир 1.png";
import Өвөв1 from "../../../../Images/Home/Өвөв гиф 1.png";
import Тортор1 from "../../../../Images/Home/Тортор 1.png";


const Side_menu = () => {
 

   return (
       <>
        <div className='w-40 min-h-screen flex gap-4 flex-col jsutify-between items-center bg-white shadow-2xl shadow-gray-900 rounded-r-3xl'>
          <div className='w-32 mt-5 cursor-pointer'>
              <img src={zuuzuu_txt} alt=""/>
          </div>
          
          <div className='flex justify-center items-center w-32  h-32 rounded-full bg-zinc-100 shadow-rose-200 shadow-inner cursor-pointer'>
            <img className='h-full' src={zuuzuu1} alt="" />
          </div>

          <div className='flex justify-center items-center w-32  h-32 rounded-full bg-zinc-100 shadow-rose-200 shadow-inner cursor-pointer'>
            <img className='h-full' src={Гуригури1} alt="" />
          </div>

          <div className='flex justify-center items-center w-32  h-32 rounded-full bg-zinc-100 shadow-rose-200 shadow-inner cursor-pointer'>
            <img className='h-full' src={Дирдир1} alt="" />
          </div>

          <div className='flex justify-center items-center w-32  h-32 rounded-full bg-zinc-100 shadow-rose-200 shadow-inner overflow-hidden cursor-pointer'>
            <img className='h-full' src={Өвөв1} alt="" />
          </div>

          <div className='flex justify-center items-center w-32  h-32 rounded-full bg-zinc-100 shadow-rose-200 shadow-inner cursor-pointer'>
            <img className='h-full' src={Тортор1} alt="" />
          </div>
        </div>
       </>
   )
}

export default Side_menu ;