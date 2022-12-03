import React from "react";
import Loader from "../loader/loader.component";

const FallbackLoader = () => {
  return (
    <div className="fallback-loader">
      <Loader />
    </div>
  );
};

export default FallbackLoader;
