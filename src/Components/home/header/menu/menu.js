import React, { useState } from 'react';
import ZuuzuTxt from "../../../../images/home/header/txt.png";
import { SearchOutlined } from '@ant-design/icons';
import Mobile_menu from "./mobile_menu/mobile_menu"
import { useNavigate } from "react-router-dom"

const MenuComp = props => {

    const [animate, setAnimate] = useState(false);

    const navigate = useNavigate();
    
    return (
        <menu className='container relative xl:flex md:block flex 2xl:justify-start justify-between items-center font-bold text-purple-600 mt-5 px-5 mx-5'>
            {
                animate === true ? (
                    <div className="z-0">
                        <div className='md:block hidden w-44'></div>
                        <Mobile_menu 
                            hide={props.hide}
                            closeHide={props.closeHide}
                            showHide={props.showHide}
                        />
                    </div>
                )  : (
                    <div className="z-0">
                        <div className='md:block hidden w-44'></div>
                        <Mobile_menu 
                             hide={props.hide}
                             closeHide={props.closeHide}
                             showHide={props.showHide}
                        />
                    </div>
                )
            }

            <div className='md:w-48 w-40 xl:hidden block md:m-auto' >
                <img src={ZuuzuTxt} alt=""/>
            </div>

            <div className='md:block text-center hidden  md:flex justify-center xl:gap-6 gap-5 xl:mt-0 mt-5 lg:text-base md:text-sm'>
                <div className='flex gap-5 justify-between items-center'>
                        <div className='cursor-pointer'onClick={() => {
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

                        <div className='cursor-pointer' onClick={() => {
                            navigate('/app')
                            }}>Zuuzuu app
                        </div>
                </div>

                <div className='2xl:block w-72 hidden cursor-pointer'>
                    <img src={ZuuzuTxt} alt=""/>
                </div>

                <div className='flex gap-5 justify-between items-center'> 
                        <div className='cursor-pointer' onClick={() => {
                            navigate('/shop')
                            }}>Zuuzuu shop
                        </div>

                        <div className='cursor-pointer lg:block md:hidden block' onClick={() => {
                            navigate('/question')
                            }}>Түгээмэл асуулт
                        </div>

                        <div className='cursor-pointer' onClick={() => {
                            navigate('/contact')
                            }}>Бидэнтэй холбогдох
                        </div>
                </div>
            </div>


            <div className='xl:block hidden  2xl:mx-auto text-3xl text-stone-500  xl:mt-0 mt-3 cursor-pointer'>
             
                <SearchOutlined />
                    
            </div>

        </menu>
    )
}  

export default MenuComp ;