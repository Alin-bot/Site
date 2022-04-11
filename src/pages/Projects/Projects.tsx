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
} from "@chakra-ui/react";

import { NavBar } from "../../components";

import "./Projects.css";
import projects from "../../resources/projects.json";

const Projects: React.FC = () => {
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
              <Flex direction="column" bg={color} align="center" py="5">
                <Heading size="md">{project.title}</Heading>

                <Button
                  variant="ghost"
                  onClick={() => window.open(project.url)}
                >
                  View on github
                </Button>

                <Container maxW='700px'>{project.description}</Container>

                <HStack>
                  {project.photo.map((photo: any) => (
                    <Image height="35px" src={`${photo}`} alt="techno" />
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
