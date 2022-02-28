import React, { useState } from "react";
import { mostrarError } from "../Components/MostrarError";

const Login = ({ login }) => {
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(e) {
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value,
    });

    console.log(dataLogin);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(dataLogin.email, dataLogin.password);
    } catch (error) {
      console.log(error);
      mostrarError("The login has an error, try again!");
    }
  };

  return (
    <>
      <div className="container-form-Login">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder=" Email"
            name="email"
            className="form-control"
            style={{ width: "20rem" }}
            value={dataLogin.email}
            onChange={handleInputChange}
            required
          />

          <input
            type="password"
            placeholder=" Password"
            name="password"
            className="form-control"
            style={{ width: "20rem" }}
            value={dataLogin.password}
            onChange={handleInputChange}
            maxLength="20"
            required
          />
          <button type="submit" className="btn-login">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
