import React from "react";
import { Slider } from "@mui/material";

const FormSlider = ({ usersNum, setUsersNum }) => {
  return (
    <Slider
      value={usersNum}
      onChange={(e, newNum) => setUsersNum(newNum)}
      aria-labelledby="input-slider"
      defaultValue={usersNum}
      step={1}
      min={1}
      max={30}
      style={{ width: "25%", margin: "1em" }}
    />
  );
};

export default FormSlider;
