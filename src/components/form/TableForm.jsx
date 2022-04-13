import React from "react";
import { Button } from "@mui/material";
import { Form } from "../styles/Main.styled";
import Depth from "./Depth";
import FormSlider from "./FormSlider";
import FormInput from "./FormInput";

const TableForm = ({
  handleSubmit,
  usersNum,
  setUsersNum,
  depth,
  setDepth,
}) => {
  const handleBlur = () => {
    if (usersNum < 1) {
      setUsersNum(1);
    } else if (usersNum > 30) {
      setUsersNum(30);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormSlider usersNum={usersNum} setUsersNum={setUsersNum} />
      <FormInput
        usersNum={usersNum}
        setUsersNum={setUsersNum}
        handleBlur={handleBlur}
      />
      <Depth depth={depth} setDepth={setDepth} />
      <Button variant="contained" type="submit">
        Generate
      </Button>
    </Form>
  );
};

export default TableForm;
