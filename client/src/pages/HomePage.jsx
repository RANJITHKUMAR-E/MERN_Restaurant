import React from "react";
import Pizza from "../components/Pizza";
import pizzas from "../pizzas";
export default function HomePage() {
  return (
    <>
      <div className="row">
        {pizzas.map((pizza) => {
          return (
            <div className="col-md-4">
              <div className="">
                <Pizza pizza={pizza}></Pizza>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
