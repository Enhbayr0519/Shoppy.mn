import React, { Component } from 'react';
import naadgai from "../../../../images/home/footer/Naadgai.png"

const Naadgai = () => {
    
    return (
        <>
            <div className='w-full h-full sm:flex justify-center items-center my-20'>
                <div className='lg:flex'>
                    <div className='flex flex-col justify-center px-2'>
                        <img src={naadgai} alt=""/>
                        <div className='flex justify-between sm:text-sm text-xs px-2' style={{color: "#8E8E8E"}}>
                            <p>Amjilt Animation Studio</p>
                            <p>Mar 29, 2022</p>
                        </div>
                        <p className="font-bold text-xl px-2" style={{color: '#993EFD'}}>Мөнгө</p>
                    </div>

                    <div className='lg:mt-0 mt-4 flex flex-col justify-center px-2'>
                        <img src={naadgai} alt=""/>
                        <div className='flex justify-between sm:text-sm text-xs px-2' style={{color: "#8E8E8E"}}>
                            <p>Amjilt Animation Studio</p>
                            <p>Mar 29, 2022</p>
                        </div>
                        <p className="font-bold text-xl px-2" style={{color: '#993EFD'}}>Мөнгө</p>
                    </div>
                </div>

                <div className='lg:flex'>
                    <div className='flex flex-col justify-center px-2'>
                        <img src={naadgai} alt=""/>
                        <div className='flex justify-between sm:text-sm text-xs px-2' style={{color: "#8E8E8E"}}>
                            <p>Amjilt Animation Studio</p>
                            <p>Mar 29, 2022</p>
                        </div>
                        <p className="font-bold text-xl px-2" style={{color: '#993EFD'}}>Мөнгө</p>
                    </div>

                    <div className='lg:mt-0 mt-4 flex flex-col justify-center px-2'>
                        <img src={naadgai} alt=""/>
                        <div className='flex justify-between sm:text-sm text-xs px-2' style={{color: "#8E8E8E"}}>
                            <p>Amjilt Animation Studio</p>
                            <p>Mar 29, 2022</p>
                        </div>
                        <p className="font-bold text-xl px-2" style={{color: '#993EFD'}}>Мөнгө</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Naadgai;