import React, { lazy, Suspense } from "react";
import LoginPage from "./Login";
import WorkshopsList from "../Workshops/WorkshopsList/WorkshopsList";
import WorkshopDetails from "../Workshops/WorkshopDetails/WorkshopDetails";
import AppNavbar from "./AppNavbar";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";

import RequireAuth from "./RequireAuth";

import { isAuthenticated } from "../../services/auth";

// this is how we can bundle AppNavbar separately - we can do this, but without lazy and Suspense, such components become difficult to use
// let AppNavBar;
// import( './AppNavBar' ).then( m => {
//     AppNavBar = m.default;
// });

// import AddWorkshop from "../Workshops/WorkshopsList/AddWorkshop";
const AddWorkshop = lazy(() => import("../Workshops/AddWorkshop/AddWorkshop"));

const App = () => {
    return (
        <div>
            <AppNavbar />

            <Routes>
                {/* <Route path="**" element={<AppNavbar isAuthenticated={isAuthenticated()} />} /> */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/workshops"
                    element={
                        <RequireAuth>
                            <WorkshopsList />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/workshops/:id"
                    element={
                        <RequireAuth>
                            <WorkshopDetails />
                        </RequireAuth>
                    }
                />

                {/* when the bundle for AddWorkshops is being fetched, the fallback element is shown in the UI */}
                <Route
                    path="/workshops/add"
                    element={
                        <RequireAuth>
                            <Suspense
                                fallback={
                                    <div>
                                        Form to add workshop will be shown
                                    </div>
                                }
                            >
                                <AddWorkshop />
                            </Suspense>
                        </RequireAuth>
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
