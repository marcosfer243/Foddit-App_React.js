import react from "react";
import { Link } from "react-router-dom";
import { BiErrorAlt } from "react-icons/bi";

const PageNotFound = () => {
  return (
    <>
      <div className="pagenotfound-container">
        <div className="error-404-container">
          <BiErrorAlt style={{ color: "gray", fontSize: "80px" }} />
          <h1>Error 404</h1>
          <h2>Page Not Found!</h2>
          <Link to="/">
            <button>To home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
