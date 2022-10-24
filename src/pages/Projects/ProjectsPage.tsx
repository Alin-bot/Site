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

import projects from "../../resources/projects.json";

const Projects = () => {
  let color = "white";
  function getProjects(projects: any[]) {
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

                <Button
                  variant="ghost"
                  onClick={() => window.open(project.url)}
                >
                  View on github
                </Button>

                <Center mb={5}>
                  <Container maxW="700px">{project.description}</Container>
                </Center>

                <HStack>
                  {project.photo.map((photo: any) => (
                    <Image
                      key={photo}
                      height="35px"
                      src={`${photo}`}
                      alt="techno"
                    />
                  ))}
                </HStack>
              </Flex>
            );
          })}
        </VStack>
      </Box>
    );
  }

  return <div>{getProjects(projects)}</div>;
};

export default Projects;
