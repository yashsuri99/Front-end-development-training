import React, { lazy, Suspense } from "react";
import WorkshopsList from "../Workshops/WorkshopsList/WorkshopsList";
import AppNavbar from "./AppNavbar";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";

// import AddWorkshop from "../Workshops/WorkshopsList/AddWorkshop";
const AddWorkshop = lazy(() =>
    import("../Workshops/WorkshopsList/AddWorkshop")
);

const App = () => {
    return (
        <div>
            <AppNavbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/workshops" element={<WorkshopsList />} />

                {/* when the bundle for AddWorkshops is being fetched, the fallback element is shown in the UI */}
                <Route
                    path="/workshops/add"
                    element={
                        <Suspense
                            fallback={
                                <div>Form to add workshop will be shown</div>
                            }
                        >
                            <AddWorkshop />
                        </Suspense>
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
