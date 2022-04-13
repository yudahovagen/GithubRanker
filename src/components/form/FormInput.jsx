import React from "react";
import { Input } from "@mui/material";

const FormInput = ({ usersNum, setUsersNum, handleBlur }) => {
  return (
    <>
      <label>Number of Users to Generate: </label>
      <Input
        value={usersNum}
        size="small"
        onChange={(e) =>
          setUsersNum(e.target.value === "" ? "" : Number(e.target.value))
        }
        style={{ margin: "1em" }}
        onBlur={handleBlur}
        inputProps={{
          step: 1,
          min: 1,
          max: 30,
          type: "number",
          "aria-labelledby": "input-slider",
        }}
      />
    </>
  );
};

export default FormInput;
