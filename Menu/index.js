import React from "react";
import ws from "../../../public/images/ws.png";
import Image from "next/image"
import { MenuOutlined } from '@ant-design/icons';

export const Menu = props => {



  return (
    <>
      <div className="w-full h-20 flex justify-between items-center text-[16px] md:px-10 px-6">
        <div className="lg:w-[380px] md:w-[350px] w-full h-full flex justify-between items-center">
          <div className="flex gap-[6px] items-center">
            <div className="w-[32px] h-[28px] flex justify-center items-center bg-black rounded-lg">
              <Image src={ws} alt="" />
            </div>
            <p className="font-semibold">Amjilt</p>
          </div>
          <div className="items-center justify-center hidden font-medium text-gray-500 md:flex gap-7">
            <p className="cursor-pointer">Бидний тухай</p>
            <p className="cursor-pointer">Мэдээ</p>
            <p className="cursor-pointer">Үнэ</p>
          </div>
          <div className="flex items-center justify-center text-xl text-gray-700 md:hidden" onClick={() => props.openMenu()}>
            <MenuOutlined />
          </div>
        </div>
        <div className="w-[250px] h-full md:flex hidden justify-between items-center">
          <div className="w-[124px] h-[42px] text-gray-500 font-medium rounded-[8px] flex justify-center items-center cursor-pointer" onClick={() => props.openLoginModal()}>Нэвтрэх</div>
          <div className="w-[124px] h-[42px] bg-[#1570EF] text-white rounded-[8px] flex justify-center items-center cursor-pointer">Бүртгүүлэх</div>
        </div>
        {/* DropDown Menu */}
        <div className={
          props.menu === true ? "md:hidden fixed top-0 left-0 sm:w-[60%] w-[80%] h-screen ease-in-out duration-500 bg-white shadow-2xl shadow-gray-900 py-6 px-10 z-50"
            : "md:hidden fixed top-0 left-[-100%] w-[60%] h-screen ease-in-out duration-500 bg-white shadow-2xl shadow-gray-900 z-50"}>
          <div className="flex gap-[6px] items-center">
            <div className="w-[32px] h-[28px] flex justify-center items-center bg-black rounded-lg">
              <Image src={ws} alt="" />
            </div>
            <p className="font-semibold">Amjilt</p>
          </div>
          <div className="flex flex-col items-start justify-center gap-5 text-xl font-medium text-gray-500 mt-7">
            <p className="cursor-pointer">Мэдээ Мэдээлэл</p>
            <p className="cursor-pointer">Үнэ</p>
            <p className="cursor-pointer">Бидний тухай</p>
          </div>
          <div className="w-[250px] flex flex-col justify-between items-start mt-5">
            <div className="w-[124px] h-[42px] text-xl text-gray-500 text-white font-medium rounded-[8px] flex items-center cursor-pointer" onClick={() => props.openLoginModal()}>Нэвтрэх</div>
            <div className="w-[124px] h-[42px] text-xl text-gray-500 text-white font-medium rounded-[8px] flex items-center mt-3 cursor-pointer">Бүртгүүлэх</div>
          </div>
        </div>
        <div
          className={props.menu === true ? "md:hidden fixed top-0 left-0 w-[100%] h-screen shadow-xl ease-in-out duration-700 bg-[#ffffff90] z-40"
            : 'md:hidden fixed top-0 left-[-100%] w-[100%] h-screen shadow-xl ease-in-out duration-700 bg-[#ffffff90] z-40'}
          onClick={() => props.closeMenu()}
        ></div>
        {/*  */}
      </div>
    </>
  )
}