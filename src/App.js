import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";

import Skittles from "./Skittles";
import CokeZero from "./CokeZero";
import Plantains from "./Plantains";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="wrap">
            <BrowserRouter>
            <NavBar />
                <h1>Who's Hungry?</h1>

                <Link to="/skittles">Skittles</Link>
                <br></br>
                <Link to="/cokezero">Coke Zero</Link>
                <br></br>
                <Link to="/plantains">Plantains</Link>
                
                    <Route exact path = "/skittles">
                        <Skittles />
                    </Route>

                    <Route exact path="/cokezero">
                        <CokeZero />
                    </Route>

                    <Route exact path="/plantains">
                        <Plantains />
                    </Route>
            </BrowserRouter>
    </div>
  );
}
export default App;
