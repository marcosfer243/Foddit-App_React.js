import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Sidebar from "./Components/Sidebar";
import React, { useState, useEffect } from "react";
import {
  getToken,
  setToken,
  initAxiosInterceptors,
  deleteToken,
} from "./Components/Helpers/auth-helper";
import axios from "axios";
import Home from "./Components/Views/Home";
import Menu from "./Components/Views/Menu";
import MiMenu from "./Components/Views/MiMenu";
import Loading from "./Components/Loading";
import Detail from "./Components/Views/Detail";
import PageNotFound from "./Components/Views/PageNotFound";
import SideBarBtn from "./Components/SideBarBtn";

// Desarrollar una aplicación para crear una carta de opciones de menús para un hotel que consumirá una API externa y mostrará diferentes atributos a nivel individual de cada plato
// y del menú finalizado.
// Consumir los endpoints de la siguiente API para realizar las distintas operaciones. Deberás autenticarte en la plataforma para obtener una ApiKey y poder realizar las peticiones.

initAxiosInterceptors();

function App() {
  const [isToken, setIsToken] = useState(null);
  const [cargandoUsuario, setCargandoUsuario] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function cargarUsuario() {
      if (!getToken()) {
        setCargandoUsuario(false);

        return;
      } else {
        setIsToken(getToken());
        setCargandoUsuario(false);
      }
    }
    cargarUsuario();
  }, []);

  const login = async (email, password) => {
    const { data } = await axios.post("http://challenge-react.alkemy.org/", {
      email,
      password,
    });
    setIsToken(data.token);
    setToken(data.token);
  };

  const logout = () => {
    setIsToken(null);
    deleteToken();
    console.log("Logout");
  };

  if (cargandoUsuario) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <NavBar isToken={isToken} logout={logout} />
      {isToken ? (
        <Sidebar show={show} setShow={setShow} logout={logout} />
      ) : null}
      {isToken ? <SideBarBtn show={show} setShow={setShow} /> : null}
      {isToken ? <LoginRoutes /> : <LogoutRoutes login={login} />}
    </BrowserRouter>
  );
}

const LoginRoutes = ({ cargandoUsuario }) => {
  return (
    <Routes>
      <Route path="/mimenu" element={<MiMenu />} />
      <Route path="/detail/:type" element={<Detail />} />
      <Route
        default
        path="/"
        element={<Menu cargandoUsuario={cargandoUsuario} />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

const LogoutRoutes = ({ login }) => {
  return (
    <Routes>
      <Route path="/" element={<Home login={login} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
export default App;
