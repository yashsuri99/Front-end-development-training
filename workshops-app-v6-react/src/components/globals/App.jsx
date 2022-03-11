import React from "react";
import WorkshopsList from "../Workshops/WorkshopsList/WorkshopsList";
import AddWorkshop from "../Workshops/WorkshopsList/AddWorkshop";
import AppNavbar from "./AppNavbar";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div>
            <AppNavbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/workshops" element={<WorkshopsList />} />
                <Route path="/workshops/add" element={<AddWorkshop />} />
            </Routes>
        </div>
    );
};

export default App;
