import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import CardMiMenu from "../CardMiMenu";
import Swal from "sweetalert2";
import { MiMenuCartState } from "../../Context/Context";

const MiMenu = () => {
  const { state } = MiMenuCartState();

  const { menuCart } = state;

  const [total, setTotal] = useState();
  const [averageHealthScore, setAverageHealthScore] = useState();
  const [averageTime, setAverageTime] = useState();
  const [emptyCart, setEmptyCart] = useState(true);

  useEffect(() => {
    setTotal(
      parseInt(
        menuCart.reduce(
          (acc, curr) => acc + Number(curr.pricePerServing) * curr.qty,
          0
        ) * 10,
        10
      ) / 10
    );
    setAverageHealthScore(
      parseInt(
        menuCart.reduce(
          (acc, curr) => acc + Number(curr.healthScore) / menuCart.length,
          0
        ) * 10,
        10
      ) / 10
    );
    setAverageTime(
      parseInt(
        menuCart.reduce(
          (acc, curr) => acc + Number(curr.readyInMinutes) / menuCart.length,
          0
        ) * 10,
        10
      ) / 10
    );
    if (menuCart.length > 0) {
      setEmptyCart(false);
    }
  }, [menuCart]);

  const handleNotify = () => {
    Swal.fire({
      title: "Congrats!",
      text: "Your order has been confirmed",
      icon: "success",
      confirmButtonText: "Ok",
      footer: '<a href="/">Back to Home</a>',
    });
  };

  return (
    <>
      <h1 className="mimenu-title">My order</h1>
      <div className="mimenu-container">
        <div className="card-grid-container">
          {emptyCart ? (
            <h1>Your order cart is empty!</h1>
          ) : (
            <div className="card-grid">
              {menuCart.map((cart) => {
                return <CardMiMenu key={cart.id} plato={cart} />;
              })}
            </div>
          )}
        </div>
        <div className="total-features">
          <h1>Total: ${total}</h1>
          <p> Average health Score: {averageHealthScore} points </p>
          <p>Average preparation time: {averageTime} mins</p>
          <button onClick={handleNotify}>Confirm Order</button>
        </div>
      </div>
    </>
  );
};

export default MiMenu;
