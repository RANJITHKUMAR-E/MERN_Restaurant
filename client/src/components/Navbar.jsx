import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { curUser } = userState;
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded ">
        <a className="navbar-brand" href="/">
          PIZZA ZONE
        </a>
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
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {curUser.name}
                </a>
                <a
                  href="/orders"
                  className="btn"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Orders
                </a>
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
                  <a className="dropdown-item" href="#">
                    Order
                  </a>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </div>
              </div>
            ) : (
              <li className="nav-item active">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}
            <li className="nav-item">
              <a className="nav-link" href="/cart">
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
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
