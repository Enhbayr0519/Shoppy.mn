import axios from "../../Axios";
import React, { Component } from "react";
import Spinner from "../../Components/General/Spinner";
import "./style.css";

class OrderPage extends Component {
    
    state = {
        orders: [],
        loading: false
    }
    
    componentDidMount() {
        this.setState({ loading: true });
        axios
        .get("/orders.json")
        .then(response => {
            this.setState({orders: Object.entries(response.data).reverse()});
        })
        .catch(err => console.log(err))
        .finally(() => {
            this.setState({ loading: false });
        });
      }

      render() {
        return (
            <div className="contain">
                <div className="section">Таны захиалгын мэдээлэл</div>
                {
                    this.state.loading ? (
                        <Spinner /> ): (
                            this.state.orders.map(el => {
                                    return (
                                        <div  className="Orts">
                                            <div className="Orts_child">Захиалагчийн нэр : {el[1].name}
                                                <div className="Orts_child">Мөнгөн дүн : {el[1].dun}</div>
                                                <div className="Orts_child">Хот : {el[1].hayag.city}</div>
                                                <div className="Orts_child">Байршил : {el[1].hayag.street}</div>
                                                {
                                                    Object.entries(el[1].orts).map(el => (
                                                        <div className="Orts_child">
                                                            {el[0] === "bacon" ? "Гахайн мах" : null}
                                                            {el[0] === "cheese" ? "Бяслаг" : null}
                                                            {el[0] === "meat" ? "Үхрийн мах" : null}
                                                            {el[0] === "salad" ? "Салад" : null}
                                                             : {el[1]}</div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            )
                    )
                },

                {/* {
                    this.state.orders.map(el => {
                            // <div key={el} className="totalPrice">Нийт дүн : {el[1].dun}</div>
                            console.log(el[1])
                        }
                    )
                } */}

                <div style={{fontSize: "26px", margin: "2rem", textAlign: "center"}}>Манайхаар үйлчлүүлсэн танд баярлалаа.</div>
            </div>
        )
    }
    }
    
    export default OrderPage;
    