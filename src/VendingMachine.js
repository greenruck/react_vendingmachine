import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./VendingMachine.css";

import Skittles from "./Skittles";
import CokeZero from "./CokeZero";
import Plantains from "./Plantains";
import NavBar from "./NavBar";


function VendingMachine () {
    return (
        <div className="wrap">
            <BrowserRouter>
            <NavBar />
                <h1 className="header">Who's Hungry?</h1>

                <Link to="/skittles" className="link">Skittles</Link>
                    <Route path = "/skittles">
                        <Skittles />
                    </Route>

                <Link to="/cokezero" className="link">Coke Zero</Link>
                    <Route path="/cokezero">
                        <CokeZero />
                    </Route>

                <Link to="/plantains" className="link">Plantains</Link>
                    <Route path="/plantains">
                        <Plantains />
                    </Route>
            </BrowserRouter>
        </div>
    );
}

export default VendingMachine;