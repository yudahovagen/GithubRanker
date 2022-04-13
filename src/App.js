import React from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Wrapper } from "./components/styles/Wrapper.styled";

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <Main />
      <Footer/>
    </Wrapper>
  );
};

export default App;
