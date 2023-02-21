import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePizza, getPizzasList } from "../../actions/adminAction";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Success from "../../components/Success";

export default function PizzasList() {
  const usersstate = useSelector((state) => state.getPizzasListReducer);
  const { pizzas, error, loading } = usersstate;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPizzasList());
  }, []);

  return (
    <>
      <h2
        style={{
          margin: "0vh 10vh",
          fontSize: "25px",
          backgroundColor: "red",
          color: "white",
          padding: "15px",
        }}
      >
        Pizzas List
      </h2>

      <div
        className="flex-container"
        style={{
          color: "white",
          margin: "2px 50px",
          padding: "10px 5px",
          border: "2px solid gray",
          fontSize: "25px",
          backgroundColor: "gray",
        }}
      >
        <div className="w-100">Pizza ID</div>
        <div className="w-100">Pizza Name</div>
        <div className="w-100">Category</div>
        <div className="w-100">Options</div>
      </div>

      <div
        className="rows items justify-content-center"
        style={{ width: "100%" }}
      >
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong 😥" />
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-9 m-0 p-2 w-100 " key={pizza._id}>
                <div
                  className="flex-container p-4"
                  style={{ margin: "10px 50px", border: "2px solid gray" }}
                >
                  <div className="w-100">{pizza._id}</div>
                  <div className="w-100">
                    <img src={pizza.image} style={{ height: "10vh" }} />
                  </div>
                  <div className="w-100">{pizza.name}</div>
                  <div className="w-100">{pizza.category}</div>
                  <div className="w-100">
                    <button className="btn">
                      <i
                        style={{ color: "white" }}
                        className="fa fa-trash"
                        aria-hidden="true"
                        onClick={() => {
                          dispatch(deletePizza({ pizza }));
                        }}
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
