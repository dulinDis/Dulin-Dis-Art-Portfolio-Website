import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Burger = ({ handleToggle }) => (
  <div className="burger" onClick={handleToggle}>
    <AiOutlineMenu className="burger-menu" />
  </div>
);

export default Burger;
