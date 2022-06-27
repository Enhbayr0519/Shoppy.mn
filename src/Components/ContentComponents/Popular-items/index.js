import React, { Component } from "react";
import "./style.css";
import hamtiinButeel from "../../images/hamtiinButeel.png";
import profile from "../../images/avatar.png";
import NFT1 from "../../images/NFT1.png"

class Popular extends Component {
    render() {
        return(
            <div>
                <div className="popular_section">
                    Popular items in last
                </div>
                
                <div className="popular_contain">
                    <div className="popular_items">
                        <div className="popular_item">
                            <div className="popular_item_contain">
                                <div className="popular_item_image">
                                    <img src={hamtiinButeel} alt="" />
                                </div>
                                <div className="popular_item_profile">
                                    <div className="popular_item_profile_item">
                                        <div className="popular_item_profile_item_image">
                                            <img src={profile} alt="" />
                                        </div>
                                        <div className="popular_item_profile_item_name">
                                            <p>Designing World</p>
                                            <p>@Designing World</p>
                                        </div>
                                    </div>
                                    <div className="popular_item_profile_price">
                                        <div className="popular_item_profile_sent">
                                            <i class="fa-solid fa-paper-plane"></i>
                                            Place bid
                                        </div>
                                        <p>0.06 EAC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="popular_item">
                            <div className="popular_item_contain">
                                <div className="popular_item_image">
                                    <img src={hamtiinButeel} alt="" />
                                </div>
                                <div className="popular_item_profile">
                                    <div className="popular_item_profile_item">
                                        <div className="popular_item_profile_item_image">
                                            <img src={profile} alt="" />
                                        </div>
                                        <div className="popular_item_profile_item_name">
                                            <p>Designing World</p>
                                            <p>@Designing World</p>
                                        </div>
                                    </div>
                                    <div className="popular_item_profile_price">
                                        <div className="popular_item_profile_sent">
                                            <i class="fa-solid fa-paper-plane"></i>
                                            Place bid
                                        </div>
                                        <p>0.06 EAC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="popular_items">
                        <div className="popular_item">
                            <div className="popular_item_contain">
                                <div className="popular_item_image">
                                    <img src={hamtiinButeel} alt="" />
                                </div>
                                <div className="popular_item_profile">
                                    <div className="popular_item_profile_item">
                                        <div className="popular_item_profile_item_image">
                                            <img src={profile} alt="" />
                                        </div>
                                        <div className="popular_item_profile_item_name">
                                            <p>Designing World</p>
                                            <p>@Designing World</p>
                                        </div>
                                    </div>
                                    <div className="popular_item_profile_price">
                                        <div className="popular_item_profile_sent">
                                            <i class="fa-solid fa-paper-plane"></i>
                                            Place bid
                                        </div>
                                        <p>0.06 EAC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="popular_item">
                            <div className="popular_item_contain">
                                <div className="popular_item_image">
                                    <img src={hamtiinButeel} alt="" />
                                </div>
                                <div className="popular_item_profile">
                                    <div className="popular_item_profile_item">
                                        <div className="popular_item_profile_item_image">
                                            <img src={profile} alt="" />
                                        </div>
                                        <div className="popular_item_profile_item_name">
                                            <p>Designing World</p>
                                            <p>@Designing World</p>
                                        </div>
                                    </div>
                                    <div className="popular_item_profile_price">
                                        <div className="popular_item_profile_sent">
                                            <i class="fa-solid fa-paper-plane"></i>
                                            Place bid
                                        </div>
                                        <p>0.06 EAC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                   
            </div>
        )
    }
}

export default Popular;