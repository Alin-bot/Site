import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Heading,
  UnorderedList,
  ListItem,
  Image,
  Container,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: { [key: string]: any };
}

export const DescriptionModal: React.FC<Props> = ({ isOpen, onClose, data }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {data.title}
          <Image mt={15} w='70px' src={`${data.photo}`} alt='company'/>
        </ModalHeader>

        <ModalBody>
          <Container mb={19}>{data.description}</Container>
          
          <Heading size='sm'>
            Used Technologies:
          </Heading>

          <UnorderedList>
            {data.technologies.map((tech: string) => <ListItem>{`${tech}`}</ListItem>)}
          </UnorderedList>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
