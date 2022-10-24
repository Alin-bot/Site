import { Center, Container, HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";
import { NavBar } from "../../components";
import other_experience from "../../resources/other_experience.json";

const picture_1 = require("../../resources/bike_photo_1.jpg");
const picture_2 = require("../../resources/bike_photo_2.jpg");

const More = () => {
  return (
    <>
      <NavBar />

      <Image
        src={picture_2}
        alt="second_picture"
        opacity="60%"
        h={600}
        w="200vh"
        objectFit="cover"
        zIndex="-1"
        position="absolute"
      />

      <VStack mt={10}>
        <Container textColor="black" backgroundColor="white">
          I think life is all about balance, so I try to keep both my mind (with
          programming) and my body active as much as possible. My lifestyle
          includes trying new sports - so far I am really keen on bouldering,
          snowboarding, running and hiking. Besides all these sports, I must
          admit my real passion is mountain biking - I love everything about
          bikes, from maintaining mine at its optimum performance, recommending
          suitable bikes for my family and friends and going in adventures
          together with them.
        </Container>
      </VStack>


      {/* <VStack p={5} mt={[400]}>
        <Image
          src={picture_1}
          alt="first_picture"
          h="250px"
          borderRadius="50px"
        />
      </VStack> */}
    </>
  );
};

export default More;
