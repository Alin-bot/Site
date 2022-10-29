import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
  UnorderedList,
  ListItem,
  Image,
  Container,
  Box,
} from "@chakra-ui/react";

type DescriptionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: { [key: string]: any };
};

export const DescriptionModal = (props: DescriptionModalProps) => {
  const { data, isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {data.title}
          <Image mt={15} w="70px" src={`${data.photo}`} alt="company" />
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Container mb={19}>{data.description}</Container>

          <Heading size="sm">Used Technologies:</Heading>

          <UnorderedList>
            {data.technologies.map((tech: string) => (
              <ListItem key={tech}>{`${tech}`}</ListItem>
            ))}
          </UnorderedList>
        </ModalBody>

        <ModalFooter>
          <Box>{`Start date: ${data.start} - End date: ${data.end}`}</Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
