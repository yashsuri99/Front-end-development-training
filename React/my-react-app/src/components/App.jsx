import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Main from './Main';

import "./App.scss";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className='sidebar-and-main'>
                    <Sidebar />
                    <Main />
                </div>
                
            </div>
        );
    }
}

export default App;