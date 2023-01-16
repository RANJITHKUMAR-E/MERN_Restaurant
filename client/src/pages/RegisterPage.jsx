import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

export default function RegisterPage() {
  const [name, setname] = useState("");
  const [email, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const registerstate = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerstate;

  const dispatch = useDispatch();
  function register() {
    if (password != cpassword) {
      alert("Passwords Not Matched ❗");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }
  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          {loading && <Loading />}
          {success && <Success success="User Registered Successfully" />}
          {error && <Error error="Email already registered" />}

          <h2 className="m-2" style={{ fontSize: "35px" }}>
            Registration
          </h2>
          <div>
            <input
              type="text"
              required
              placeholder="Name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
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
            <input
              type="text"
              required
              placeholder="Confirm Password"
              className="form-control"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />
            <button className="btn mt-3" onClick={register}>
              Register
            </button>
            <br />
            <h5 className="mt-2">
              Already User ?{" "}
              <a href="/login" style={{ textDecoration: "none" }}>
                login
              </a>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
