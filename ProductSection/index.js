import React from "react";
import mail from "../../../public/images/mail.png"
import electry from "../../../public/images/electry.png"
import graphic from "../../../public/images/graphic.png"
import screen from "../../../public/images/screen.png"
import check from "../../../public/images/check.png"
import avatar from "../../../public/images/avatar.png"
import Image from "next/image"

export const ProductSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center w-full h-full px-4 text-center py-14">
          <p className="text-[16px] font-medium text-[#1570EF]">Бүтээгдэхүүн</p>
          <p className="lg:text-[36px] md:text-[30px] text-[24px] font-semibold">Лорем ипсум долор сит амет, еи хас <br className="hidden sm:flex" /> малорум адиписци адверсариум.</p>
          <p className="lg:text-[20px] md:text-[16px] text-[14px] text-gray-900 md:mt-4 mt-2">Лорем ипсум долор сит амет, еи хас малорум адиписци адверсариум. Ет хис <br className="hidden sm:flex" /> анциллае десерунт, вел форенсибус омиттантур медиоцритатем еи.</p>
        </div>

        {/* 1 */}
        <div className="items-center w-full gap-2 px-4 mb-10 md:flex justify-evenly xl:px-0">
          <div className="md:w-[550px] md:block flex flex-col justify-center items-center px-4 md:text-left text-center">
            <Image src={mail} alt="" />
            <p className="lg:text-[36px] md:text-[30px] text-[24px] font-semibold">Лорем ипсум долор сит амет</p>
            <p className="lg:text-[20px] md:text-[16px] text-[14px] text-gray-900 md:mt-4 mt-2">Лорем ипсум долор сит амет, еи хас малорум адиписци адверсариум.</p>
            <div className="flex gap-1 mt-3 sm:gap-3">
              <Image src={check} alt="" />
              <p>Лорем ипсум долор сит амет</p>
            </div>
            <div className="flex gap-1 mt-3 sm:gap-3">
              <Image src={check} alt="" />
              <p>Лорем ипсум долор сит амет</p>
            </div>
            <div className="flex gap-1 mt-3 sm:gap-3">
              <Image src={check} alt="" />
              <p>Лорем ипсум долор сит амет</p>
            </div>
          </div>

          <div className="lg:w-[600px] md:w-full w-[90%] md:m-0 m-auto lg:h-[420px] md:h-[350px] md:mt-0 mt-4">
            <Image className="w-full h-full" src={screen} alt="" />
          </div>
        </div>

        {/* 2 */}
        <div className="items-center w-full gap-2 px-4 mb-10 md:flex justify-evenly xl:px-0">
          <div className="md:flex hidden lg:w-[600px] md:w-full w-[90%] md:m-0 m-auto lg:h-[420px] md:h-[350px] md:mt-0 mt-4">
            <Image className="w-full h-full" src={screen} alt="" />
          </div>

          <div className="md:w-[550px] md:block flex flex-col justify-center items-center px-4 md:text-left text-center">
            <Image src={mail} alt="" />
            <p className="lg:text-[36px] md:text-[30px] text-[24px] font-semibold">Лорем ипсум долор сит амет</p>
            <p className="lg:text-[20px] md:text-[16px] text-[14px] text-gray-900 md:mt-4 mt-2">Лорем ипсум долор сит амет, еи хас малорум адиписци адверсариум.</p>
            <div className="flex gap-1 mt-3 sm:gap-3">
              <Image src={check} alt="" />
              <p>Лорем ипсум долор сит амет</p>
            </div>
            <div className="flex gap-1 mt-3 sm:gap-3">
              <Image src={check} alt="" />
              <p>Лорем ипсум долор сит амет</p>
            </div>
            <div className="flex gap-1 mt-3 sm:gap-3">
              <Image src={check} alt="" />
              <p>Лорем ипсум долор сит амет</p>
            </div>
          </div>
        </div>

        <div className="md:hidden flex lg:w-[600px] md:w-full w-[90%] md:m-0 m-auto lg:h-[420px] md:h-[350px] md:mt-0 mt-4">
          <Image className="w-full h-full" src={screen} alt="" />
        </div>

        {/* 3 */}
        <div className="items-center w-full gap-2 px-4 mb-10 md:flex justify-evenly xl:px-0">
          <div className="md:w-[550px] md:block flex flex-col justify-center items-center px-4 md:text-left text-center">
            <Image src={mail} alt="" />
            <p className="lg:text-[36px] md:text-[30px] text-[24px] font-semibold">Лорем ипсум долор сит амет</p>
            <p className="lg:text-[20px] md:text-[16px] text-[14px] text-gray-900 md:mt-4 mt-2">Лорем ипсум долор сит амет, еи хас малорум адиписци адверсариум.</p>
            <div className="flex gap-1 mt-3 sm:gap-3">
              <Image src={check} alt="" />
              <p>Лорем ипсум долор сит амет</p>
            </div>
            <div className="flex gap-1 mt-3 sm:gap-3">
              <Image src={check} alt="" />
              <p>Лорем ипсум долор сит амет</p>
            </div>
            <div className="flex gap-1 mt-3 sm:gap-3">
              <Image src={check} alt="" />
              <p>Лорем ипсум долор сит амет</p>
            </div>
          </div>

          <div className="lg:w-[600px] md:w-full w-[90%] md:m-0 m-auto lg:h-[420px] md:h-[350px] md:mt-0 mt-4">
            <Image className="w-full h-full" src={screen} alt="" />
          </div>
        </div>

        <div className="w-full py-20 flex flex-col items-center py-2 text-center bg-[#F9FAFB] px-3">
          <p className="lg:text-[36px] md:text-[30px] sm:text-[24px] text-[20px] font-semibold">Лорем ипсум долор сит амет, еи хас малорум <br className="hidden sm:flex" /> адиписци адверсариум.</p>
          <div className="mt-4">
            <Image src={avatar} alt="" />
          </div>
          <p className="text-[16px] font-medium">Б.Баттүвшин</p>
          <p className="text-[16px] text-gray-500 ">Багш, Олонлог Академи</p>
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

        <div className="flex flex-col items-center justify-center w-full h-full px-4 text-center py-14">
          <p className="text-[16px] font-medium text-[#1570EF]">Бүтээгдэхүүн</p>
          <p className="lg:text-[36px] md:text-[30px] text-[24px] font-semibold">Лорем ипсум долор сит амет</p>
          <p className="lg:text-[20px] md:text-[16px] text-[14px] text-gray-900 md:mt-4 mt-2">Лорем ипсум долор сит амет, еи хас малорум адиписци адверсариум.</p>
          <Image className="mt-12" src={screen} alt="" />
        </div>

        <div className="items-center w-full md:flex justify-evenly my-14">
          <div className="md:w-[550px] md:block flex flex-col justify-center items-center px-4 text-center">
            <Image className="m-auto" src={mail} alt="" />
            <p className="lg:text-[20px] text-[16px] font-semibold">Лорем ипсум долор сит амет</p>
            <p className="md:text-[16px] text-[14px] text-gray-900 md:mt-3 mt-2">Лорем ипсум долор сит амет, еи хас малорум адиписци адверсариум. Ет хис анциллае десерунт, вел форенсибус.</p>
            <div className="flex gap-2 justify-center items-center text-[16px] font-medium text-[#1570EF] mt-3">
              <p>Дэлгэрэнгүй</p>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="md:w-[550px] md:block flex flex-col justify-center items-center px-4 text-center md:mt-0 mt-8">
            <Image className="m-auto" src={electry} alt="" />
            <p className="lg:text-[20px] text-[16px] font-semibold">Лорем ипсум долор сит амет</p>
            <p className="md:text-[16px] text-[14px] text-gray-900 md:mt-3 mt-2">Лорем ипсум долор сит амет, еи хас малорум адиписци адверсариум. Ет хис анциллае десерунт, вел форенсибус.</p>
            <div className="flex gap-2 justify-center items-center text-[16px] font-medium text-[#1570EF] mt-3">
              <p>Дэлгэрэнгүй</p>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="md:w-[550px] md:block flex flex-col justify-center items-center px-4 text-center md:mt-0 mt-8">
            <Image className="m-auto" src={graphic} alt="" />
            <p className="lg:text-[20px] text-[16px] font-semibold">Лорем ипсум долор сит амет</p>
            <p className="md:text-[16px] text-[14px] text-gray-900 md:mt-3 mt-2">Лорем ипсум долор сит амет, еи хас малорум адиписци адверсариум. Ет хис анциллае десерунт, вел форенсибус.</p>
            <div className="flex gap-2 justify-center items-center text-[16px] font-medium text-[#1570EF] mt-3">
              <p>Дэлгэрэнгүй</p>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>

        <div className="items-center w-full gap-2 px-4 my-20 md:flex justify-evenly xl:px-0">
          <div className="md:w-[550px] md:block flex flex-col justify-center items-center px-4 md:text-left text-center">
            <Image src={mail} alt="" />
            <p className="lg:text-[36px] md:text-[30px] text-[24px] font-semibold">Лорем ипсум долор сит амет</p>
            <p className="lg:text-[20px] md:text-[16px] text-[14px] text-gray-900 md:mt-4 mt-2">Лорем ипсум долор сит амет, еи хас малорум адиписци адверсариум.</p>
            <div className="flex gap-1 mt-3 sm:gap-3">
              <Image src={check} alt="" />
              <p>Лорем ипсум долор сит амет</p>
            </div>
            <div className="flex gap-1 mt-3 sm:gap-3">
              <Image src={check} alt="" />
              <p>Лорем ипсум долор сит амет</p>
            </div>
            <div className="flex gap-1 mt-3 sm:gap-3">
              <Image src={check} alt="" />
              <p>Лорем ипсум долор сит амет</p>
            </div>
            <div className="w-[124px] h-[42px] bg-[#1570EF] text-white rounded-[8px] flex justify-center items-center md:mt-10 mt-7">Бүртгүүлэх</div>
          </div>

          <div className="lg:w-[600px] md:w-full w-[90%] md:m-0 m-auto lg:h-[420px] md:h-[350px] md:mt-0 mt-4">
            <Image className="w-full h-full" src={screen} alt="" />
          </div>
        </div>

      </div>
    </>
  )
}