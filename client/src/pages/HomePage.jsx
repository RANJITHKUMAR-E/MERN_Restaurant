import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Pizza from "../components/Pizza";

export default function HomePage() {
  const dispatch = useDispatch();
  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <>
      <div className="row items justify-content-center">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong 😥" />
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-3 m-3" key={pizza._id}>
                <div className="">
                  <Pizza pizza={pizza}></Pizza>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
