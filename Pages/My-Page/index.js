import React, { Component } from "react";

import Menu from "../../Components/Menu/Contain";
import Contents from "../../Components/Contents/Animenuud/Contain"

class MyPage extends Component {
    render() {
        return (
            <>
                <Menu />
                <Contents />
            </>
        )    
    }
}

export default MyPage;