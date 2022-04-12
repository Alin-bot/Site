import React from 'react'
import { Link } from 'react-router-dom'
import { MdHome } from 'react-icons/md'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BiHappyAlt } from 'react-icons/bi'
import { Flex, Button, chakra } from '@chakra-ui/react'

export const NavBar: React.FC = () => {
  return (
    <chakra.header id="header">
      <Flex py="2" px="5" bg="black" justify="center">
        <Link to={`/`}>
          <Button leftIcon={<MdHome />} colorScheme="white">
            {" "}
            Home{" "}
          </Button>
        </Link>

        <Link to={`/projects`}>
          <Button
            leftIcon={<AiOutlineFundProjectionScreen />}
            colorScheme="white"
          >
            {" "}
            Projects{" "}
          </Button>
        </Link>

        <Link to={`/more`}>
          <Button leftIcon={<BiHappyAlt />} colorScheme="white">
            {" "}
            More{" "}
          </Button>
        </Link>
      </Flex>
    </chakra.header>
  );
};
