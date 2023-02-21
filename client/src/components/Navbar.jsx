import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";
import { Link } from "react-router-dom";

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { curUser } = userState;
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded ">
        <Link className="navbar-brand" to="/">
          PIZZA ZONE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse nav-left" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            {curUser ? (
              <div className="dropdown mt-2">
                <Link
                  to="#"
                  style={{ color: "black", textDecoration: "none" }}
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {curUser.name}
                </Link>

                <Link
                  to="/orders"
                  className="btn"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Orders
                </Link>
                <button
                  className="btn"
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                >
                  Logout
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link className="dropdown-item" to="/orders">
                    Order
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Logout
                  </Link>
                </div>
              </div>
            ) : (
              <li className="nav-item active">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
                {cartstate.cartItems.length > 0 ? (
                  <span
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      padding: "1px 7px",
                      borderRadius: "50%",
                      fontSize: "16px",
                      margin: "0px 2px",
                      textAlign: "center",
                    }}
                  >
                    {cartstate.cartItems.length}
                  </span>
                ) : (
                  " "
                )}
              </Link>
            </li>
            <li>
              <Link to="/admin">A</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
