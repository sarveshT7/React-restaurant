import { logDOM } from "@testing-library/react";
import React from "react";

function Navbar(props) {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {props.menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => props.filterItems(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
