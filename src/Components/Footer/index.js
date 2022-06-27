import React, { Component } from 'react';
import "./style.css"
import image from "../images/nft_front.png"

class Footer extends Component {
    render() {
        return (
            <div className='footer-contain'>
                <div className='footer'>
                    <div className='footer-item'>
                        <h1>NFT</h1>
                        <p className='exp'>It's crafted with the latest trend of design & coded <br/> with all modern approaches.</p>
                        <span className='exp'> 
                            Call: +123 456 789 <br/>
                            Email: help@example.com
                        </span>
                        <h3>Join the community</h3>
                        <div className='ikonuud'>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-youtube"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        <div className='sub'>
                            <input type="text" placeholder='Enter email...'/>
                            <div className='btn'>Subscribe</div>
                        </div>
                    </div>
                    <div className='footer-image'>
                        <img src={image} alt=''/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;