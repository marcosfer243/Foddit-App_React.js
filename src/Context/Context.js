import react, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { mimenuReducer } from "./Reducer";
import { mostrarError } from "../Components/MostrarError";

//import faker from "@faker-js/faker";
const MiMenuContext = createContext();

const Context = ({ children }) => {
  const [cargandoCard, setCargandoCard] = useState(true);
  const [platos, setPlatos] = useState([]);
  const [search, setSearch] = useState(null);
  //const [miPlatos, setMiPlatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=dcb08abe412b4d51b1074a7a9d5fa28b`
        );

        setPlatos(data.results);
      } catch (error) {
        mostrarError("The actual term is not correct!");
      }
    };
    fetchData();
  }, [search]);

  const initialState = {
    menuCart: [],
  };

  const [state, dispatch] = useReducer(mimenuReducer, initialState);

  return (
    <MiMenuContext.Provider
      value={{
        platos,
        cargandoCard,
        setCargandoCard,
        state,
        dispatch,
        setSearch,
        search,
      }}
    >
      {children}
    </MiMenuContext.Provider>
  );
};

export default Context;

export const MiMenuCartState = () => {
  return useContext(MiMenuContext);
};

/*import react, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { mimenuReducer } from "./Reducer";
//import faker from "@faker-js/faker";
const MiMenuContext = createContext();
console.log(MiMenuContext);

const Context = ({ children }) => {
  const [cargandoCard, setCargandoCard] = useState(true);
  const [platos, setPlatos] = useState([]);
  //const [miPlatos, setMiPlatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.spoonacular.com/recipes/complexSearch?query=Cheese&apiKey=a27752442f3842de8bfb9f66fc717102"
        );
        console.log(data.results);
        setCargandoCard(false);
        setPlatos(data.results);
      } catch (error) {}
    };

    fetchData();
  }, []);

  console.log(platos);

  return (
    <MiMenuContext.Provider value={{ platos }}>
      {children}
    </MiMenuContext.Provider>
  );
};

export default Context;

export const MiMenuCartState = () => {
  return useContext(MiMenuContext);
};*/
