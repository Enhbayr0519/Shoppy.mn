import React, { Component } from "react";
import NFT1 from "../../images/NFT1.png"
import profile from "../../images/avatar.png"
import rectangle1 from "../../images/Rectangle 1.png"
import rectangle2 from "../../images/Rectangle 2.png"
import rectangle3 from "../../images/Rectangle 3.png"
import rectangle4 from "../../images/Rectangle 4.png"
import "./style.css"

class Items1 extends Component {
    render() {
        return(
            <div className="item-contain">

                <div className="item">

                    <div className="item_title">
                        <p>Live Bid</p>
                        <div className="item_title_view_all"> View All Bid </div>
                    </div>

                    <div className="item_content_contain">
                            {/* item_content_1 */}
                        <div className="item_content">
                            <div className="item_content_image">
                                <img src={NFT1} alt=""/>
                            </div>

                            <div className="mobile_row">

                                <div className="item_content_information">

                                    <div className="item_content_information_profile">

                                        <div className="item_content_information_profile_image">
                                            <img src={profile} alt=""/>
                                        </div>

                                        <div className="item_content_information_profile_name">
                                            <p>Tortor</p>
                                            <p>@Tor_tor</p>
                                        </div>

                                    </div>

                                    <div className="item_content_information_evulation">

                                        <div className="item_content_information_evulation_name">
                                            <p>Current Bid</p>
                                            <p>0.784 EAC</p>
                                        </div>
                                        
                                    </div>

                                </div>

                                <div className="item_content_noots">
                                    <div className="item_content_noots_total">
                                        <i class="fa-solid fa-bag-shopping"></i>
                                        <p>3 stock avaible</p>
                                    </div>

                                    <div className="item_content_noots_heart">
                                        <i class='far fa-heart'></i>
                                    </div>
                                </div>

                                <div className="item_content_btn">
                                    Place Bid
                                </div>
                            </div>
                        </div>

                        {/* item_content_2 */}
                        <div className="item_content">
                            <div className="item_content_image">
                                <img src={NFT1} alt=""/>
                            </div>

                            <div className="mobile_row">

                                <div className="item_content_information">

                                    <div className="item_content_information_profile">

                                        <div className="item_content_information_profile_image">
                                            <img src={profile} alt=""/>
                                        </div>

                                        <div className="item_content_information_profile_name">
                                            <p>Tortor</p>
                                            <p>@Tor_tor</p>
                                        </div>

                                    </div>

                                    <div className="item_content_information_evulation">

                                        <div className="item_content_information_evulation_name">
                                            <p>Current Bid</p>
                                            <p>0.784 EAC</p>
                                        </div>
                                        
                                    </div>

                                </div>

                                <div className="item_content_noots">
                                    <div className="item_content_noots_total">
                                        <i class="fa-solid fa-bag-shopping"></i>
                                        <p>3 stock avaible</p>
                                    </div>

                                    <div className="item_content_noots_heart">
                                        <i class='far fa-heart'></i>
                                    </div>
                                </div>

                                <div className="item_content_btn">
                                    Place Bid
                                </div>
                            </div>
                        </div>

                            {/* item_content_3 */}
                        <div className="item_content">
                            <div className="item_content_image">
                                <img src={NFT1} alt=""/>
                            </div>

                            <div className="mobile_row">

                                <div className="item_content_information">

                                    <div className="item_content_information_profile">

                                        <div className="item_content_information_profile_image">
                                            <img src={profile} alt=""/>
                                        </div>

                                        <div className="item_content_information_profile_name">
                                            <p>Tortor</p>
                                            <p>@Tor_tor</p>
                                        </div>

                                    </div>

                                    <div className="item_content_information_evulation">

                                        <div className="item_content_information_evulation_name">
                                            <p>Current Bid</p>
                                            <p>0.784 EAC</p>
                                        </div>
                                        
                                    </div>

                                </div>

                                <div className="item_content_noots">
                                    <div className="item_content_noots_total">
                                        <i class="fa-solid fa-bag-shopping"></i>
                                        <p>3 stock avaible</p>
                                    </div>

                                    <div className="item_content_noots_heart">
                                        <i class='far fa-heart'></i>
                                    </div>
                                </div>

                                <div className="item_content_btn">
                                    Place Bid
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="nft_container">
                    <div className="mobile_flex">
                        <div className="nft">
                            <img src={rectangle1} alt=""/>
                        </div>

                        <div className="nft">
                            <img src={rectangle2} alt=""/>
                        </div>
                    </div>

                    <div className="mobile_flex">
                        <div className="nft">
                            <img src={rectangle3} alt=""/>
                        </div>
                        
                        <div className="nft">
                            <img src={rectangle4} alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Items1