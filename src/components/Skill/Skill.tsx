import React from "react";
import { Wrap, HStack, Badge, Tag, WrapItem } from "@chakra-ui/react";

interface Props {
  skill: { title: string; data: string[] };
}

export const Skill: React.FC<Props> = ({ skill }) => {
  return (
    <Wrap
      direction={["column", "column", "column", "row"]}
      w={[300, 300, 300, 800]}
    >
      <WrapItem>
        <Badge colorScheme="purple" p={1}>
          {skill.title}
        </Badge>
      </WrapItem>

      <WrapItem>
        <HStack wrap={["wrap", "wrap", "wrap", "nowrap"]} spacing={3}>
          {skill.data.map((tech) => (
            <Tag key={tech} p={1}>
              {tech}
            </Tag>
          ))}
        </HStack>
      </WrapItem>
    </Wrap>
  );
};
