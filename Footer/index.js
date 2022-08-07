import React from "react";
import ws from "../../../public/images/ws.png";
import twitter from "../../../public/images/twitter.png";
import In from "../../../public/images/in.png";
import fb from "../../../public/images/fb.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <div className="w-full h-full flex justify-around items-center px-4 bg-[#1D2939] py-16">
        <div className="flex flex-col gap-[6px]">
          <div className="w-[32px] h-[28px] flex justify-center items-center bg-black rounded-lg border border-gray-400">
            <Image src={ws} alt="" />
          </div>
          <p className="mt-4 text-white">Лорем ипсум долор <br className="flex md:hidden"/> сит амет, еи хас <br/> малорум адиписци <br className="flex md:hidden"/> адверсариум.</p>
        </div>

        <div className="gap-5 text-center sm:flex lg:gap-20 sm:text-left">
          <div className="flex flex-col gap-1 sm:gap-3">
            <p className="text-[14px] text-gray-400 font-medium">Компани</p>
            <p className="text-white">Бидний тухай</p>
            <p className="text-white">Ажлын байр</p>
            <p className="text-white">Мэдээ</p>
            <p className="text-white">Холбогдох</p>
          </div>
          <div className="flex flex-col gap-1 mt-4 sm:gap-3 sm:mt-0">
            <p className="text-[14px] text-gray-400 font-medium">Сошиал</p>
            <p className="text-white">Twitter</p>
            <p className="text-white">LinkedIn</p>
            <p className="text-white">Facebook</p>
          </div>
          <div className="flex flex-col gap-1 mt-4 sm:gap-3 sm:mt-0">
            <p className="text-[14px] text-gray-400 font-medium">Нөхцлүүд</p>
            <p className="text-white">Үйлчилгээний нөхцөл</p>
            <p className="text-white">Нууцлал</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[120px] flex justify-center items-center bg-[#101828] sm:px-0 px-4">
        <div className="flex items-center justify-between w-full h-full sm:w-3/4">
          <p className="text-white">© 2022 Amjilt.</p>
          <div className="flex gap-6 ">
            <Image src={twitter} alt="" />
            <Image src={In} alt="" />
            <Image src={fb} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}