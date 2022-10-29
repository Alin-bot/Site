import React from "react";
import {
  Box,
  Container,
  HStack,
  VStack,
  Image,
  Heading,
  Flex,
  Button,
  Center,
} from "@chakra-ui/react";

import { NavBar } from "../../components";

import { IProject } from "./IProject";
import projectsList from "../../resources/projects.json";

const getGitButton = (url: string) => {
  return (
    <Button variant="ghost" onClick={() => window.open(url)}>
      View on github
    </Button>
  );
};

const getTechnologiesImg = (photos: string[]) => {
  return (
    <HStack gap={3}>
      {photos.map((photo: string) => (
        <Image key={photo} height="35px" src={photo} alt="techno" />
      ))}
    </HStack>
  );
};

const Projects = () => {
  let color = "white";
  const projects: IProject[] = projectsList;

  return (
    <Box>
      <NavBar />

      <VStack align="stretch">
        {projects.map((project, index: number) => {
          if (index % 2 === 0) {
            color = "white";
          } else {
            color = "gray.200";
          }

          return (
            <Flex
              key={index}
              direction="column"
              bg={color}
              align="center"
              py="5"
            >
              <Heading size="md">{project.title}</Heading>

              {getGitButton(project.url)}

              <Center mb={5}>
                <Container maxW="700px">{project.description}</Container>
              </Center>

              {getTechnologiesImg(project.TechnologyPhotos)}
            </Flex>
          );
        })}
      </VStack>
    </Box>
  );
};

export default Projects;
