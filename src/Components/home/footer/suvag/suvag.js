import React, { Component } from 'react';
import { CaretDownOutlined } from "@ant-design/icons";
import Logo from "../../../../images/home/footer/TV_Logo.png"

class Suvag extends Component {
    
  render() {
    return (
      <>
        <div className='w-full h-full bg-white mt-10 flex flex-col justify-center items-center mx-0'>
            <p className='text-center text-xl font-bold mt-10 my-10'>TB үзвэрийн цаг</p>
            <div className='xl:w-3/4 lg:w-4/5 w-full md:flex md:gap-5 gap-3 justify-between items-center lg:m-auto lg:px-0 px-5 mt-5'>
                <div className="m-auto md:mt-0 mt-3 lg:w-80 w-64 lg:h-20 h-16 bg-white rounded-full overflow-hidden flex justify-around items-center text-2xl" style={{color: "#993EFD", border: '4px solid #993EFD'}}>
                    <img className="h-full" src={Logo} alt=""/>
                    <CaretDownOutlined  className='cursor-pointer'/>
                </div>

                <div className="m-auto md:mt-0 mt-3 lg:w-60 md:w-52 w-56 lg:h-20 h-16 bg-white rounded-full overflow-hidden flex justify-around items-center lg:text-2xl text-xl px-2" style={{color: "#993EFD", border: '4px solid #993EFD'}}>
                    <p className="font-bold">Бүгд</p>
                    <CaretDownOutlined  className='mt-2 cursor-pointer'/>
                </div>

                <div className="m-auto md:mt-0 mt-3 lg:w-56 w-48 lg:h-20 h-16 bg-white rounded-full overflow-hidden flex justify-around items-center lg:text-xl px-2" style={{color: "#993EFD", border: '4px solid #993EFD'}}>
                    <p className="font-bold">16:00 - 17:00</p>
                    <CaretDownOutlined  className='mt-1 cursor-pointer'/>
                </div>

                <div className="m-auto md:mt-0 mt-3 lg:w-60 w-40 lg:h-20 h-16 bg-white rounded-full overflow-hidden flex justify-around items-center text-white lg:text-2xl" style={{backgroundColor: '#993EFD'}}>
                    <p className="font-bold cursor-pointer">ХАЙХ</p>
                </div>
            </div>

            <div className="xl:w-3/4 lg:w-5/6 w-full  p-4 lg:flex gap-5 justify-between items-center m-auto mt-7 shadow-lg shadow-gray-600">
                <div className='sm:flex gap-5 justify-center items-center'>
                    <div className='flex gap-3 justify-center items-center'>
                        <img className="h-14" src={Logo} alt=""/>
                        <p className="text-xl font-bold" style={{color: "#993EFD"}}>МОНГОЛ ТЕЛЕВИЗ</p>
                    </div>
                    
                    <div className='flex gap-5 justify-center items-center'>
                        <p className='text-xs font-bold' style={{color: "#8E8E8E"}}>Зуузуугын найзууд</p>
                        <p className="text-xl font-bold" style={{color: "#993EFD"}}>Мөнгө</p>
                    </div>
                </div>

                 <div className='flex  gap-5 justify-center items-center mt-1'>
                    <div className='flex gap-3 justify-center items-center'>
                        <p className='text-xs font-bold' style={{color: "#8E8E8E"}}>Өдөр</p>   
                        <p className="text-xl font-bold" style={{color: "#993EFD"}}>Даваа</p>
                    </div>
                    
                    <div className='flex gap-3 justify-center items-center'>
                        <p className='text-xs font-bold' style={{color: "#8E8E8E"}}>Цаг</p>   
                        <p className="text-xl font-bold" style={{color: "#993EFD"}}>16:00 - 17:00</p>
                    </div>
                </div>
            </div>

            <div className="xl:w-3/4 lg:w-5/6 w-full  p-4 lg:flex gap-5 justify-between items-center m-auto mt-7 shadow-lg shadow-gray-600">
                <div className='sm:flex gap-5 justify-center items-center'>
                    <div className='flex gap-3 justify-center items-center'>
                        <img className="h-14" src={Logo} alt=""/>
                        <p className="text-xl font-bold" style={{color: "#993EFD"}}>МОНГОЛ ТЕЛЕВИЗ</p>
                    </div>
                    
                    <div className='flex gap-5 justify-center items-center'>
                        <p className='text-xs font-bold' style={{color: "#8E8E8E"}}>Зуузуугын найзууд</p>
                        <p className="text-xl font-bold" style={{color: "#993EFD"}}>Мөнгө</p>
                    </div>
                </div>

                 <div className='flex  gap-5 justify-center items-center mt-1'>
                    <div className='flex gap-3 justify-center items-center'>
                        <p className='text-xs font-bold' style={{color: "#8E8E8E"}}>Өдөр</p>   
                        <p className="text-xl font-bold" style={{color: "#993EFD"}}>Даваа</p>
                    </div>
                    
                    <div className='flex gap-3 justify-center items-center'>
                        <p className='text-xs font-bold' style={{color: "#8E8E8E"}}>Цаг</p>   
                        <p className="text-xl font-bold" style={{color: "#993EFD"}}>16:00 - 17:00</p>
                    </div>
                </div>
            </div>

        </div>
      </>
    )
  }
}

export default Suvag;