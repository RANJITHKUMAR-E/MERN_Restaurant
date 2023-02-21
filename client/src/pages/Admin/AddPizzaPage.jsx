import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../../actions/adminAction";
import Loading from "../../components/Loading";
import Success from "../../components/Success";
import Error from "../../components/Error";
import { render } from "react-dom";

export default function AddPizzaPage() {
  const [name, setname] = useState("");
  const [small, setsmall] = useState();
  const [medium, setmedium] = useState();
  const [large, setlarge] = useState();
  const [category, setcategory] = useState("");
  const [desc, setdesc] = useState("");
  const [image, setimage] = useState("");

  const pizzastate = useSelector((state) => state.addPizzaReducer);
  const { loading, success, error } = pizzastate;

  const dispatch=useDispatch();
  

  function handlePizza() {
    const pizza = {
      name: name,
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: { small },
          medium: { medium },
          large: { large },
        },
      ],
      category: category,
      image: image,
      desc: desc,
    };
    // console.log(pizza);
    
    dispatch(addPizza({ pizza }));
    render("/");
  }
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
        Add Pizzas
      </h2>
      <div className="row justify-content-center">
        {loading && <Loading />}
        {success && <Success success="Pizza Added Successfully" />}
        {error && <Error error="Cannot add the pizza" />}

        <div className="addPizzaForm col-md-6">
          <input
            type="text"
            required
            placeholder="Pizza Name"
            className="form-control"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            type="text"
            required
            placeholder="Small Varient Price"
            className="form-control"
            value={small}
            onChange={(e) => {
              setsmall(e.target.value);
            }}
          />
          <input
            type="text"
            required
            placeholder="Medium Varient Price"
            className="form-control"
            value={medium}
            onChange={(e) => {
              setmedium(e.target.value);
            }}
          />
          <input
            type="text"
            required
            placeholder="Large Varient Price"
            className="form-control"
            value={large}
            onChange={(e) => {
              setlarge(e.target.value);
            }}
          />
          {/* <input
            type="text"
            required
            placeholder="Category"
            className="form-control"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          /> */}
          <div className="radio-opt col-md-6 w-100">
            <label htmlFor="category">Pizza Category : </label>
            <input
              className="m-10"
              type="radio"
              id="veg"
              name="category"
              value={category}
              onClick={(e) => setcategory("Veg")}
            />
              Veg
            <input
              type="radio"
              id="non-veg"
              name="category"
              value={category}
              onClick={(e) => setcategory("Non-Veg")}
            />
              Non-Veg
          </div>

          <input
            type="text"
            required
            placeholder="Description"
            className="form-control"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
          <input
            type="text"
            required
            placeholder="Image URL"
            className="form-control"
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />
          <button className="btn mt-3" onClick={handlePizza}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}
