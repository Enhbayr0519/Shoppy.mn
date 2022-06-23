import React, { Component } from 'react';
import zuuzuu from "../../images/sideMenuPage/zuuzuu/zuuzuu.png"
import rectangle1 from '../../images/sideMenuPage/rectangle1.png'
import rectangle2 from '../../images/sideMenuPage/rectangle2.png'
import rectangle3 from '../../images/sideMenuPage/rectangle3.png'
import rectangle4 from '../../images/sideMenuPage/rectangle4.png'

class SideMenuPage extends Component {

  render() {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center mt-8">
                <div className='w-full flex flex-col justify-center items-center text-center mt-4'>
                    <img className='w-full xl:h-64 md:h-44 sm:h-32 h-full' src={zuuzuu} alt=""/>
                    <p className='xl:text-3xl md:text-2xl sm:text-xl text-sm font-bold text-center absolute ml-32 text-white'>ТӨРСӨН ӨДӨР</p>
                </div>

                <div className="w-full flex justify-center items-center sm:px-0 px-5">
                    <div className="w-44 xl:block hidden"></div>
                    <div className='sm:w-3/4 w-full h-80 my-16 rounded-lg relative md:px-16 px-6 py-9 shadow-2xl shadow-gray-500 bg-white'>
                   
                    </div>
                </div>

                <div className="w-full h-96 flex justify-center items-center bg-gradient-to-l from-violet-400 to-indigo-500 mb-14">
                    <div className="w-44"></div>
                    <div className='w-3/4 h-full flex flex-col justify-center items-center'>
                        <p className='text-white font-bold text-xl'>Зуузуутай Хамт Хөгжилдөөрэй!</p>
                        <div className="w-full h-full flex justify-between items-center">
                            <div className>
                                <img className='h-40' src={rectangle1} alt=""/>
                                <p className="text-xl text-white font-bold">Гар утасны зураг</p>
                            </div>

                            <div>
                                <img className='h-40' src={rectangle2} alt=""/>
                                <p className="text-xl text-white font-bold">Дэлгэцний зураг</p>
                            </div>

                            <div>
                                <img className='h-40' src={rectangle3} alt=""/>
                                <p className="text-xl text-white font-bold">Зургийг будаарай</p>
                            </div>

                            <div>
                                <img className='h-40' src={rectangle4} alt=""/>
                                <p className="text-xl text-white font-bold">Зургийг будаарай</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
  }
}

export default SideMenuPage ;