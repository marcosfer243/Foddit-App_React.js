import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import Detail from "./Views/Detail";
import { mostrarError } from "../Components/MostrarError";
import { MiMenuCartState } from "../Context/Context";

const CardPlato = ({ plato }) => {
  const {
    state: { menuCart },
    dispatch,
  } = MiMenuCartState();

  const [info, setInfo] = useState({});

  const platoId = plato.id;

  useEffect(() => {
    const cargarInfoPlato = async () => {
      try {
        const { data } = await axios.get(
          `https://api.spoonacular.com/recipes/${platoId}/information?includeNutrition=false&apiKey=dcb08abe412b4d51b1074a7a9d5fa28b`
        );

        setInfo(data);

        return data;
      } catch (error) {
        mostrarError("The actual term has an error!");
      }
    };

    cargarInfoPlato();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 mt-3">
          <div className="card card-border " style={{ width: "18rem" }}>
            <img
              src={info.image}
              style={{ borderBottom: " 5px solid orange" }}
              alt={info.title}
            />
            <div className="card-body">
              <h4 className="card-title text-center">{info.title}</h4>
              <h5 className=" text-center">
                Puntaje de healthScore: {info.healthScore}
              </h5>
              <h5 className=" text-center">$ {info.pricePerServing}</h5>
              <h5 className=" text-center">
                Vegan: {info.vegan ? "Yes" : "No"}
              </h5>

              <div className="btns-card">
                {menuCart.some((p) => p.id === info.id) ? (
                  <button
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_TO_MIMENU",
                        payload: info,
                      });
                    }}
                    className="btn-remove"
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_MIMENU",
                        payload: info,
                      });
                    }}
                    /*onClick={selectRecipe}*/ className="btn-accept"
                  >
                    Add to cart
                  </button>
                )}
                <Link
                  to={{
                    pathname: `/detail/${plato.id}`,
                  }}
                >
                  <button className="btn-card">More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPlato;
