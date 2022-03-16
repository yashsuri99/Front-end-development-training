import React from "react";

const Sidebar = ({ setSectionId }) => {
    return (
        <div className="sidebar">
            <div>
                <a href="#section-1" onClick={() => setSectionId("section-1")}>
                    Section 1
                </a>
            </div>
            <div>
                <a href="#section-2" onClick={() => setSectionId("section-2")}>
                    Section 2
                </a>
            </div>
            <div>
                <a href="#section-3" onClick={() => setSectionId("section-3")}>
                    Section 3
                </a>
            </div>
            <div>
                <a href="#section-4" onClick={() => setSectionId("section-4")}>
                    Section 4
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
