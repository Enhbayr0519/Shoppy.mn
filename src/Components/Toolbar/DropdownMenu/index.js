import React from "react";
import "./style.css"

const DropDown = props => (
    <div className="DropDown" 
        style={{
            opacity: props.type === "type" ? "1" : "0"
        }}
    ></div>
)

export default DropDown;