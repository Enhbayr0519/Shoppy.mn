import React, { Component } from "react";
import "./MyRedux.css"

const MyReducer = (state = 0, action) => {
    if(action.type === "INCREMENT") {
        return {value: state.value + action.payload.val}
    } else if(action.type === "DECREMENT") {
        return {value: state.value - 1}
    }
};

class MyRedux extends Component {

    state = {
        value: 0
    };

    dispatch(action) {
        this.setState(prevState => MyReducer(prevState, action));
    };

    Increment = () => {
        const action = {
            type: "INCREMENT",
            payload: {
                name: "Naraa",
                val: 2
            }
        };

        this.dispatch(action);
    }

    Decrement = () => {
        const action = {
            type: "DECREMENT"
        };

        this.dispatch(action);
    }

    render() {
        return (
            <div className="Redux">
                <div>Value : {this.state.value}</div>
                <button onClick={this.Increment}> + </button>
                <button onClick={this.Decrement}> - </button>
            </div>
        )
    }
}

export default MyRedux;