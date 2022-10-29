import React from "react";
import { HStack, Badge, Tag, WrapItem, Flex, Divider } from "@chakra-ui/react";

type SkillProps = {
  skill: { title: string; data: string[] };
};

export const Skill = (props: SkillProps) => {
  const { skill } = props;
  return (
    <Flex direction="column" w={[300, 300, 300, 800]}>
      <Divider />
      <HStack justify={["center", "center", "center", "start"]}>
        <WrapItem mb={2}>
          <Badge colorScheme="purple" p={1}>
            {skill.title}
          </Badge>
        </WrapItem>
      </HStack>

      <WrapItem>
        <HStack
          wrap={["wrap", "wrap", "wrap", "nowrap"]}
          rowGap={2}
          justify={["center", "center", "center", "start"]}
          mb={3}
          w={"100%"}
        >
          {skill.data.map((element) => (
            <Tag key={element} p={1}>
              {element}
            </Tag>
          ))}
        </HStack>
      </WrapItem>
    </Flex>
  );
};
