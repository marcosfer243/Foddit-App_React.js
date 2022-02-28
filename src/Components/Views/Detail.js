import react, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { GiWheat, GiTomato } from "react-icons/gi";
import { BsClockHistory } from "react-icons/bs";
import { MdOutlineHealthAndSafety, MdOutlineAttachMoney } from "react-icons/md";
import { BiDish } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiMentalHealthFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";

const Detail = () => {
  const { type } = useParams();

  const [infoPlato, setInfoPlato] = useState({});

  useEffect(() => {
    const cargarInfoPlato = async () => {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${type}/information?includeNutrition=true&apiKey=dcb08abe412b4d51b1074a7a9d5fa28b`
      );

      setInfoPlato(data);

      return data;
    };

    cargarInfoPlato();

    return () => {};
  }, []);

  return (
    <div className="detail-container">
      <div className="detail">
        <h1>{infoPlato.title}</h1>
        <div className="detail-support">
          <div className="detail-img-title">
            <img src={infoPlato.image}></img>
          </div>
          <div className="detail-list">
            <ul>
              <li>
                <BsClockHistory /> Preparation time: {infoPlato.readyInMinutes}{" "}
                mins
              </li>
              <li>
                <MdOutlineHealthAndSafety /> Health Score:{" "}
                {infoPlato.healthScore} points
              </li>
              <li>
                <GiWheat /> Gluten free? : {infoPlato.glutenFree ? "Yes" : "No"}
              </li>
              <li>
                <GiTomato /> Vegan: {infoPlato.vegan ? "Yes" : "No"}
              </li>
              <li>
                <BiDish /> Number of servings: {infoPlato.servings}
              </li>
              <li>
                <MdOutlineAttachMoney /> Price per serving: $
                {infoPlato.pricePerServing}
              </li>
              <li>
                <FaRegMoneyBillAlt /> Cheap: {infoPlato.cheap ? "Yes" : "No"}
              </li>
              <li>
                <RiMentalHealthFill /> Healthy:{" "}
                {infoPlato.veryHealthy ? "Yes" : "No"}
              </li>
              <li>
                <IoIosPeople /> Popular: {infoPlato.veryPopular ? "Yes" : "No"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
