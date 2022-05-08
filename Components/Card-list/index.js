import React from "react";
import { Card } from "../Card";

import "./style.css"

export const CardList = props => {
    return (
        <>
            <div className="card-list">
                {
                    props.robots.map((el) => (
                        <Card key={el.id} robot={el} />
                    ))
                }
            </div>
        </>
    )
}