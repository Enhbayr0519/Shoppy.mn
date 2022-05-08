import React from "react";

import "./style.css";

export const Card = props => {
    return (
        <>
            <div className="card-container">
                <img src={`https://robohash.org/${props.robot.id}?set=set2&size=180x180`} />
                <h1>{props.robot.name}</h1>
                <p>{props.robot.email}</p>
                <p>{props.robot.phone}</p>
            </div>
        </>
    )
}