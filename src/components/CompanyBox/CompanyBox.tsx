import {
  Box,
  Button,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function DisplayDetails(data: { [key: string]: any }) {
  return (
    <>

    </>
  );
}

interface Props {
  data: { [key: string]: any };
}

const CompanyBox: React.FC<Props> = ({ data }) => {
  return (
    <VStack
      w={300}
      h={300}
      p={5}
      borderStyle="solid"
      borderWidth={5}
      borderRadius={20}
      borderColor="gray"
    >
      <Heading size="md">{data.title}</Heading>

      <Box>{`${data.company} - ${data.location}`}</Box>
      <Box>{`(${data.type})`}</Box>
      <Box>{`${data.start} - ${data.end}`}</Box>

      <Button onClick={() => DisplayDetails(data)}>View details</Button>
    </VStack>
  );
};

export default CompanyBox;
