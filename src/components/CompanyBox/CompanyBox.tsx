import {
  Box,
  Button,
  Heading,
  VStack,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import React from "react";

import { DescriptionModal } from "../index";

type Props = {
  data: { [key: string]: any };
}

export const CompanyBox = (props: Props) => {
  const { data } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack
      w={300}
      h={300}
      p={5}
      borderStyle="solid"
      borderWidth={5}
      borderRadius={20}
      borderColor="gray"
      justify="space-between"
    >
      <Heading size="md" textAlign="center">
        {data.title}
      </Heading>

      <Image w="70px" src={`${data.photo}`} alt="company" />
      <Box>{`${data.company} - ${data.location}`}</Box>
      <Box>{`(${data.type})`}</Box>
      <Box>{`${data.start} -> ${data.end}`}</Box>

      <DescriptionModal isOpen={isOpen} onClose={onClose} data={data} />
      <Button justifySelf="end" onClick={onOpen}>
        View details
      </Button>
    </VStack>
  );
};
