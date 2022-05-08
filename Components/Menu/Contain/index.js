import React, { Component } from "react";

import "./style.css"

import Ikons from "../Ikons";

class Menu  extends Component {
    render() {
        return (
            <div className="MenuContain">
                <h1>Enhuush.mn</h1>
                <Ikons />
            </div>
        )
    }
}

export default Menu;