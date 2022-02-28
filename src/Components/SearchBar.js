import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { MiMenuCartState } from "../Context/Context";
import { mostrarError } from "./MostrarError";

const SearchBar = () => {
  const { setSearch, setCargandoCard } = MiMenuCartState();

  async function search(word) {
    try {
      await setSearch(word);
    } catch (error) {
      mostrarError("This term is incorrect, please try again!");
    }
  }

  return (
    <Formik
      initialValues={{ searchWord: "" }}
      validate={(valores) => {
        let errores = {};

        if (!valores.searchWord) {
          errores.searchWord = "Ingrese un termino de busqueda";
        } else if (!/([A-z]{3,})/.test(valores.searchWord)) {
          errores.searchWord = "Ingrese un termino de mas de dos letras";
        }

        return errores;
      }}
      onSubmit={(valores, { resetForm }) => {
        resetForm();
        console.log("Enviado");
        const word = valores.searchWord;
        setCargandoCard(false);
        search(word);
      }}
    >
      {({ errors }) => (
        <div className="search-bar-menu">
          <Form>
            <Field
              type="text"
              id="searchWord"
              placeholder="Enter a searching term, For example: chocolate, fruit, chicken"
              name="searchWord"
              className="input"
            />
            <ErrorMessage
              name="searchWord"
              className
              component={() => <div className="error">{errors.searchWord}</div>}
            />
            <button type="submit" className="buttonContacto">
              Search
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SearchBar;
