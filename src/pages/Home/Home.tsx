import React from "react";
import {
  HStack,
  Image,
  VStack,
  Heading,
  Container,
  Wrap,
  Badge,
  Tag,
  WrapItem,
  Button,
  Divider,
  Text,
} from "@chakra-ui/react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

import { NavBar, CompanyBox, EducationBox } from "../../components/index";

import experience from "../../resources/experience.json";
import education from "../../resources/education.json";
import skills from "../../resources/skills.json";
import loving from "../../resources/loving.json";
const PPicture = require("../../resources/profile_photo.jpg");

function getEducation() {
  return (
    <>
      <Heading>Education</Heading>
      <Wrap justify="center" pb={20} pt={5}>
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
      <Wrap justify="center" pb={20} pt={5}>
        {experience.map((exp) => (
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
      <VStack justify="center" pb={20} pt={5}>
        {loving.map((tech) => (
          <Text>{tech.name}</Text>
        ))}
      </VStack>
    </>
  );
}

function getSkills() {
  return (
    <>
      <Heading>What I learned</Heading>
      <VStack pb={20} pt={5}>
        {skills.map((skill) => {
          return (
            <Wrap
              direction={["column", "column", "column", "row"]}
              w={[300, 300, 300, 800]}
            >
              <WrapItem>
                <Badge colorScheme="purple" p={1}>
                  {skill.title}
                </Badge>
              </WrapItem>

              <WrapItem>
                <HStack wrap={["wrap", "wrap", "wrap", "nowrap"]} spacing={3}>
                  {skill.data.map((tech) => (
                    <Tag key={tech} p={1}>
                      {tech}
                    </Tag>
                  ))}
                </HStack>
              </WrapItem>
            </Wrap>
          );
        })}
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
          <Heading size="md">alinvzt18@gmail.com</Heading>
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

const Home: React.FC = () => {
  return (
    <>
      <NavBar />

      <VStack>
        <HStack wrap="wrap" justify="center">
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
