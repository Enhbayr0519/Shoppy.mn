import React, { Component } from 'react';
import bg_image from "../../../images/home/header/background 1.png"
import txt_img from "../../../images/home/header/txt.png"
import rectangle from "../../../images/home/header/rectangle.png"
import "./bg_img.css"

class Bg_img extends Component {


    state = {width: 0, height: 0, moveX: '', moveY: ''};

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    }) 
  };

  handleMouseMove = (e) => {
    const {width, height} =this.state;

    this.setState({
      moveX: ((width / 2) - e.nativeEvent.clientX) * 0.1 + 'px',
      moveY: ((height / 2) - e.nativeEvent.clientY) * 0.1+ 'px'
    })
  }
    
    render() {

        const { moveX, moveY } = this.state;

        return (
            <>
            <div className='w-full h-screen flex justify-center items-center  overflow-hidden relative '>
                <div className="w-44 2xl:block hidden"></div>
                {/* <div 
                    className='bg lg:flex hidden' 
                    onMouseMove={this.handleMouseMove}
                    style={{marginLeft: moveX, marginTop: moveY}}
                /> */}
                    <img className="bg lg:ml-8" 
                        onMouseMove={this.handleMouseMove}
                        style={{marginLeft: moveX, marginTop: moveY}} src={bg_image} alt="" 
                    />
                

                <div className='sm:mb-0 lg:mt-80 sm:mb-52 mb-80 z-0 flex justify-center items-center box-border' onMouseMove={this.handleMouseMove}>
                    <img className='2xl:h-44 lg:h-32 md:h-28 sm:h-16 h-12' src={txt_img} alt=""/>
                    <img className="sm:w-2/6 w-2/5" src={rectangle} alt=""/>
                </div>
            </div>
        </>
    )}
}

export default Bg_img ;  