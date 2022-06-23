 import React from 'react';
 import ZuuzuTxt from "../../../../../images/home/header/txt.png";
 import Zuuzuu from "../../../../../images/home/header/heroes/zuuzuu 1.png";
 import GuriGuri from "../../../../../images/home/header/heroes/Гуригури 1.png";
 import DirDir from "../../../../../images/home/header/heroes/Дирдир 1.png";
 import OwOw from "../../../../../images/home/header/heroes/Өвөв гиф 1.png";
 import TorTor from "../../../../../images/home/header/heroes/Тортор 1.png";
 import { BrowserRouter as Router, useNavigate } from "react-router-dom"
 
 
const Side_menu = props => {
  
  const navigate = useNavigate();

    return (
        <div className='fixed top-0 flex gap-4 flex-col items-center w-40 h-screen bg-white shadow-2xl shadow-gray-900 rounded-r-3xl z-50'>
          <div className='w-32 mt-5 cursor-pointer'>
              <img src={ZuuzuTxt} alt=""/>
          </div>
          
          <div className='flex justify-center items-center w-32  h-32 rounded-full bg-zinc-100 shadow-rose-200 shadow-inner cursor-pointer' 
              onClick={() => {
                navigate('/zuuzuu');
              }}>
            <img className='h-full' src={Zuuzuu} alt="" />
          </div>

          <div className='flex justify-center items-center w-32  h-32 rounded-full bg-zinc-100 shadow-rose-200 shadow-inner cursor-pointer'
              onClick={() => {
                navigate('/guriguri');
              }}>
            <img className='h-full' src={GuriGuri} alt="" />
          </div>

          <div className='flex justify-center items-center w-32  h-32 rounded-full bg-zinc-100 shadow-rose-200 shadow-inner cursor-pointer'
              onClick={() => {
                navigate('/dirdir');
              }}>
            <img className='h-full' src={DirDir} alt="" />
          </div>

          <div className='flex justify-center items-center w-32  h-32 rounded-full bg-zinc-100 shadow-rose-200 shadow-inner overflow-hidden cursor-pointer'
              onClick={() => {
                navigate('/owow');
              }}>
            <img className='h-full' src={OwOw} alt="" />
          </div>

          <div className='flex justify-center items-center w-32  h-32 rounded-full bg-zinc-100 shadow-rose-200 shadow-inner cursor-pointer'
              onClick={() => {
                navigate('/tortor');
              }}>
            <img className='h-full' src={TorTor} alt="" />
          </div>
        </div>
    )
}

export default Side_menu ;