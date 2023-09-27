import {Route, Routes} from "react-router-dom";
import React from "react";
import {ROUTES} from "../constant/routes";
import Login from "../../pages/login";

export default function AppRoutes () {
    return (
        <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />}/>
        </Routes>
    )
}