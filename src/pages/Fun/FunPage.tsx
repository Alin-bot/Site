import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { NavBar } from "../../components";
import { Field, Form, Formik } from "formik";

function HeightFormik() {
  function validateHeight(value: number) {
    let error;
    if (!value) {
      error = "Height is required";
    }
    return error;
  }

  return (
    <Formik
      initialValues={{ height: 0 }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert("Your height is: " + values.height);
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Field name="height" validate={validateHeight}>
            {({ field, form }: { field: any; form: any }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <Input {...field} placeholder="height" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Calculate
          </Button>
        </Form>
      )}
    </Formik>
  );
}

type HeightModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const HeightModal = (props: HeightModalProps) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Input your height</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <HeightFormik />
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const Fun = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <NavBar />
      <Center mt={50}>
        <HeightModal isOpen={isOpen} onClose={onClose} />
        <Button colorScheme="yellow" onClick={onOpen}>
          Check your height
        </Button>
      </Center>
    </>
  );
};

export default Fun;
