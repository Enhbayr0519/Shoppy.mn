import React from "react";
import './style.css';

const OrderSummary = props => {
    return (
        <div className="contain">
            <h3>Таны захиалга</h3>
            <p>Таны сонгосон орц : </p>
            <ul>
                {Object.keys(props.ingredients).map(el => (
                    <li key={el}>
                        {props.ingredientsNames[el]} : {props.ingredients[el]}
                    </li>
                ))}
            </ul>

            <p><strong>Таны захиалгын дүн : {props.price}₮</strong></p>
            <p>Цаашаа үргэлжлүүлэх үү?</p>
            <div className="check">

                <div onClick={props.onCancel} className="check_btn refuse">
                    <i className="fa-solid fa-xmark"></i>
                </div>

                <div onClick={props.onContinue} className="check_btn continue">
                    <i className="fa-solid fa-check"></i>
                </div>

            </div>

        </div>
    )
}

export default OrderSummary;