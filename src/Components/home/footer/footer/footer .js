import React from 'react';

const Footer_item = props => {
    
    return (
        <>
         <div className='w-full flex flex-col md:justify-center justify-between items-center md:gap-4 gap-7 py-4 text-white' style={{backgroundColor: '#993EFD'}}>
                <div className='xl:w-4/5 w-full xl:px-0 md:px-10 px-3 md:flex md:gap-5 justify-between items-center text-center lg:text-base md:text-sm text-md font-semibold'>
                    <div className='cursor-pointer font-bold'>Танилцуулга</div>
                    <div className='cursor-pointer mt-2'>Birthday clip</div>
                    <div className='cursor-pointer mt-2'>Багтай тоглолт</div>
                    <div className='cursor-pointer mt-2'>Zuuzuu app</div>
                    <div className='cursor-pointer mt-2'>Zuuzuu shop</div>
                    <div className='cursor-pointer lg:block md:hidden block mt-2'>Түгээмэл асуулт</div>
                    <div className='cursor-pointer mt-2'>Бидэнтэй холбогдох</div>
                </div>

                <div className='w-full text-center text-md lg:text-base text-sm font-semibold'> 
                    <p className='cursor-pointer md:px-5 px-3'>© 2020 Zuuzuu’s Friends Limited, All Rights Reserved: Use of this website (including any and all parts and components) constitutes your acceptance of these Terms of Use and Privacy Polic</p>
                </div>
            </div>
        </>
    )
}

export default Footer_item;