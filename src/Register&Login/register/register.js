import React, { Component } from "react";
import hamtiinButeel from "../../Components/images/nft_front.png"
import "./register.css"

class Resgister extends Component {
    render() {
        return (
            <div className="register_contain">
                <div className="register">
                    <div className="register_image">
                        <img src={hamtiinButeel} alt=""/>
                    </div>
                    <div className="register_item">
                        <div className="register_section">
                             Бүртгүүлэх <br/> <span className="span">Join the community</span>
                        </div>

                        <div className="resgiter_imformation">
                            <input type="text" placeholder="Name" value="Enhbayr"/>
                            <input type="text" placeholder="Email"/>
                            <input type="text" placeholder="Password" />
                            <input type="text" placeholder="Confirm Password"/>
                            <input type="text" placeholder="Company Name"/>
                            <input type="text" placeholder="Role"/>
                        </div>

                        <div className="resgiter_checkbox">
                            <input type="checkBox"/>
                            I agree with Hub’s <span id="red">Terms, Privacy Pilocy</span> and <span id="red">E-Sign</span> consent.
                        </div>

                        <div className="resgiter_button">
                            Бүртгүүлэх
                        </div>
                        
                        <div className="register_sign">
                            Already have an account? 
                            <span id="red">
                                <p>Sign in </p>
                                <i class="fa-solid fa-arrow-right"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resgister;