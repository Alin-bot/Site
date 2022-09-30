import { Container, HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";
import { NavBar } from "../../components";
const PPicture = require("../../resources/bike_photo_1.jpg");

const More: React.FC = () => {
  return (
    <>
      <NavBar />
      <HStack wrap="wrap" justify="center">
        <VStack>
          <Container>
            I think life is all about balance, so I try to keep both my mind
            (with programming) and my body active as much as possible. My
            lifestyle includes trying new sports - so far I am really keen on
            bouldering, snowboarding, running and hiking. Besides all these
            sports, I must admit my real passion is mountain biking - I love
            everything about bikes, from maintaining mine at its optimum
            performance, recommending suitable bikes for my family and friends
            and going in adventures together with them.
          </Container>
        </VStack>
        <VStack p={5}>
          <Image
            src={`${PPicture}`}
            alt="first-picture"
            height="250px"
            width="370px"
            borderRadius="50px"
          />
        </VStack>
      </HStack>
    </>
  );
};

export default More;
