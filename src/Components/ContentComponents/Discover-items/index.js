import React, { Component } from "react";
import "./style.css"
import NFT1 from "../../images/NFT1.png"
import profile from "../../images/avatar.png"


class Discover extends Component {
    render() {
        return(
          <div className="discover-contain">
                <div className="discover">
                    <div className="discover-header">
                        Discover items
                    </div>

                    <div className="category-contain">
                        <div className="category">
                            <div className="category-item">
                                <div className="status">Status</div>
                                <div className="category-item-sort">
                                    <p>Buy now</p>
                                    <i className="fa-solid fa-sort-down"></i>
                                </div>
                            </div>

                            <div className="category-item">
                                <div className="status">Categories</div>
                                <div className="category-item-sort">
                                    <p>Art</p>
                                    <i className="fa-solid fa-sort-down"></i>
                                </div>
                            </div>
                        </div>

                        <div className="category">
                            <div className="category-item">
                                <div className="status">Discovers</div>
                                <div className="category-item-sort">
                                    <p>All</p>
                                    <i className="fa-solid fa-sort-down"></i>
                                </div>
                            </div>

                            <div className="category-item">
                                <div className="status">Sort By</div>
                                <div className="category-item-sort">
                                    <p>Recently Added</p>
                                    <i className="fa-solid fa-sort-down"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 1 */}
                    <div className="dis">
                        <div className="dis_content_contain">
                            <div className="dis_item1">
                                {/* dis_content_1 */}
                                <div className="dis_content">
                                    <div className="dis_content_image">
                                        <img src={NFT1} alt=""/>
                                    </div>

                                    <div className="mobile_row">
                                        <div className="dis_content_noots">
                                            <div className="dis_content_noots_total">
                                                <i class="fa-solid fa-bag-shopping"></i>
                                                <p>3 stock avaible</p>
                                            </div>

                                            <div className="dis_content_noots_heart">
                                                <i class='far fa-heart'></i>
                                            </div>
                                        </div>

                                        <div className="dis_content_information">
                                            <div className="dis_content_information_profile">
                                                <div className="dis_content_information_profile_image">
                                                    <img src={profile} alt=""/>
                                                </div>

                                                <div className="dis_content_information_profile_name">
                                                    <p>Tortor</p>
                                                    <p>@Tor_tor</p>
                                                </div>
                                            </div>
                                            <div className="dis_content_information_evulation">
                                                <div className="dis_content_information_evulation_name">
                                                    <p>Current Bid</p>
                                                    <p>0.784 EAC</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* dis_content_2 */}
                                <div className="dis_content">
                                    <div className="dis_content_image">
                                        <img src={NFT1} alt=""/>
                                    </div>

                                    <div className="dis_mobile_row">
                                        <div className="dis_content_noots">
                                            <div className="dis_content_noots_total">
                                                <i class="fa-solid fa-bag-shopping"></i>
                                                <p>3 stock avaible</p>
                                            </div>

                                            <div className="dis_content_noots_heart">
                                                <i class='far fa-heart'></i>
                                            </div>
                                        </div>

                                        <div className="dis_content_information">
                                            <div className="dis_content_information_profile">
                                                <div className="dis_content_information_profile_image">
                                                    <img src={profile} alt=""/>
                                                </div>

                                                <div className="dis_content_information_profile_name">
                                                    <p>Tortor</p>
                                                    <p>@Tor_tor</p>
                                                </div>
                                            </div>
                                            <div className="dis_content_information_evulation">
                                                <div className="dis_content_information_evulation_name">
                                                    <p>Current Bid</p>
                                                    <p>0.784 EAC</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dis_item2">
                                    {/* dis_content_3 */}
                                <div className="dis_content">
                                    <div className="dis_content_image">
                                        <img src={NFT1} alt=""/>
                                    </div>

                                    <div className="mobile_row">
                                        <div className="dis_content_noots">
                                            <div className="dis_content_noots_total">
                                                <i class="fa-solid fa-bag-shopping"></i>
                                                <p>3 stock avaible</p>
                                            </div>

                                            <div className="dis_content_noots_heart">
                                                <i class='far fa-heart'></i>
                                            </div>
                                        </div>

                                        <div className="dis_content_information">
                                            <div className="dis_content_information_profile">
                                                <div className="dis_content_information_profile_image">
                                                    <img src={profile} alt=""/>
                                                </div>

                                                <div className="dis_content_information_profile_name">
                                                    <p>Tortor</p>
                                                    <p>@Tor_tor</p>
                                                </div>
                                            </div>
                                            <div className="dis_content_information_evulation">
                                                <div className="dis_content_information_evulation_name">
                                                    <p>Current Bid</p>
                                                    <p>0.784 EAC</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* dis_content_4 */}
                                <div className="dis_content">
                                    <div className="dis_content_image">
                                        <img src={NFT1} alt=""/>
                                    </div>

                                    <div className="mobile_row">
                                        <div className="dis_content_noots">
                                            <div className="dis_content_noots_total">
                                                <i class="fa-solid fa-bag-shopping"></i>
                                                <p>3 stock avaible</p>
                                            </div>

                                            <div className="dis_content_noots_heart">
                                                <i class='far fa-heart'></i>
                                            </div>
                                        </div>

                                        <div className="dis_content_information">
                                            <div className="dis_content_information_profile">
                                                <div className="dis_content_information_profile_image">
                                                    <img src={profile} alt=""/>
                                                </div>

                                                <div className="dis_content_information_profile_name">
                                                    <p>Tortor</p>
                                                    <p>@Tor_tor</p>
                                                </div>
                                            </div>
                                            <div className="dis_content_information_evulation">
                                                <div className="dis_content_information_evulation_name">
                                                    <p>Current Bid</p>
                                                    <p>0.784 EAC</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                    </div>

                    {/* 2 */}


                    <div className="dis">
                        <div className="dis_content_contain">
                            <div className="dis_item1">
                                {/* dis_content_1 */}
                                <div className="dis_content">
                                    <div className="dis_content_image">
                                        <img src={NFT1} alt=""/>
                                    </div>

                                    <div className="mobile_row">
                                        <div className="dis_content_noots">
                                            <div className="dis_content_noots_total">
                                                <i class="fa-solid fa-bag-shopping"></i>
                                                <p>3 stock avaible</p>
                                            </div>

                                            <div className="dis_content_noots_heart">
                                                <i class='far fa-heart'></i>
                                            </div>
                                        </div>

                                        <div className="dis_content_information">
                                            <div className="dis_content_information_profile">
                                                <div className="dis_content_information_profile_image">
                                                    <img src={profile} alt=""/>
                                                </div>

                                                <div className="dis_content_information_profile_name">
                                                    <p>Tortor</p>
                                                    <p>@Tor_tor</p>
                                                </div>
                                            </div>
                                            <div className="dis_content_information_evulation">
                                                <div className="dis_content_information_evulation_name">
                                                    <p>Current Bid</p>
                                                    <p>0.784 EAC</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* dis_content_2 */}
                                <div className="dis_content">
                                    <div className="dis_content_image">
                                        <img src={NFT1} alt=""/>
                                    </div>

                                    <div className="dis_mobile_row">
                                        <div className="dis_content_noots">
                                            <div className="dis_content_noots_total">
                                                <i class="fa-solid fa-bag-shopping"></i>
                                                <p>3 stock avaible</p>
                                            </div>

                                            <div className="dis_content_noots_heart">
                                                <i class='far fa-heart'></i>
                                            </div>
                                        </div>

                                        <div className="dis_content_information">
                                            <div className="dis_content_information_profile">
                                                <div className="dis_content_information_profile_image">
                                                    <img src={profile} alt=""/>
                                                </div>

                                                <div className="dis_content_information_profile_name">
                                                    <p>Tortor</p>
                                                    <p>@Tor_tor</p>
                                                </div>
                                            </div>
                                            <div className="dis_content_information_evulation">
                                                <div className="dis_content_information_evulation_name">
                                                    <p>Current Bid</p>
                                                    <p>0.784 EAC</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dis_item2">
                                    {/* dis_content_3 */}
                                <div className="dis_content">
                                    <div className="dis_content_image">
                                        <img src={NFT1} alt=""/>
                                    </div>

                                    <div className="mobile_row">
                                        <div className="dis_content_noots">
                                            <div className="dis_content_noots_total">
                                                <i class="fa-solid fa-bag-shopping"></i>
                                                <p>3 stock avaible</p>
                                            </div>

                                            <div className="dis_content_noots_heart">
                                                <i class='far fa-heart'></i>
                                            </div>
                                        </div>

                                        <div className="dis_content_information">
                                            <div className="dis_content_information_profile">
                                                <div className="dis_content_information_profile_image">
                                                    <img src={profile} alt=""/>
                                                </div>

                                                <div className="dis_content_information_profile_name">
                                                    <p>Tortor</p>
                                                    <p>@Tor_tor</p>
                                                </div>
                                            </div>
                                            <div className="dis_content_information_evulation">
                                                <div className="dis_content_information_evulation_name">
                                                    <p>Current Bid</p>
                                                    <p>0.784 EAC</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* dis_content_4 */}
                                <div className="dis_content">
                                    <div className="dis_content_image">
                                        <img src={NFT1} alt=""/>
                                    </div>

                                    <div className="mobile_row">
                                        <div className="dis_content_noots">
                                            <div className="dis_content_noots_total">
                                                <i class="fa-solid fa-bag-shopping"></i>
                                                <p>3 stock avaible</p>
                                            </div>

                                            <div className="dis_content_noots_heart">
                                                <i class='far fa-heart'></i>
                                            </div>
                                        </div>

                                        <div className="dis_content_information">
                                            <div className="dis_content_information_profile">
                                                <div className="dis_content_information_profile_image">
                                                    <img src={profile} alt=""/>
                                                </div>

                                                <div className="dis_content_information_profile_name">
                                                    <p>Tortor</p>
                                                    <p>@Tor_tor</p>
                                                </div>
                                            </div>
                                            <div className="dis_content_information_evulation">
                                                <div className="dis_content_information_evulation_name">
                                                    <p>Current Bid</p>
                                                    <p>0.784 EAC</p>
                                                </div>
                                            </div>
                                        </div>
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

export default Discover;