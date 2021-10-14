import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="blue">
      <ul>
        <li className="Red"><NavLink exact to="/">Anasayfa</NavLink></li>
        <li className="Red"><NavLink to="/Characters">Karakterler</NavLink></li>
        <li className="Red"><NavLink to="/Locations">Gezegenler</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;