import React from "react"
import { Footer } from "./Components/Footer"
import { HeaderSection } from "./Components/HeaderSection"
import { Menu } from "./Components/Menu"
import { ProductSection } from "./Components/ProductSection"
import { Login, Register } from "./Components/Login/login"
import { LoginSchool } from "./Components/Login/loginSchool"
import { Access } from "./Components/Login/acces"

export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menu: false,
      login: false
    }
  }

  openMenu = () => {
    this.setState({ menu: true })
  }

  closeMenu = () => {
    this.setState({ menu: false })
  }

  openLoginModal = () => {
    this.setState({ login: true })
  }

  closeLoginModal = () => {
    this.setState({ login: false })
    console.log(this.state.login)
  }

  render() {

    return (
      <div className="flex flex-col items-center justify-center">
        <div className="w-full h-full bg-[#F9FAFB]">
          <Menu
            menu={this.state.menu}
            openMenu={this.openMenu}
            closeMenu={this.closeMenu}
            openLoginModal={this.openLoginModal} />
          <HeaderSection />
        </div>
        <ProductSection />
        <Footer />
        <div className={this.state.login == true ? "opacity fixed bg-white rounded-lg top-[13rem] shadow-2xl shadow-black z-50 bg-opacity-95 transition-opacity duration-300" : 'hidden'}>
          <Login />
        </div>
        <div className={this.state.login == true ? "fixed top-0 z-40 w-full h-full bg-white/50 cursor-pointer" : "hidden"} onClick={() => this.closeLoginModal()}></div>
        <div className="px-1 py-5 my-20 transition-opacity duration-300 bg-white rounded-lg shadow-2xl opacity shadow-black bg-opacity-95">
          <LoginSchool />
        </div>

        <div className="px-1 py-5 transition-opacity duration-300 bg-white rounded-lg shadow-2xl opacity shadow-black bg-opacity-95">
          <Access />
        </div>
      </div>
    )
  }
}
