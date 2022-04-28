import React, { useState } from "react";
import "./styles.css";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const catFilter = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
console.log(catFilter);

function Restaurant() {
  const [menuData, setmenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(catFilter);
  // console.log(menuData);

  const filterItems = (category) => {
    if (category === "All") {
      setmenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setmenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItems={filterItems} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
}

export default Restaurant;
