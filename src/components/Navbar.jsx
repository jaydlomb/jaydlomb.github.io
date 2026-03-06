import { Link } from 'react-router-dom'
import { Flex, Box } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <Flex
      as="nav"
      gap={{ base: 4, md: 6 }}
      px={{ base: 4, md: 8 }}
      py={{ base: 3, md: 4 }}
      borderBottom="1px solid #ddd"
      bg="#fff"
      fontSize={{ base: 'sm', md: 'md' }}
      wrap="wrap"
    >
      <Box as={Link} to="/" _hover={{ color: '#224AA0' }} transition="color 0.2s">Home</Box>
      <Box as={Link} to="/resume" _hover={{ color: '#224AA0' }} transition="color 0.2s">Resume</Box>
      <Box as={Link} to="/contact" _hover={{ color: '#224AA0' }} transition="color 0.2s">Contact</Box>
    </Flex>
  )
}