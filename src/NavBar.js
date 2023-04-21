import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        VendingMachine
      </NavLink>
      <NavLink exact to="/skittles">
        Skittles
      </NavLink>
      <NavLink exact to="/cokezero">
        Coke Zero
      </NavLink>
      <NavLink exact to="/plantains">
        Plantain Chips
      </NavLink>
    </nav>
  );
}

export default NavBar;
