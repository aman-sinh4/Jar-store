import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useCart } from "../Context/cart-context";
import { useTheme } from "../Context/theme-context";

function Navbar() {
  const { items } = useCart();
  const { theme, changeTheme } = useTheme();
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/">Home</Link>
        <button onClick={changeTheme}>{theme}</button>
        <ul className="navbar-items">
          <li>
            <Link className="nav-list bg-sky-500 hover:bg-sky-700" to="/login">
              Login
            </Link>
          </li>

          <li>
            <Link className="nav-list bg-sky-500 hover:bg-sky-700" to="/cart">
              Cart <span>{items} </span>qty
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
