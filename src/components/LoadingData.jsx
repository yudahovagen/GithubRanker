import React from "react";
import DotLoader from "react-spinners/ClipLoader";

const LoadingData = () => {
  return (
    <DotLoader css={{ display: "block", margin: "auto" }} size={60}></DotLoader>
  );
};

export default LoadingData;
