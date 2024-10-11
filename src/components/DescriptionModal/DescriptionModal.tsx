import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Heading,
  UnorderedList,
  ListItem,
  Image,
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

        <ModalBody mb={5}>
          {data.description}

          <Heading size="sm" mt={5}>Used Technologies:</Heading>

          <UnorderedList>
            {data.technologies.map((tech: string) => (
              <ListItem key={tech}>{`${tech}`}</ListItem>
            ))}
          </UnorderedList>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
