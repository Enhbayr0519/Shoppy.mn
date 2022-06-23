import React, { Component } from 'react'
import zuuzuuShop from "../../images/pagesPoster/Zuuzuu_shop.png"
import rectangle1 from "../../images/zuuzuuShop/Rectangle1.png"
import rectangle2 from "../../images/zuuzuuShop/Rectangle2.png"
import rectangle3 from "../../images/zuuzuuShop/Rectangle3.png"
import rectangle4 from "../../images/zuuzuuShop/Rectangle4.png"
import rectangle5 from "../../images/zuuzuuShop/Rectangle5.png"

class Shop extends Component {
  render() {
    return (
      <>
        <div className="w-full flex flex-col justify-center items-center mt-8">
          <div className='w-full flex flex-col justify-center items-center text-center mt-4'>
            <img className='w-full xl:h-64 md:h-44 sm:h-32 h-full' src={zuuzuuShop} alt=""/>
            <p className='xl:text-3xl md:text-2xl sm:text-xl text-sm font-bold text-center absolute mr-32 text-white'>ЗУУЗУУ ДЭЛГҮҮР</p>
          </div>

          <div className="w-full flex justify-center items-center sm:px-0 px-5">
            <div className="w-44 xl:block hidden"></div>

            <div className='xl:w-3/4 h-full xl:my-16 rounded-3xl  py-9'>
              <div className='w-full xl:flex justify-between items-center'>
              
              {/* item1 */}
                <div className="2xl:w-76 sm:w-60 w-56 w-full h-full xl:flex-col flex justify-center xl:gap-0 sm:gap-10 xl:px-0 px-4">
                  <img className='xl:w-40 xl:h-44 sm:h-52 h-40' src={rectangle1} alt=''/>
                  <div classNam=''>
                    <p className='font-bold xs:text-xl text-sm'>Zuuzuu Tablet</p>
                      <p className="font-semibold text-xs mt-3" style={{color: '#B5B5B5'}}>Zuuzuu Tablet 22</p>
                      <div className='2xl:flex gap-3 mt-3'>
                        <p className='font-semibold text-sm text-yellow-500'>₮699,000.00</p>
                        <div className='w-28 h-6 flex justify-center items-center text-xs text-white font-bold rounded-md 2xl:mt-0 mt-3' style={{backgroundColor: '#993EFD'}}>
                          Худалдан авах
                        </div>
                      </div>
                  </div>
                </div>

              {/* item2 */}
                <div className="2xl:w-76 sm:w-60 w-56 h-full xl:flex-col flex justify-center  xl:gap-0 sm:gap-10 xl:px-0 px-4">
                  <img className='xl:w-40 xl:h-44 sm:h-52 h-40' src={rectangle2} alt=''/>
                  <div classNam=''>
                    <p className='font-bold xs:text-xl text-sm'>Буддаг ном</p>
                      <p className="font-semibold text-xs mt-3" style={{color: '#B5B5B5'}}>Зуузуугийн ертөнцийг өнгөт болцгооё буддаг ном</p>
                      <div className='2xl:flex items-center gap-3 mt-3'>
                        <p className='font-semibold text-sm text-yellow-500'>₮4,900.00</p>
                        <div className='w-28 h-6 flex justify-center items-center text-xs text-white font-bold rounded-md 2xl:mt-0 mt-3' style={{backgroundColor: '#993EFD'}}>
                          Худалдан авах
                        </div>
                      </div>
                  </div>
                </div>

              {/* item3 */}
                <div className="2xl:w-76 sm:w-60 w-56 h-full xl:flex-col flex justify-center xl:gap-0 sm:gap-10 xl:px-0 p-4">
                  <img className='xl:w-40 xl:h-44 sm:h-52 h-40' src={rectangle3} alt=''/>
                  <div classNam=''>
                    <p className='font-bold xs:text-xl text-sm'>Өгүүлбэртэй бодлогын ном</p>
                      <p className="font-semibold text-xs mt-3" style={{color: '#B5B5B5'}}>Зуузуугийн найзууд 500 шилдэг өгүүлбэртэй бодлогын ном</p>
                      <div className='2xl:flex items-center gap-3 mt-3'>
                        <p className='font-semibold text-sm text-yellow-500'>₮14,900.00</p>
                        <div className='w-28 h-6 flex justify-center items-center text-xs text-white font-bold rounded-md 2xl:mt-0 mt-3' style={{backgroundColor: '#993EFD'}}>
                          Худалдан авах
                        </div>
                      </div>
                  </div>
                </div>

              {/* item4 */}
                <div className="2xl:w-76 sm:w-60 w-56 h-full xl:flex-col flex justify-center xl:gap-0 sm:gap-10 xl:px-0 p-4">
                  <img className='xl:w-40 xl:h-44 sm:h-52 h-40' src={rectangle4} alt=''/>
                  <div classNam=''>
                    <p className='font-bold xs:text-xl text-sm'>Зуузуу үлгэрийн ном</p>
                      <p className="font-semibold text-xs mt-3" style={{color: '#B5B5B5'}}>Зуузуугийн найзууд шилдэг 100 үлгэрүүд    </p>
                      <div className='2xl:flex items-center gap-3 mt-3'>
                        <p className='font-semibold text-sm text-yellow-500'>₮29,900.00</p>
                        <div className='w-28 h-6 flex justify-center items-center text-xs text-white font-bold rounded-md 2xl:mt-0 mt-3' style={{backgroundColor: '#993EFD'}}>
                          Худалдан авах
                        </div>
                      </div>
                  </div>
                </div>
              
              {/* item5 */}
                <div className="2xl:w-76 sm:w-60 w-56 h-full xl:flex-col flex justify-center xl:gap-0 sm:gap-10 xl:px-0 p-4">
                  <img className='xl:w-40 xl:h-44 sm:h-52 h-40' src={rectangle5} alt=''/>
                  <div classNam=''>
                    <p className='font-bold xs:text-xl text-sm'>Зохион бичлэгийн дэвтэр</p>
                      <p className="font-semibold text-xs mt-3" style={{color: '#B5B5B5'}}>Зуузуугийн найзууд зохион бичлэгийн дэвтэр</p>
                      <div className='2xl:flex items-center gap-3 mt-3'>
                        <p className='font-semibold text-sm text-yellow-500'>₮14,900.00</p>
                        <div className='w-28 h-6 flex justify-center items-center text-xs text-white font-bold rounded-md 2xl:mt-0 mt-3' style={{backgroundColor: '#993EFD'}}>
                          Худалдан авах
                        </div>
                      </div>
                  </div>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </>
    )
  }
}

export default Shop;