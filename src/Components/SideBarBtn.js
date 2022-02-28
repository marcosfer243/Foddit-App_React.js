import React from "react";

const SideBarBtn = (props) => {
  const { show, setShow } = props;

  const showClass = () => {
    setShow(!show);
    console.log("hola");
  };
  return (
    <div
      style={{ cursor: "pointer" }}
      className="side-bar-btn"
      onClick={showClass}
    >
      <i className={show ? "fas fa-chevron-down" : "fas fa-chevron-left"}></i>
    </div>
  );
};

export default SideBarBtn;
