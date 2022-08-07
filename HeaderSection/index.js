import React from "react";
import Image from "next/image"
import macBook from "../../../public/images/macBook.png"
import screen from "../../../public/images/screen.png"
import shadow from "../../../public/images/shadow.png"

export const HeaderSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full px-4 sm:px-0">
        <div className="flex flex-col items-center justify-center w-full h-full text-center py-14">
          <p className="lg:text-[55px] md:text-[40px] text-[30px] font-semibold text-gray-900">Лорем ипсум долор сит амет</p>
          <p className="lg:text-[19px] md:text-[15px] text-[13px] text-gray-500">Лорем ипсум долор сит амет, еи хас малорум адиписци адверсариум.</p>
          <div className="w-[124px] h-[42px] bg-[#1570EF] text-white rounded-[8px] flex justify-center items-center md:mt-10 mt-7">Бүртгүүлэх</div>
        </div>

        <div className="lg:w-[700px] md:w-[550px] sm:w-[500px] w-4/5 lg:h-[407px] md:h-[320px] sm:h-[290px] h-full relative flex justify-center items-center box-border">
          <div className="w-full h-full">
            <Image src={macBook} alt="" />
          </div>
          <div className="lg:w-[580px] md:w-[450px] sm:w-[400px] w-4/5 absolute top-2 ml-1">
            <Image className="w-full" src={screen} alt="" />
          </div>
          <p className="sm:flex hidden absolute lg:bottom-6 bottom-5 text-[5px] text-[#F9FAFB]">MacBook Pro</p>
          <div className="absolute bottom-0 w-full">
            <Image src={shadow} alt="" />
          </div>
        </div>

        <div className="w-full h-[200px] my-20 flex flex-col items-center py-2">
          <p className="text-[16px] text-gray-500 font-medium">Ашиглаж байгаа сургуулиуд  </p>
          <div className="xl:w-[1250px] lg:w-[90%] w-full md:flex justify-between items-center mt-7 md:px-5 px-0">
            <div className="flex items-center justify-around w-full mt-0 md:mt-0">
              <div className="xl:w-[146px] lg:w-[130px] sm:w-[110px] w-[80px] sm:h-[48px] h-[60px] bg-[#EAECF0] rounded-[8px]"></div>
              <div className="xl:w-[146px] lg:w-[130px] sm:w-[110px] w-[80px] sm:h-[48px] h-[60px] bg-[#EAECF0] rounded-[8px]"></div>
              <div className="xl:w-[146px] lg:w-[130px] sm:w-[110px] w-[80px] sm:h-[48px] h-[60px] bg-[#EAECF0] rounded-[8px]"></div>
            </div>
            <div className="flex items-center justify-around w-full mt-4 md:mt-0">
              <div className="xl:w-[146px] lg:w-[130px] sm:w-[110px] w-[80px] sm:h-[48px] h-[60px] bg-[#EAECF0] rounded-[8px]"></div>
              <div className="xl:w-[146px] lg:w-[130px] sm:w-[110px] w-[80px] sm:h-[48px] h-[60px] bg-[#EAECF0] rounded-[8px]"></div>
              <div className="xl:w-[146px] lg:w-[130px] sm:w-[110px] w-[80px] sm:h-[48px] h-[60px] bg-[#EAECF0] rounded-[8px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}