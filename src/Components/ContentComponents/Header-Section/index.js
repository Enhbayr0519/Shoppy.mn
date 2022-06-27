import React, { Component } from "react";
import "./style.css"


class Section extends Component {
    render() {
        return(
            <>
                <div className="section">
                    <p>Digital arts are trends now.<br/> Welcome to the world of NFTs.</p>
                    <p>It's crafted with the latest trend of design & coded with all modern <br/> approaches. It's a robust & multi-dimensional usable template.</p>
                    <div className="section-scainer">
                        <i className="fa-solid fa-qrcode"></i>
                        View All Collections
                    </div>
                </div>

            </>
        )
    }
}

export default Section;