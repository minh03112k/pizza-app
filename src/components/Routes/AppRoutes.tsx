import {Route, Routes} from "react-router-dom";
import React from "react";
import {ROUTES} from "../constant/routes";
import Login from "../../pages/login";
import Home from "../../pages/home";
import Register from "../../pages/register";

export default function AppRoutes () {
    return (
        <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />}/>
            <Route path={ROUTES.HOME} element={<Home />}/>
            <Route path={ROUTES.REGISTER} element={<Register />}/>
            
        </Routes>
    )
}