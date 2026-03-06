import { Link, Outlet, useLocation } from 'react-router-dom'
import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaDiscord, FaEnvelope } from 'react-icons/fa'
import resumePDF from './assets/ResumeJL.pdf'

export default function Layout() {
  const location = useLocation()

  const navLinks = [
    { label: 'Projects', to: '/projects' },
    { label: 'Resume', to: '/resume' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <Box minH="100vh" display="flex" flexDirection="column" bg="#FFFFFF">

      {/* Header / Nav */}
      <Box as="header" bg="#000000" px={10} py={6}>
        <Flex justify="space-between" align="center">
          <Box
            as={Link}
            to="/"
            fontWeight="bold"
            fontSize="2xl"
            letterSpacing="tight"
            color="#e8f0fe"
            _hover={{ color: '#224AA0' }}
            textDecoration="none"
            transition="color 0.3s"
          >
            Jayden Lombardi
          </Box>

          <HStack spacing={10}>
            {navLinks.map(({ label, to }) => (
              <Box
                key={to}
                as={Link}
                to={to}
                position="relative"
                color={location.pathname === to ? '#224AA0' : '#e8f0fe'}
                _hover={{ color: '#224AA0' }}
                fontSize="lg"
                fontWeight="bold"
                letterSpacing="wide"
                transition="color 0.3s"
              >
                {label}
                <Box
                  position="absolute"
                  bottom="-6px"
                  left={0}
                  w={location.pathname === to ? '100%' : '0%'}
                  h="3px"
                  bg="#224AA0"
                  transition="width 0.3s"
                />
              </Box>
            ))}
          </HStack>
        </Flex>
      </Box>

      {/* Page Content */}
      <Box as="main" flex="1" px={8} py={10} bg="#FFFFFF">
        <Outlet />
      </Box>

      {/* Footer */}
      <Box as="footer" bg="#000000" px={10} py={10}>
        <Flex justify="space-between" align="center">

          {/* Left - Resume Download */}
          <Box>
            <Text fontWeight="bold" color="#e8f0fe" fontSize="md" letterSpacing="wide">
              Resume
            </Text>
            <a href={resumePDF} download="ResumeJL.pdf">
              <Text
                color="#3b5998"
                fontSize="md"
                _hover={{ color: '#224AA0' }}
                cursor="pointer"
                transition="color 0.3s"
              >
                Download
              </Text>
            </a>
          </Box>

          {/* Center - Social Icons */}
          <Box textAlign="center">
            <Text color="#e8f0fe" fontWeight="bold" fontSize="md" mb={4} letterSpacing="wide">
              Follow Me
            </Text>
            <HStack spacing={6} justify="center">
              <a href="https://www.linkedin.com/in/jayden-lombardi/" target="_blank" rel="noreferrer">
                <Box as={FaLinkedin} boxSize="28px" color="#e8f0fe" _hover={{ color: '#224AA0' }} transition="color 0.3s" />
              </a>
              <a href="https://github.com/jaydlomb" target="_blank" rel="noreferrer">
                <Box as={FaGithub} boxSize="28px" color="#e8f0fe" _hover={{ color: '#224AA0' }} transition="color 0.3s" />
              </a>
              <a href="https://discordapp.com/users/nyquil8" target="_blank" rel="noreferrer">
                <Box as={FaDiscord} boxSize="28px" color="#e8f0fe" _hover={{ color: '#224AA0' }} transition="color 0.3s" />
              </a>
              <a href="mailto:jalombardi2004@gmail.com">
                <Box as={FaEnvelope} boxSize="28px" color="#e8f0fe" _hover={{ color: '#224AA0' }} transition="color 0.3s" />
              </a>
            </HStack>
          </Box>

          {/* Right - Copyright */}
          <Box textAlign="right">
            <Text color="#e8f0fe" fontWeight="bold" fontSize="md">
              &copy; 2026 Jayden Lombardi
            </Text>
            <Text color="#3b5998" fontSize="sm">
              Powered by React + Chakra
            </Text>
          </Box>

        </Flex>
      </Box>

    </Box>
  )
}