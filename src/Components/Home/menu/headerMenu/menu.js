import React, { useState } from "react";
import './menu.css'
import zuuzuu_txt from "../../../../Images/Home/zuuzuu_txt.png";
import { MenuOutlined, CloseOutlined, SearchOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Side_menu from "../sideMenu/sideMenu";
import Social_ikon_menu from "../socialIkonMenu/social_menu";

const Menu = () => {

    const [nav, setNav] = useState(false)

    const openNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(!nav)
    }

    const [sideMenu, setSideMenu] = useState(false)

    const openSideMenu = () => {
        setSideMenu(!sideMenu)
    }

    const closeSideMenu = () => {
        setSideMenu(!sideMenu)
    }

    return(
        <>

            {/* Mobile_menu */}
            <div className="md:hidden">
                <div className="fixed top-0 w-full h-full flex justify-between sm:px-3 px-1">
                    <div className={!nav ? 'w-32 px-1 pt-5' : 'hidden'}>
                        <img src={zuuzuu_txt} alt=""/>
                    </div>

                    <div className="fixed top-0 right-0 text-2xl py-4 px-6">
                        {
                            !nav ? <MenuOutlined onClick={openNav}/> : <CloseOutlined onClick={closeNav}/>
                        }
                    </div>
                </div>

                <div className={nav ? "w-[60%] fixed left-0 top-0 ease-in-out duration-500" : 'fixed left-[-100%] ease-in-out duration-500'}>
                    <div className="w-32 px-1 pt-5">
                        <img src={zuuzuu_txt} alt=""/>
                    </div>

                    <div className="w-full flex flex-col gap-3 px-3 py-2 uppercase font-semibold text-sm">
                        <p className="py-3 px-2 border-b border-gray-400 cursor-pointer">Танилцуулга</p>
                        <p className="py-3 px-2 border-b border-gray-400 cursor-pointer">Birthday clip</p>
                        <p className="py-3 px-2 border-b border-gray-400 cursor-pointer">Багтай тоглолт</p>
                        <p className="py-3 px-2 border-b border-gray-400 cursor-pointer">Zuuzuu app</p>
                        <p className="py-3 px-2 border-b border-gray-400 cursor-pointer">Zuuzuu shop</p>
                        <p className="py-3 px-2 border-b border-gray-400 cursor-pointer">Түгээмэл асуулт</p>
                        <p className="py-3 px-2 border-b border-gray-400 cursor-pointer">Бидэнтэй холбогдох</p>
                    </div>
                </div>
            </div>

            {/* Desktop_menu */}
            <div className="w-full h-20 fixed top-0 z-30 md:flex hidden justify-evenly items-center font-semibold px-2 shadow-xl" id="menu">
                <div>
                    <div className="w-40 lg:block hidden"></div>
                </div>
                
                <div className="w-full h-full flex xl:justify-evenly justify-between items-center xl:gap-0 gap-2">
                    <p className="text-[#993EFD]">Танилцуулга</p>
                    <p className="text-[#993EFD]">Birthday clip</p>
                    <p className="text-[#993EFD]">Багтай тоглолт</p>
                    <p className="text-[#993EFD]">Zuuzuu app</p>

                    <div className="xl:w-44 lg:w-32 w-28">
                        <img src={zuuzuu_txt} alt=""/>
                    </div>

                    <p className="text-[#993EFD]">Zuuzuu shop</p>
                    <p className="text-[#993EFD]">Түгээмэл асуулт</p>
                    <p className="text-[#993EFD]">Бидэнтэй холбогдох</p>
                    <div className='xl:block hidden text-3xl text-gray-500 mb-2 cursor-pointer'>
                        <SearchOutlined />
                    </div>
                </div>
            </div>

            <div className="fixed lg:flex hidden top-0 left-0 z-50">
                <Side_menu />
            </div>

            {/* Mobile sideMenu */}

            <div className="flex">
                {
                    sideMenu ? (
                        <>
                            <div className={sideMenu ? "md:flex  ease-in-out z-50" : 'fixed -translate-x-50 ease-in-out duration-500'}>
                                <Side_menu />
                            </div>
                            <div className="md:hidden absolute right-0 h-screen w-screen z-0" style={{backgroundColor: "#ffffff90"}} onClick={closeSideMenu}></div>
                        </>
                    ) : (
                        <>
                            <div className='lg:hidden flex w-36 h-16 fixed bottom-1/4 left-2 gap-1  bg-white rounded-xl justify-center px-5 items-center text-xl hover:text-2xl transition ease-in-out text-gray-600 shadow-2xl shadow-gray-600'
                                onClick={openSideMenu}    
                                >
                                <img src={zuuzuu_txt} alt=""/>
                                <ArrowRightOutlined />
                            </div>
                        </>
                    )
                }
            </div>

            {/* Social ikon Menu */}
            <div>
                <Social_ikon_menu />
            </div>

        </>
    )
}

export default Menu;