import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import twoMan from "../../../public/images/twoMan.png";
import cm from "../../../public/images/cm.png";
import ba from "../../../public/images/ba.png";
import Image from "next/image"

export const Access = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="sm:w-[380px] w-full h-[400px] bg-white bg-opacity-80">
        <div className="flex items-center text-[14px] font-md text-gray-400 cursor-pointer gap-1 px-4">
          <LeftOutlined className="mb-[2px] text-sm" />
          <p>Буцах</p>
        </div>
        <div className="flex flex-col items-center w-full h-full gap-4 mt-6">
          <div className="w-[50px] h-[48px] flex justify-center items-center rounded-full">
            <Image src={twoMan} alt="" />
          </div>
          <div className="text-center">
            <p className="text-[18px] font-medium text-gray-900">Нэвтрэх эрх</p>
            <p className="text-[14px] text-gray-500">Та нэвтрэх эрхээ сонгоно уу</p>
          </div>
          <div className="w-[90%] h-20 border-2 rounded-lg flex justify-between items-center px-4">
            <div className="flex items-center justify-start gap-2">
              <div className="w-[50px] h-[48px] flex justify-center items-center rounded-full">
                <Image src={cm} alt="" />
              </div>
              <p className="text-[14px] font-medium text-gray-700">Багш</p>
            </div>
            <RightOutlined className="text-gray-300" />
          </div>

          <div className="w-[90%] h-20 border-2 rounded-lg flex justify-between items-center px-4">
            <div className="flex items-center justify-start gap-2">
              <div className="w-[50px] h-[48px] flex justify-center items-center rounded-full">
                <Image src={ba} alt="" />
              </div>
              <p classNaame="text-[14px] font-medium text-gray-700">Сургалтын мэнежер</p>
            </div>
            <RightOutlined className="text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  )
} 