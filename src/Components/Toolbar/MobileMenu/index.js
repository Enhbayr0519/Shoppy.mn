import React from "react";
import DropDown from "../DropdownMenu";

import  "./style.css";

const MobileMenu = props => (
    <div onClick={() => <DropDown type="type"/>} className="mobile_menu">
      <div></div>
      <div></div>
      <div></div>
    </div>
);

export default MobileMenu;