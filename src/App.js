import React, { Component } from 'react';
import "./App.css"
import Content from './Components/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Login from './Register&Login/login/login';
import Resgister from './Register&Login/register/register';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Header />
                <Content />
                <Footer />

                {/* Registration */}
                <Resgister />
                <Login />
            </div>
        )
    }
}

export default App;