import React from "react";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

const Sidebar = (props) => {
  const { show, setShow, logout } = props;

  const handleHide = () => {
    console.log(setShow);
    setShow(!show);
    console.log("hola");
  };

  return (
    <>
      <div className={show ? "side-bar show" : "side-bar "} id="side-bar">
        <div
          style={{ cursor: "pointer" }}
          className="side-bar-btn2"
          onClick={handleHide}
        >
          <i className="fas fa-chevron-left"></i>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mimenu">My Order</Link>
          </li>
          <li>
            <Link to="/">
              <button className="logout-btn" onClick={logout}>
                <BiLogOut /> Logout
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
