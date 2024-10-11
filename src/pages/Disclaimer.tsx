import React from "react";
import { Container, Heading, VStack } from "@chakra-ui/react";
import { NavBar } from "../components";

const DisclaimerPage = () => {
  return (
    <>
      <NavBar />

      <VStack>
        <Heading size="lg" textAlign={"center"}>
          Please read this disclaimer before proceeding with the information.
        </Heading>
        <Container>
            I am not an official trainer. Although I have a diploma as a
            "Mountaineering and Rock Climbing" instructor, I believe this is
            insufficient to share this information without a disclaimer. All the
            information here comes from various sources and personal knowledge.
            By reading this page and others I've created, and using this
            information for yourself or others, you acknowledge that I'm not
            responsible if you, those you've shared this information with, or
            those you've applied this information to, get hurt, die, or
            experience any adverse effects. Please don't share this information.
            Instead, choose approved sources and participate in official courses
            with certified trainers to learn more about climbing. Even if you
            haven't read this disclaimer, you agree to all of the above by
            continuing. Thank you, and stay safe!
        </Container>
      </VStack>
    </>
  );
};

export default DisclaimerPage;
