import React, { Component } from "react";
import BuildControls from "../../Components/BuildControls";
import Burger from "../../Components/Burger";
import Modal from "../../Components/General/Modal";
import OrderSummary from "../../Components/General/OrderSummary";

const INGREDIENT_PRICES = {salad: 150, cheese: 250, bacon: 800, meat: 1500};
const INGREDIENT_NAMES = {
    salad: "Салад",
    cheese: "Бяслаг",
    bacon: "Гахайн мах",
    meat: "Үхрийн мах"
};

class BurgerPage extends Component {
    
    state = {
        ingredients : {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0 
        },

        totalPrice: 1000,
        purchasing: false,
        comfirmOrder: false

    };

    showComfirmModal = () => {
        this.setState({comfirmOrder: true});
    }

    closeComfirmModal = () => {
        this.setState({comfirmOrder: false});
    }

    continueOrder = () => {
        console.log('drgdla');
    }

    ortsNemeh = (type) => {
        console.log("==> : ", type);
        const newIngredients = {...this.state.ingredients};
        newIngredients[type]++;

        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type]

        this.setState({ 
            purchasing: true,
            totalPrice: newPrice, 
            ingredients: newIngredients,
        })
    }

    ortsHasah = (type) => {
        console.log("==> : ", type);
        const newIngredients = {...this.state.ingredients};
        newIngredients[type]--;

        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type]

        this.setState({ 
            purchasing: newPrice > 1000,
            totalPrice: newPrice, 
            ingredients: newIngredients})
    }

    render() {
        const disabledIngredients = {...this.state.ingredients}
        for(let key in disabledIngredients) {
            disabledIngredients[key] = disabledIngredients[key] <= 0
        }
        return (
            <div>
                <Modal closeComfirmModal={this.closeComfirmModal} show={this.state.comfirmOrder}>
                    <OrderSummary 
                        onCancel={this.closeComfirmModal}
                        onContinue={this.continueOrder}
                        price={this.state.totalPrice}
                        ingredientsNames={INGREDIENT_NAMES}
                        ingredients={this.state.ingredients}/>
                </Modal>
                <Burger orts={this.state.ingredients} />
                <BuildControls 
                    showComfirmModal={this.showComfirmModal}
                    ingredientsNames={INGREDIENT_NAMES}
                    disabled={!this.state.purchasing}
                    price={this.state.totalPrice} 
                    disabledIngredients={disabledIngredients} 
                    ortsNemeh={this.ortsNemeh} 
                    ortsHasah={this.ortsHasah}
                />
            </div>
        )
    }
}

export default BurgerPage;