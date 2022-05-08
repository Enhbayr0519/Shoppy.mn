import React, { Component } from "react";

import "./style.css"

import Items from "../Data";

class Animes  extends Component {
    render() {

        const Animenuud = Items;
        Animenuud.map(el => {
            
        })

        return (
            <div className="ContainAnimes">
                <h2>Анимэнууд</h2>
                <Items />
            </div>
        )
    }
}

export default Animes;