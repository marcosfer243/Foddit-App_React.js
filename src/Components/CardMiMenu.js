import react, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { MiMenuCartState } from "../Context/Context";
import { BsFillTrashFill } from "react-icons/bs";
import { IoMdUndo } from "react-icons/io";

const CardMiMenu = ({ plato }) => {
  const [info, setInfo] = useState({});

  const {
    state: { menuCart },
    dispatch,
  } = MiMenuCartState();

  const platoId = plato.id;

  useEffect(() => {
    const cargarInfoPlato = async () => {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${platoId}/information?includeNutrition=false&apiKey=dcb08abe412b4d51b1074a7a9d5fa28b`
      );

      setInfo(data);

      return data;
    };

    cargarInfoPlato();
  }, []);

  return (
    <>
      <div className="card-mimenu">
        <img src={info.image} alt={info.title}></img>
        <div className="card-body">
          <h2>{info.title}</h2>
          <p>Price per serving: $ {info.pricePerServing}</p>
          <p>Preparation time: {info.readyInMinutes} mins</p>
          <p>Health Score: {info.healthScore} points</p>
          <select
            className="select-class"
            type="select"
            value={info.qty}
            onChange={(e) =>
              dispatch({
                type: "CHANGE_MIMENU_QTY",
                payload: {
                  id: info.id,
                  qty: e.target.value,
                },
              })
            }
          >
            <option selected>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>

          <BsFillTrashFill
            className="to-trash"
            onClick={() => {
              dispatch({
                type: "REMOVE_TO_MIMENU",
                payload: info,
              });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CardMiMenu;

/*<div className="card-mimenu">
<Card style={{ width: "18rem" }}>
  <Card.Img variant="top" src={info.image} />
  <Card.Body>
    <Card.Title>{info.title}</Card.Title>
    <Card.Text>{info.title}</Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>*/
