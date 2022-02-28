import React, { useEffect } from "react";
import CardPlato from "../CardPlato";
import Loading from "../Loading";
import { MiMenuCartState } from "../../Context/Context";
import { MdOutlineManageSearch } from "react-icons/md";
import SearchBar from "../SearchBar";

const Menu = ({ cargandoUsuario }) => {
  const { platos, cargandoCard } = MiMenuCartState();

  return (
    <div>
      {cargandoUsuario ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <h1 className="card-menu-title">MENU</h1>
          <div className="menu-card-container">
            <SearchBar />
            {cargandoCard ? (
              <MdOutlineManageSearch className="waiting-glass" />
            ) : (
              <div className="menu-card-grid">
                {platos.map((plato) => {
                  return <CardPlato plato={plato} key={plato.id} />;
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
