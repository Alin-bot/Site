import React from "react";
import {
  HStack,
  Image,
  VStack,
  Heading,
  Container,
  Wrap,
  Button,
  Divider,
  Text,
} from "@chakra-ui/react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

import {
  NavBar,
  CompanyBox,
  EducationBox,
  Skill,
} from "../../components/index";

import experience from "../../resources/experience.json";
import education from "../../resources/education.json";
import skills from "../../resources/skills.json";
import loving from "../../resources/loving.json";
const PPicture = require("../../resources/profile_photo.jpg");

function getEducation() {
  return (
    <>
      <Heading>Education</Heading>
      <Wrap justify="center" pb={20} pt={5} w={"90%"}>
        <EducationBox education={education[0]} />
        <EducationBox education={education[1]} />
      </Wrap>
    </>
  );
}

function getExperience() {
  return (
    <> 
      <Heading>Experience</Heading>
      <Wrap justify="center" pb={20} pt={5} w={"90%"}>
        {experience.reverse().map((exp) => (
          <CompanyBox key={exp.title} data={exp} />
        ))}
      </Wrap>
    </>
  );
}

function getLove() {
  return (
    <>
      <Heading>What I love to work with</Heading>
      <VStack justify="center" p={10} pb={20} pt={5}>
        {loving.map((tech) => (
          <>
            <HStack>
              <Image src={tech.photo} alt={"tech"} h={8}></Image>
              <Text>{tech.name}</Text>
            </HStack>
            <Container>{tech.description}</Container>
            <Divider />
          </>
        ))}
      </VStack>
    </>
  );
}

function getSkills() {
  return (
    <>
      <Heading>What I've learned so far</Heading>
      <VStack pb={20} pt={5}>
        {skills.map((skill) => (
          <Skill skill={skill}></Skill>
        ))}
      </VStack>
    </>
  );
}

function getContacts() {
  return (
    <>
      <Heading>Contacts</Heading>
      <Wrap
        align="center"
        direction={["column", "column", "row"]}
        pb={20}
        pt={5}
      >
        <VStack>
          <Heading size="md">alin.vezeteu91@gmail.com</Heading>
        </VStack>

        <Divider orientation="vertical" />

        <Button
          leftIcon={<AiFillLinkedin />}
          colorScheme={"linkedin"}
          onClick={() =>
            window.open("https://www.linkedin.com/in/alin-vezeteu-23b184196/")
          }
        >
          LinkedIn
        </Button>
        <Button
          leftIcon={<AiOutlineGithub />}
          colorScheme={"gray"}
          onClick={() => window.open("https://github.com/Alin-bot")}
        >
          Github
        </Button>
      </Wrap>
    </>
  );
}

const Home = () => {
  return (
    <>
      <NavBar />

      <VStack>
        <HStack wrap="wrap" justify="center">
          <VStack p={5}>
            <Heading size="lg" textAlign={"center"}>
              Alin-Alexandru Vezeteu
            </Heading>
            <Image
              src={`${PPicture}`}
              alt="profile-picture"
              height="350px"
              borderRadius="50px"
            />
          </VStack>

          <VStack>
            <Heading size="md" textAlign={"center"} w={[300, 300, 500]}>
              Bachelor’s Degree in Computer Science
            </Heading>
            <Divider></Divider>
            <Container>
              My strongest passion is programming and what intrigues me most
              from this vast field is the backend and the mental challenges
              given by it, in order to devolop a final project. I am also keen
              on discovering more frontend concepts.
            </Container>
          </VStack>
        </HStack>

        {getEducation()}

        {getExperience()}

        {getLove()}

        {getSkills()}

        {getContacts()}
      </VStack>
    </>
  );
};

export default Home;
