import React, { Component } from "react";
import axios from "../../Axios";
import "./style.css"

class Zahialga extends Component {

    state = {
        loading: false,
        price: []
    }

    componentDidMount = () => {
        this.setState({loading: true});
        axios.get("/orders.json").then(response => {
          let arr = Object.entries(response.data).reverse();
          arr.forEach(el => {
            // console.log(el[1].name + " ==> " + el[1].dun);
            this.state.price.push(el[1].dun)
          });
        }).catch(err => console.log(err)).finally(() => {
                this.setState({loading: false})
            })
    };

    // price = (props) => {
    //     console.log(props)
    // }
 
    render() {

        return (
            <div className="zahialga">

                <div className="section">
                    Таны захиалгын мэдээлэл
                </div>

                <div className="zahialganuud">
                   {
                      this.state.price.map(el => {
                          for(let i=0; i<=el.length; i++) {
                              console.log(i)
                          }
                      })
                   }
                </div>

                <h1 style={{marginTop: "3rem", textAlign: "center"}}>Манайхаар үйлчлүүлсэн танд баярлалаа.</h1>
                
            </div>
        )
    }
}

export default Zahialga;