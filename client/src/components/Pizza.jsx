import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Pizza({ pizza }) {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="pizza-cards shadow-lg p-3 mb-5 bg-white rounded"
        style={{ margin: "70px 50px" }}
      >
        <div onClick={handleShow}>
          <h1>{pizza.name}</h1>
          <img
            src={pizza.image}
            alt=""
            className="img-fluid"
            style={{ height: "15rem", width: "15rem" }}
          />
        </div>

        <div className="flex-container">
          <div className="w-100">
            <p>Varients</p>
            <select
              className="form-control"
              value={varient}
              onChange={(e) => {
                setvarient(e.target.value);
              }}
            >
              {pizza.varients.map((varient) => {
                return <option value={varient}>{varient}</option>;
              })}
            </select>
          </div>

          <div className="w-100">
            <p>Quantity</p>
            <select
              className="form-control"
              value={quantity}
              onChange={(e) => {
                setquantity(e.target.value);
              }}
            >
              {[...Array(10).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="flex-container">
          <div className="m-1 w-100">
            <h1 className="m-1">
              Prize : {pizza.prices[0][varient] * quantity} Rs/-{" "}
            </h1>
          </div>
          <div className="m-1 w-100">
            <button className="btn">ADD TO CART</button>
          </div>
        </div>

        <Modal show={show}>
          <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title>{pizza.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img
              src={pizza.image}
              className="img-fluid"
              style={{ height: "400px" }}
            />
            <p>{pizza.desc}</p>
          </Modal.Body>

          <Modal.Footer>
            <button className="btn" onClick={handleClose}>
              CLOSE
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
