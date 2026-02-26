import { useNavigate } from 'react-router-dom'
import { Box, Flex, Image, Heading, Text, Button } from '@chakra-ui/react'
import photo from '../assets/headshot.png'

export default function Home() {
  const navigate = useNavigate()

  return (
    <Flex align="center" justify="center" gap={16} px={10} minH="90vh" wrap="wrap">
      <Image src={photo} alt="Jayden" boxSize="600px" objectFit="cover" borderRadius="8px" />

      <Box>
        <Heading fontSize="7xl" fontWeight="900" lineHeight={1}>Hello!</Heading>
        <Text fontSize="xl" fontWeight="bold" mt={4}>I'm Jayden!</Text>
        <Text mt={2} maxW="360px" lineHeight={1.6}>
          Game Programmer always striving to create, learn, and code more!
        </Text>

        <Flex gap={5} mt={8}>
          <Button onClick={() => navigate('/resume')}
            borderRadius="full" boxSize="100px" bg="yellow.400"
            fontWeight="bold" fontSize="md" _hover={{ bg: 'yellow.300' }}>
            Resume
          </Button>
          <Button onClick={() => navigate('/projects')}
            borderRadius="full" boxSize="100px" bg="red.500"
            fontWeight="bold" fontSize="md" _hover={{ bg: 'red.400' }}>
            Projects
          </Button>
          <Button onClick={() => navigate('/contact')}
            borderRadius="full" boxSize="100px" bg="blue.500"
            fontWeight="bold" fontSize="md" _hover={{ bg: 'blue.400' }}>
            Contact
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}