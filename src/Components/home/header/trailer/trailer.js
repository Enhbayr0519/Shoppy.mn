import React from 'react';
import "./trailer.css"
import { AppleOutlined, AppstoreOutlined } from '@ant-design/icons';
import card1 from "../../../../images/home/header/zuzu_trailer/card1.png"
import card2 from "../../../../images/home/header/zuzu_trailer/card2.png"
import card3 from "../../../../images/home/header/zuzu_trailer/card3.png"
import card4 from "../../../../images/home/header/zuzu_trailer/card4.png"

const Trailer = props => {

    return (
        <>
            <div className="w-full h-full bg-white">

                <div className="w-full md:flex justify-center items-center md:text-left text-center">

                    <div className='w-full 2xl:flex 2xl:justify-between justify-center items-center'>
                        {/* 1 */}
                        <div className="trailer_item1 flex justify-center items-center text-white  font-semibold" style={{backgroudColor: '#22e4ac'}}>
                            <div className=' flex justify-between '>
                                <div className='flex flex-col ml-3 2xl:text-left text-center'>
                                    <p className='text-2xl font-bold '>ЗУУЗУУ АПП</p>
                                    <p className="text-sm mt-2">Хүүхдийн боловсрол танин  мэдэхүйн цар хүрээг  өргөжүүлэхэд  зориулагдсан цогц  аппликэйшн</p>
                                </div>

                                <img className="sm:w-40 w-36 h-48" src={card1} alt="" />
                            </div> 
                        </div>


                        {/* 2 */}
                        <div className="trailer_item2 w-full h-full flex justify-between items-center text-white font-semibold" style={{backgroudColor: '#22e4ac'}}>
                            <div className='w-full h-full flex justify-around '>
                                <div className='flex flex-col ml-3 2xl:text-left text-center'>
                                    <p className='text-2xl font-bold '>ЗУУЗУУ ТАБЛЕТ</p>
                                    <p className="text-sm mt-2">Хүүхдийн хөгжлийг цогцоор нь дэмжинэ</p>
                                </div>

                                <img className="sm:w-40 w-36 h-48" src={card2} alt="" />
                            </div> 
                        </div>
                    </div>

                    <div className='w-full h-full 2xl:flex 2xl:justify-between justify-center items-center'>
                        {/* 3 */}
                        <div className="trailer_item3 flex justify-center items-center text-white font-semibold" style={{backgroudColor: '#22e4ac'}}>
                            <div className='flex justify-between'>
                                <div className='flex flex-col ml-3 '>
                                    <p className='text-2xl font-bold '>ЗУУЗУУ НОМ,ДЭВТЭР</p>
                                    <p className="text-sm mt-2">500 ширхэг өгүүлбэртэй бодлого Шилдэг 100 үлгэрүүд Зохион бичлэгийн дэвтэр Буддаг ном</p>
                                </div>

                                <img className="sm:w-40 w-36 h-48" src={card3} alt="" />
                            </div> 
                        </div>

                        {/* 4 */}
                        <div className="trailer_item4 flex justify-center items-center text-white font-semibold" style={{backgroudColor: '#22e4ac'}}>
                            <div className='flex justify-between '>
                                <div className='flex flex-col ml-3 '>
                                    <p className='text-2xl font-bold '>МАСКОТ ТОГЛОЛТ</p>
                                    <p className="text-sm mt-2">Хүүхдийн боловсрол танин  мэдэхүйн цар хүрээг  өргөжүүлэхэд  зориулагдсан цогц  аппликэйшн</p>
                                </div>

                                <img className="sm:w-40 w-36 h-48" src={card4} alt="" />
                            </div> 
                        </div>
                    </div>
                    
                </div>

                <div className='flex justify-center items-center'>
                    <div className=" flex gap-3 mt-5 text-zinc-800">
                        <div className="w-36 h-12 rounded-lg flex justify-evenly items-center cursor-pointer border-2 bg-amber-300">
                            <AppleOutlined className='text-3xl mb-2'/>
                            <div className='flex flex-col text-xs '>
                                Download
                                <span className='font-semibold text-base'>
                                    App Store
                                </span>
                            </div>
                        </div>
                        
                        <div className="w-36 h-12 bg-white rounded-lg flex justify-evenly items-center cursor-pointer border-2 bg-amber-300">
                            <AppstoreOutlined className='text-3xl mb-2'/>
                            <div className='flex flex-col text-xs '>
                                Download
                                <span className='font-semibold text-base'>
                                    App Store
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Trailer ;        