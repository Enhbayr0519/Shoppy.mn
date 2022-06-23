import React from 'react';
import bg_image from "../../../../images/home/header/background 1.png"
import txt_img from "../../../../images/home/header/txt.png"
import rectangle from "../../../../images/home/header/rectangle.png"

const Bg_img = () => {

    return (
        <>
            <div className='w-full flex justify-center items-center mt-5 overflow-hidden relative '>
                <div className="w-44 2xl:block hidden"></div>
                <img className="w-full" src={bg_image} alt="" />

                <div className='absolute left-0 right-0 bottom-0 z-0 flex justify-center items-center box-border'>
                    <img className='2xl:h-44 lg:h-40 md:h-28 h-16' src={txt_img} alt=""/>
                    <img className="sm:w-2/6 w-2/5" src={rectangle} alt=""/>
                </div>
            </div>
        </>
    )
}

export default Bg_img ;        