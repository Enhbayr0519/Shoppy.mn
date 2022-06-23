import React, { Component } from 'react';
import Header_menu from './Pages/HomePage/fixedMenu/fixedMenu';
import MenuComp from "./Components/home/header/menu/menu"
import Pages from './Pages/Pages';
import Birthday from './Pages/BirthdayPage';
import {Routes, Route } from 'react-router-dom';
import Footer_item from './Components/home/footer/footer/footer ';
import ZuuzuTxt from "./images/home/header/txt.png"
import { RightOutlined } from "@ant-design/icons"
import Side_menu from './Components/home/header/menu/side_menu/side_menu';
import Concert from './Pages/Concert';
import App from './Pages/ZuuzuuApp';
import Shop from './Pages/ZuuzuuShop';
import Question from './Pages/Question';
import Contact from './Pages/Contact';
import SideMenuPage from './Pages/sideMenuPage';

class MyPage extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       animate: false,
       hide: false,
       mobileMenuAnimate: false
    }
  }

showAnimate = () => {
  this.setState({animate: false})
}

closeAnimate = () => {
  this.setState({animate: true})
}

showHide = () => {
  this.setState({hide: false})
}

closeHide = () => {
  this.setState({hide: true})
}
    
  render() {
    return (
      <>
        <Header_menu />

          <div className='xl:hidden block fixed top-0 left-0 z-50'>
            {
              this.state.animate === false ? (
                <div className='transition duration-700 ease-in-out -translate-x-52'>
                  <Side_menu />
                </div>
              ) : (
                <div className='transition duration-700 ease-in-out translate-x-0'>
                  <Side_menu />
                  <div 
                    className='w-screen h-screen cursor-pointer' 
                    style={{backgroundColor: "#ffffff90"}} 
                    onClick={() => this.setState( this.showAnimate )}>
                  </div>
                </div>
              )
            }

            {
              this.state.hide === false ? (
                <div className=' w-full h-full flex justify-center items-center '>
                    {   
                      this.state.animate === false ? (
                          <div className='fixed bottom-1/4 left-1 flex gap-1 h-20 w-32 bg-white rounded-xl justify-center px-3 items-center text-xl hover:text-2xl transition ease-in-out text-gray-600 ml-2 shadow-2xl shadow-gray-900'>
                          <img src={ZuuzuTxt} onClick={() => this.setState(this.closeAnimate)} alt=""/>
                          <RightOutlined onClick={() => this.setState(this.closeAnimate)}/>
                        </div>
                      ) : null
                    }
                </div>
              ) : null
            }

                
          </div> 

            <div>
              <div className='md:h-28 h-24'></div>
              <div className='w-full xl:h-36 md:h-40 h-28 flex flex-col justify-center items-center fixed top-0 z-10 bg-white shadow-2xl shadow-gray-400'>
                <MenuComp 
                  hide={this.state.hide}
                  closeHide={this.closeHide}
                  showHide={this.showHide}
                />
              </div>
            </div>

            <Routes>
              <Route path='/' element={<Pages />}/>
              <Route path='/birth' element={<Birthday />}/>
              <Route path='/concert' element={<Concert />}/>
              <Route path='/app' element={<App />}/>
              <Route path='/shop' element={<Shop />}/>
              <Route path='/question' element={<Question />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='/zuuzuu' element={<SideMenuPage />}/>
              <Route path='/guriguri' element={<SideMenuPage />}/>
              <Route path='/dirdir' element={<SideMenuPage />}/>
              <Route path='/owow' element={<SideMenuPage />}/>
              <Route path='/tortor' element={<SideMenuPage />}/>
            </Routes>

            <div className='flex'>
              <div className="w-40 xl:block hidden"></div>
              <Footer_item />
            </div>
        {/* </Router> */}
      </>
    )
  }
}

export default MyPage ;