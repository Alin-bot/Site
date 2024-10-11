import { Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { IEducation } from "../../api/model/Education/IEducation";

interface Props {
  education: IEducation;
}

export const EducationBox = (props: Props) => {
  const { education } = props;
  return (
    <VStack
      w={[300, 300, 550]}
      h={[150, 150, 100]}
      p={5}
      borderStyle="solid"
      borderWidth={5}
      borderRadius={20}
      borderColor="gray"
      justify="space-between"
    >
      <Heading size="md" textAlign="center">
        {education.name}
      </Heading>
      <Heading size="sm" textAlign="center">
        {education.title} {`(${education.start} -> ${education.end})`}
      </Heading>
    </VStack>
  );
};
