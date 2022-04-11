import React from "react";
import {
  HStack,
  Image,
  VStack,
  Heading,
  Container,
  Wrap
} from "@chakra-ui/react";

import { NavBar } from "../../components/index";
import CompanyBox from "../../components/CompanyBox/CompanyBox";

import "./Home.css";
import experience from "../../resources/experience.json";
const PPicture = require("../../resources/profile_photo.jpg");

function getExperience() {
  return (
    <Wrap justify='center'>
      {experience.map(exp => <CompanyBox key={exp.title} data={exp}/>)}
    </Wrap>
  )
}

const Home: React.FC = () => {
  return (
    <>
      <NavBar />

      <VStack>
        <HStack wrap="wrap" justify='center'>
          <VStack p={5}>
            <Image
              src={`${PPicture}`}
              alt="profile-picture"
              height="300px"
              width="275px"
              borderRadius="50px"
            />
            <Heading size="lg">Vezeteu Alin</Heading>
          </VStack>

          <Container>
            My strongest passion is programming and what intrigues me most from
            this vast field is the backend and the mental challenges given by
            it, in order to devolop a final project. I am also keen on
            discovering more frontend concepts.
          </Container>
        </HStack>

        {getExperience()}
      </VStack>
    </>
  );
};

export default Home;
