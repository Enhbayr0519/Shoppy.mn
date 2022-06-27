import React, { Component } from "react";
import "./style.css"
import hamtiinButeel from "../../images/hamtiinButeel.png";
import profile from "../../images/avatar.png";


class Drop extends Component {
    render() {
        return(
            <div className="drop_contain">

                {/* item1 */}
                <div className="drop">
                    <div className="drop_item">
                        <p>Today's Drops</p>
                        <div className="drop_item_content_contain">

                            {/* child_item1 */}
                            <div className="drop_item_contain">
                                <div className="drop_item_image">
                                    <img src={hamtiinButeel} alt="" />
                                </div>
                                <div className="drop_item_profile">
                                    <div className="drop_item_profile_item">
                                        <div className="drop_item_profile_item_image">
                                            <img src={profile} alt="" />
                                        </div>
                                        <div className="drop_item_profile_item_name">
                                            <p>Designing World</p>
                                            <p>@Designing World</p>
                                        </div>
                                    </div>
                                    <div className="drop_item_profile_price">
                                        <p>0.98 EAC</p>
                                        <div className="drop_item_profile_sent">
                                            <i class="fa-solid fa-chevron-down"></i>
                                            Place bid
                                        </div>
                                    </div>
                                </div>
                            </div>

                           {/* child_item2 */}
                            <div className="drop_item_contain">
                                <div className="drop_item_image">
                                    <img src={hamtiinButeel} alt="" />
                                </div>
                                <div className="drop_item_profile">
                                    <div className="drop_item_profile_item">
                                        <div className="drop_item_profile_item_image">
                                            <img src={profile} alt="" />
                                        </div>
                                        <div className="drop_item_profile_item_name">
                                            <p>Designing World</p>
                                            <p>@Designing World</p>
                                        </div>
                                    </div>
                                    <div className="drop_item_profile_price">
                                        <p>0.98 EAC</p>
                                        <div className="drop_item_profile_sent">
                                            <i class="fa-solid fa-chevron-down"></i>
                                            Place bid
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* child_item3 */}
                            <div className="drop_item_contain">
                                <div className="drop_item_image">
                                    <img src={hamtiinButeel} alt="" />
                                </div>
                                <div className="drop_item_profile">
                                    <div className="drop_item_profile_item">
                                        <div className="drop_item_profile_item_image">
                                            <img src={profile} alt="" />
                                        </div>
                                        <div className="drop_item_profile_item_name">
                                            <p>Designing World</p>
                                            <p>@Designing World</p>
                                        </div>
                                    </div>
                                    <div className="drop_item_profile_price">
                                        <p>0.98 EAC</p>
                                        <div className="drop_item_profile_sent">
                                            <i class="fa-solid fa-chevron-down"></i>
                                            Place bid
                                        </div>
                                    </div>
                                </div>
                            </div>
                            


                        </div>
                        <div className="drop_item_view" style={{color: "red"}}>
                            View All Drops
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>


                    {/* item2 */}
                    <div className="drop_item">
                        <p>Top Seller</p>
                        <div className="drop_item_content_contain">

                            {/* child_item1 */}
                            <div className="drop_item_contain">
                                <div className="drop_item_image">
                                    <img src={hamtiinButeel} alt="" />
                                </div>
                                <div className="drop_item_profile">
                                    <div className="drop_item_profile_item">
                                        <div className="drop_item_profile_item_image">
                                            <img src={profile} alt="" />
                                        </div>
                                        <div className="drop_item_profile_item_name">
                                            <p>Designing World</p>
                                            <p>@Designing World</p>
                                        </div>
                                    </div>
                                    <div className="drop_item_profile_price">
                                        <p>0.98 EAC</p>
                                        <div className="drop_item_profile_sent">
                                            <i class="fa-solid fa-chevron-down"></i>
                                            Place bid
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* child_item2 */}
                            <div className="drop_item_contain">
                                <div className="drop_item_image">
                                    <img src={hamtiinButeel} alt="" />
                                </div>
                                <div className="drop_item_profile">
                                    <div className="drop_item_profile_item">
                                        <div className="drop_item_profile_item_image">
                                            <img src={profile} alt="" />
                                        </div>
                                        <div className="drop_item_profile_item_name">
                                            <p>Designing World</p>
                                            <p>@Designing World</p>
                                        </div>
                                    </div>
                                    <div className="drop_item_profile_price">
                                        <p>0.98 EAC</p>
                                        <div className="drop_item_profile_sent">
                                            <i class="fa-solid fa-chevron-down"></i>
                                            Place bid
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* child_item3 */}
                            <div className="drop_item_contain">
                                <div className="drop_item_image">
                                    <img src={hamtiinButeel} alt="" />
                                </div>
                                <div className="drop_item_profile">
                                    <div className="drop_item_profile_item">
                                        <div className="drop_item_profile_item_image">
                                            <img src={profile} alt="" />
                                        </div>
                                        <div className="drop_item_profile_item_name">
                                            <p>Designing World</p>
                                            <p>@Designing World</p>
                                        </div>
                                    </div>
                                    <div className="drop_item_profile_price">
                                        <p>0.98 EAC</p>
                                        <div className="drop_item_profile_sent">
                                            <i class="fa-solid fa-chevron-down"></i>
                                            Place bid
                                        </div>
                                    </div>
                                </div>
                            </div>
                            


                        </div>
                        <div className="drop_item_view">
                            View All Sellers
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>

                    {/* item3 */}
                    <div className="drop_item">
                        <p>Top Buyer</p>
                        <div className="drop_item_content_contain">

                            {/* child_item1 */}
                            <div className="drop_item_contain">
                                <div className="drop_item_image">
                                    <img src={hamtiinButeel} alt="" />
                                </div>
                                <div className="drop_item_profile">
                                    <div className="drop_item_profile_item">
                                        <div className="drop_item_profile_item_image">
                                            <img src={profile} alt="" />
                                        </div>
                                        <div className="drop_item_profile_item_name">
                                            <p>Designing World</p>
                                            <p>@Designing World</p>
                                        </div>
                                    </div>
                                    <div className="drop_item_profile_price">
                                        <p>0.98 EAC</p>
                                        <div className="drop_item_profile_sent">
                                            <i class="fa-solid fa-chevron-down"></i>
                                            Place bid
                                        </div>
                                    </div>
                                </div>
                            </div>

                           {/* child_item2 */}
                            <div className="drop_item_contain">
                                <div className="drop_item_image">
                                    <img src={hamtiinButeel} alt="" />
                                </div>
                                <div className="drop_item_profile">
                                    <div className="drop_item_profile_item">
                                        <div className="drop_item_profile_item_image">
                                            <img src={profile} alt="" />
                                        </div>
                                        <div className="drop_item_profile_item_name">
                                            <p>Designing World</p>
                                            <p>@Designing World</p>
                                        </div>
                                    </div>
                                    <div className="drop_item_profile_price">
                                        <p>0.98 EAC</p>
                                        <div className="drop_item_profile_sent">
                                            <i class="fa-solid fa-chevron-down"></i>
                                            Place bid
                                        </div>
                                    </div>
                                </div>
                            </div>

                           {/* child_item3 */}
                            <div className="drop_item_contain">
                                <div className="drop_item_image">
                                    <img src={hamtiinButeel} alt="" />
                                </div>
                                <div className="drop_item_profile">
                                    <div className="drop_item_profile_item">
                                        <div className="drop_item_profile_item_image">
                                            <img src={profile} alt="" />
                                        </div>
                                        <div className="drop_item_profile_item_name">
                                            <p>Designing World</p>
                                            <p>@Designing World</p>
                                        </div>
                                    </div>
                                    <div className="drop_item_profile_price">
                                        <p>0.98 EAC</p>
                                        <div className="drop_item_profile_sent">
                                            <i class="fa-solid fa-chevron-down"></i>
                                            Place bid
                                        </div>
                                    </div>
                                </div>
                            </div>
                            


                        </div>
                        <div className="drop_item_view">
                            View All Buyer's
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className="getStart">
                    <p>Resources for getting started with Funto.</p>
                    <div className="getStart-btn">
                        <p>Get Started</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Drop;