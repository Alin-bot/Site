import { Heading, VStack, Box, Container } from "@chakra-ui/react";
import React from "react";

interface Props {
    education: { [key: string]: any };
}

export const EducationBox: React.FC<Props> = ({education}) => {
  return (
    <VStack
      w={[300, 300, 600]}
      h={[200, 200, 200]}
      p={5}
      borderStyle="solid"
      borderWidth={5}
      borderRadius={20}
      borderColor="gray"
      justify='space-between'
    >
        <Heading size='md' textAlign='center'>{education.name}</Heading>
        <Container textAlign='center'>{`${education.title}`}</Container>
        <Box>{`${education.start} -> ${education.end}`}</Box>
    </VStack>
  );
};
