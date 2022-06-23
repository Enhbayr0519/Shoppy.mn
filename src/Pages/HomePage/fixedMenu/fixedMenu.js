import React, { Component } from 'react';
import Side_menu from '../../../Components/home/header/menu/side_menu/side_menu';
import Social_ikons from '../../../Components/home/header/menu/social_ikons/soical_ikons';
// import ZuuzuTxt from "../../../images/home/header/txt.png"
// import { RightOutlined } from "@ant-design/icons"

class Header_menu extends Component {
    
  render() {
    return (
      <>
            {/* Heroes */}
            <div className='absolute top-0 xl:block hidden'>
                <Side_menu />
            </div>

            {/* Social */}
            <div className=''>
              <Social_ikons />
            </div>
      </>
    )
  }
}

export default Header_menu ;