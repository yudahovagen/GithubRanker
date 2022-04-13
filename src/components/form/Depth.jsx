import React from "react";
import { Select, MenuItem } from "@mui/material";

const Depth = ({ depth, setDepth }) => {
  return (
    <>
      <label style={{ margin: "1em" }}>
        Followers Depth
        <Select
          value={depth}
          label="Depth"
          onChange={(e) => setDepth(e.target.value)}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </label>
    </>
  );
};

export default Depth;
