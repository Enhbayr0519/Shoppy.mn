import React, { Component } from "react";
import "./style.css"

class Header extends Component {
    render() {
        return (
          <div className="header-contain">
               <div className="header">

                    <div className="mobile-menu">
                         <i className="fa-solid fa-bars"></i>
                    </div>

                    <div className="menu">

                         <div className="logo">CRYNFT</div>

                         <div className="sub-menu">
                              <div className="menu-item">
                                   <p>Home</p>
                                   <i className="fa-solid fa-angle-down"></i>
                              </div>

                              <div className="menu-item">
                                   <p>Explore</p>
                                   <i className="fa-solid fa-angle-down"></i>
                              </div>
                              
                              <div className="menu-item">
                                   <p>Admin</p>
                                   <i className="fa-solid fa-angle-down"></i>
                              </div>

                              <div className="menu-item">
                                   <p>Pages</p>
                                   <i className="fa-solid fa-angle-down"></i>
                              </div>

                              <div className="menu-item">
                                   <p>Help Center</p>
                                   <i className="fa-solid fa-angle-down"></i>
                              </div>
                         </div>

                    </div>


                    <div className="create-contain">

                         <div className="search">
                              <input type='text' placeholder="Search"></input>
                              <i className="fa-solid fa-magnifying-glass"></i>
                         </div>

                         <div className="create">Create</div>

                    </div>

               </div>
          </div>
        )
    }
}

export default Header;