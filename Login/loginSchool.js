import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import home from "../../../public/images/home.png";
import or from "../../../public/images/or.png";
import cc from "../../../public/images/cc.png";
import Image from "next/image"

export const LoginSchool = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="sm:w-[380px] w-full h-[400px] bg-white bg-opacity-80">
        <div className="flex items-center text-[14px] font-md text-gray-400 cursor-pointer gap-1 px-4">
          <LeftOutlined className="mb-[2px] text-sm" />
          <p>Буцах</p>
        </div>
        <div className="flex flex-col items-center w-full h-full gap-4 mt-6">
          <div className="w-[50px] h-[48px] flex justify-center items-center rounded-full">
            <Image src={home} alt="" />
          </div>
          <div className="text-center">
            <p className="text-[18px] font-medium text-gray-900">Нэвтрэх сургууль</p>
            <p className="text-[14px] text-gray-500">Та нэвтрэх сургуулиа сонгоно уу</p>
          </div>
          <div className="w-[90%] h-20 border-2 rounded-lg flex justify-between items-center px-4">
            <div className="flex items-center justify-start gap-2">
              <div className="w-[50px] h-[48px] flex justify-center items-center rounded-full">
                <Image src={or} alt="" />
              </div>
              <p className="text-[14px] font-medium text-gray-700">Олонлог Академи</p>
            </div>
            <RightOutlined className="text-gray-300" />
          </div>

          <div className="w-[90%] h-20 border-2 rounded-lg flex justify-between items-center px-4">
            <div className="flex items-center justify-start gap-2">
              <div className="w-[50px] h-[48px] flex justify-center items-center rounded-full">
                <Image src={cc} alt="" />
              </div>
              <p className="text-[14px] font-medium text-gray-700">Сант Сургууль</p>
            </div>
            <RightOutlined className="text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  )
} 