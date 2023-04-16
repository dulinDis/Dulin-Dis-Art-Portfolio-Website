import React from "react";
import { GiBrokenHeart } from "react-icons/gi";

const NotFound = () => {
  return (
    <div className="error-boundary-container">
      <p>Sorry this page is broken. Please try again later.</p>
      <div><GiBrokenHeart /></div>
    </div>
  );
};

export default NotFound;
