import React, { Component } from "react";
import hamtiinButeel from "../../Components/images/nft_front.png"
import "./login.css"

class Login extends Component {
    render() {
        return (
            <div className="login_contain">
                <div className="login">
                    <div className="login_image">
                        <img src={hamtiinButeel} alt=""/>
                    </div>
                    <div className="login_item">
                        <div className="login_section">
                             Нэвтрэх
                        </div>

                        <div className="login_imformation">
                            <input type="text" placeholder="Name" value="Enhbayr"/>
                            <input type="password" placeholder="Password"/>
                            <p id="err">Нууц Үгээ Мартсан уу?</p>
                        </div>

                        <div className="login_checkbox">
                            <input type="checkBox"/>
                            Keep me logged in
                        </div>

                        <div className="login_button">
                            Нэвтрэх
                        </div>
                        
                        <div className="login_sign">
                            Don’t have an account?
                            <span id="red">
                                <p>Register</p>
                                <i class="fa-solid fa-arrow-right"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;