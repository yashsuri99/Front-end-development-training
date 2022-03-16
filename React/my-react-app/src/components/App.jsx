import React, { Component } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Main from "./Main";

import "./App.scss";

class App extends Component {
    state = {
        sectionId: "section-1",
    };

    setSectionId = (sectionId) => {
        this.setState({});
    };
    render() {
        return (
            <>
                <Navbar />
                <div className="sidebar-and-main">
                    <Sidebar setSectionId={this.setSectionId}>
                        <Main sectionId={this.state.sectionId} />
                    </Sidebar>
                </div>
            </>
        );
    }
}

export default App;
