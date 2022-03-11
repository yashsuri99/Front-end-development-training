import React, { Component } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Main from "./Main";

import "./App.scss";

class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="sidebar-and-main">
                    <Sidebar />
                    <Main />
                </div>
            </>
        );
    }
}

export default App;