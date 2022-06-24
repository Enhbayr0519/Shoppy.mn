import React, { Component } from "react";
import Menu from "./Components/Home/menu/headerMenu/menu";
import Home from "./Pages/Home/home";

class MyPage extends Component {

  render() {
    return (
      <div className="">
        <div className="z-50">
          <Menu />
        </div>
        <div className="w-full h-24"></div>
        <div className="flex">
          <div className="w-44 h-screen"></div>
          <Home />
        </div>
      </div>
    );
  }
}

export default MyPage;
