import React, { Component } from "react";
import Items1 from "../ContentComponents/Content-items";
import Discover from "../ContentComponents/Discover-items";
import Drop from "../ContentComponents/Footer-items";
import Section from "../ContentComponents/Header-Section";
import Popular from "../ContentComponents/Popular-items";
import "./style.css"


class Content extends Component {
    render() {
        return(
            <div className="container">
                <Section />
                <Items1 />
                <Popular />
                <Discover />
                <Drop />
            </div>
        )
    }
}

export default Content;