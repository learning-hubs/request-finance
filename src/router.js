import React from "react";
import { HashRouter, Route } from "react-router-dom";
import App from "./App";
import Home from "./home";

export default (
    <>
        <a className="home-link" href="/">Index Page</a>
        <HashRouter>
            <div>
                <App/>
                <Route component={Home} exact={true} path='/'/>
            </div>
        </HashRouter>
    </>
)