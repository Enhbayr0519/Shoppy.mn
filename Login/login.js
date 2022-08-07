import React from "react";
import ws from "../../../public/images/ws.png"
import Image from "next/image"

export const Login = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <div className="sm:w-[450px] w-full  flex flex-col justify-center items-center py-8">
          <div className="w-[35px] h-[32px] flex justify-center items-center bg-black rounded-lg">
            <Image src={ws} alt="" />
          </div>
          <p className="text-[30px] text-gray-900 font-medium mt-3">Нэвтрэх</p>
          <p className="text-[16px] text-gray-500">Та нэвтрэх нэх болон нууц үгээ оруулна уу</p>
          <div className="flex flex-col items-center w-full my-4 jsutify-center">
            <div className="mt-2">
              <p className="text-[14px] text-gray-700 font-medium">Нэвтрэх нэр</p>
              <input className="w-[360px] h-[40px] border-2 rounded-[8px] mt-1 px-3" placeholder='Нэвтрэх нэрээ оруулна уу' type="text" />
            </div>
            <div className="mt-4">
              <p className="text-[14px] text-gray-700 font-medium">Password</p>
              <input className="w-[360px] h-[40px] border-2 rounded-[8px] mt-1 px-3" placeholder='Нууц үгээ оруулна уу' type="text" />
            </div>
          </div>
          <div className="w-[360px] flex justify-between items-center">
            <div className="flex gap-2">
              <input type="checkbox" />
              Намайг санах
            </div>
            <p className="text-[14px] text-[#175CD3] font-medium">Нууц үг мартсан</p>
          </div>
          <div className="w-[360px] h-full flex flex-col gap-3 justify-between items-center mt-5">
            <div className="w-full h-[42px] bg-[#1570EF] text-white font-medium rounded-[8px] flex justify-center items-center cursor-pointer">Нэвтрэх</div>
            <div className="w-full h-[42px] text-gray-700 font-medium border-2 rounded-[8px] flex justify-center items-center cursor-pointer">Бүртгүүлэх</div>
          </div>
        </div>
      </div>
    </>
  )
}