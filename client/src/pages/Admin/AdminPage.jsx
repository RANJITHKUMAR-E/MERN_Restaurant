import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import UsersList from "./UsersList";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import PizzasList from "./PizzasList";
import AddPizzaPage from "./AddPizzaPage";

export default function AdminPage() {
  return (
    <>
      <h1>WELCOME, This is ADMIN Section</h1>
      <div
        className="links justify-content-center"
        style={{ display: "flex", padding: "10px" }}
      >
        <a style={{ padding: "10px 20px" }} href="/admin/userslist">
          Users List
        </a>
        <a style={{ padding: "10px 20px" }} href="/admin/pizzaslist">
          PizzasList
        </a>
        <a style={{ padding: "10px 20px" }} href="/admin/addpizza">
          Add Pizzas
        </a>
        <a style={{ padding: "10px 20px" }} href="/admin/orderlist">
          Order List
        </a>
      </div>

      <div className="panels w-100 justify-content-center">
        <Routes>
          <Route path="usersList" exact element={<UsersList />} />
          <Route path="pizzaslist" exact element={<PizzasList />} />
          <Route path="addpizza" exact element={<AddPizzaPage />} />
        </Routes>
      </div>
    </>
  );
}
