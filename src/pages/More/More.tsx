import { Button, Center, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const More: React.FC = () => {
  return (
    <Center h='100vh'>
      <VStack>
        <Heading size='lg'>To be continued..</Heading>
        <Link to={'/'}>
          <Button colorScheme={'yellow'}>Go Back</Button>
        </Link>
      </VStack>
    </Center>
    
  )
}

export default More