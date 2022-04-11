import React from "react";
import { Button } from "@chakra-ui/react";

import { NavBar } from "../../components/index";

import "./Home.css";

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Button colorScheme='linkedin'>LinkedIn</Button>
    </>
  );
};

export default Home;
