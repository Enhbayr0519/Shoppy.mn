import React, { useState } from 'react';
import { HomeOutlined } from '@ant-design/icons';
import ZuuzuTxt from "../../../../../images/home/header/txt.png";
import { useNavigate } from "react-router-dom"

const Mobile_menu = props => {


    const navigate = useNavigate();

    return (
        <>
            {
                props.hide === false ? (
                    <div className=''>
                        <div className='md:hidden block text-2xl absolute z-0 top-2'> 
                            <HomeOutlined  onClick={() => props.closeHide()}/>
                        </div>
                    </div>
                ) : (
                    <div className='md:hidden block flex fixed top-0 z-50 font-semibold font-mono'>
                        <div className='fixed top-0 left-0 md:flex gap-8 w-56 h-screen bg-white shadow-2xl shadow-gray-900 rounded-r-3xl z-50 text-lg p-4'>
                            <div className='w-36 cursor-pointer'>
                                <img src={ZuuzuTxt} alt=""/>
                            </div>
                            
                            <div className='flex flex-col gap-4 justify-between  mt-7'>
                                
                                <div className='cursor-pointer' onClick={() => {
                                    navigate('/')
                                    }}>Танилцуулга
                                </div>

                                <div className='cursor-pointer' onClick={() => {
                                    navigate('/birth')
                                    }}>Birthday clip
                                </div>

                                <div className='cursor-pointer' onClick={() => {
                                    navigate('/concert')
                                    }}>Багтай тоглолт
                                </div>

                                <div className='cursor-pointer'>Zuuzuu app</div>
                                <div className='cursor-pointer'>Zuuzuu shop</div>
                                <div className='cursor-pointer'>Түгээмэл асуулт</div>
                                <div className='cursor-pointer'>Бидэнтэй холбогдох</div>
                            </div>
                        </div>
                        <div 
                            className='w-screen h-screen cursor-pointer' 
                            style={{backgroundColor: "#ffffff90"}} 
                            onClick={() => props.showHide()} >
                       </div>
                    </div>
                )
            }
        </>
    )
}

export default Mobile_menu ;