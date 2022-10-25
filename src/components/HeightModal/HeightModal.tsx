import React from "react";
import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
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
import { Field, Form, Formik } from "formik";

function HeightFormik() {
  interface Values {
    height: string;
  }

  function validateHeight(value: any) {
    let error;
    if (!value) {
      error = "Height is required";
    } else if (value < 0) {
      error = "Height must be greater than 0";
    } else if (/^(\d+.)*(\d+)$/.test(value) === false) {
      error = "Height must be a number";
    } else if (value === 0) {
      error = "It's impposible";
    }
    return error;
  }

  return (
    <Formik
      initialValues={{ height: "" }}
      onSubmit={(values: Values, actions) => {
        setTimeout(() => {
          alert("Your height is: " + values.height);
          actions.setSubmitting(false);
        }, 500);
      }}
    >
      {(props) => (
        <Form>
          <Field id="height" name="height" validate={validateHeight}>
            {({ field, form }: { field: any; form: any }) => (
              <FormControl
                isInvalid={form.errors.height && form.touched.height}
              >
                <Input {...field} placeholder="height" />
                <FormErrorMessage>{form.errors.height}</FormErrorMessage>
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

const ModalBox = (props: HeightModalProps) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Enter your height</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <HeightFormik />
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const HeightModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center mt={50}>
      <ModalBox isOpen={isOpen} onClose={onClose} />
      <Button colorScheme="yellow" onClick={onOpen}>
        Check your height
      </Button>
    </Center>
  );
};

export default HeightModal;
