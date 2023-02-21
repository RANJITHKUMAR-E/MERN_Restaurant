import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function LoginPage() {
  const [email, setmail] = useState("");
  const [password, setpassword] = useState("");

  const loginstate = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginstate;

  useEffect(() => {
    if (localStorage.getItem("curUser")) {
      window.location.href = "/";
    }
  });

  const dispatch = useDispatch();
  function login() {
    const user = {
      email,
      password,
    };
    console.log(user);
    dispatch(loginUser(user));
  }
  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="m-2" style={{ fontSize: "35px" }}>
            Login
          </h2>

          {loading && <Loading />}
          {error && <Error error="Invalid Credentials" />}

          <div>
            <input
              type="text"
              required
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setmail(e.target.value);
              }}
            />
            <input
              type="text"
              required
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <button className="btn mt-3" onClick={login}>
              Login
            </button>
            <br />
            <h5 className="m-2">
              Having an account ?{" "}
              <a href="/register" style={{ textDecoration: "none" }}>
                SignUp
              </a>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
