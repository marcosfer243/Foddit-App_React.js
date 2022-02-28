import { Link } from "react-router-dom";
import { Dropdown, Badge, Button } from "react-bootstrap";
import { GrRestaurant } from "react-icons/gr";
import { MiMenuCartState } from "../Context/Context";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BsFillTrashFill } from "react-icons/bs";

//import Swal from "sweetalert2";
//import withReactContent from "sweetalert2-react-content";

//const MySwal = withReactContent(Swal);

const NavBar = ({ isToken, logout }) => {
  return (
    <>
      <nav
        className="navbar 
        fixed-top bg-dark"
      >
        <div className="navbar-container">
          <Link
            style={{
              fontSize: "30px",
              color: "darkorange",
            }}
            className="navbar-brand"
            to="/"
          >
            Fooddit <GiForkKnifeSpoon />
          </Link>
          {isToken ? <NavPrivateRoutes logout={logout} /> : ""}
        </div>
      </nav>
    </>
  );
};

function NavPrivateRoutes({ logout }) {
  const {
    state: { menuCart },
    dispatch,
  } = MiMenuCartState();

  return (
    <>
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        {/* <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/">
            <button onClick={logout}>Logout</button>
  </Link>*/}
        <Dropdown>
          <Dropdown.Toggle
            className="nav-dropdown"
            style={{ color: "aliceblue", backgroundColor: "darkorange" }}
            id="dropdown-basic"
          >
            <span>My order: {menuCart.length}</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {menuCart.length > 0 ? (
              <>
                <Link to="mimenu">
                  <button className="btn-goto-mimenu">Go to My order</button>
                </Link>
              </>
            ) : (
              <span style={{ padding: 10 }}>Your order Empty!</span>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </ul>
    </>
  );
}

export default NavBar;
