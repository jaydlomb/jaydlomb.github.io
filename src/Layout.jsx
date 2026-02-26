import { Link, Outlet } from 'react-router-dom'
import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaDiscord, FaEnvelope } from 'react-icons/fa'
import resumePDF from './assets/ResumeJL.pdf'

export default function Layout() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">

      {/* Header / Nav */}
      <Box as="header" bg="gray.900" px={8} py={4} borderBottom="1px solid" borderColor="gray.700">
        <Flex justify="space-between" align="center">
          <Box
            as={Link}
            to="/"
            fontWeight="bold"
            fontSize="lg"
            color="white"
            _hover={{ color: 'gray.300' }}
            textDecoration="none">
            Jayden Lombardi
          </Box>

          <HStack spacing={6}>
            {[
              { label: 'Projects', to: '/projects' },
              { label: 'Resume', to: '/resume' },
              { label: 'Contact', to: '/contact' },
            ].map(({ label, to }, index, arr) => (
            <>
              <Box
                key={to}
                as={Link}
                to={to}
                color="gray.300"
                _hover={{ color: 'white' }}
                fontSize="lg"
                fontWeight="bold"
              >
                {label}
              </Box>
              {index < arr.length - 1 && (<Text fontSize="lg">|</Text>)}
            </>
            ))}
          </HStack>
        </Flex>
      </Box>

      {/* Page Content */}
      <Box as="main" flex="1" px={8} py={10}>
        <Outlet />
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.900" px={8} py={6} borderTop="1px solid" borderColor="gray.700">
        <Flex justify="space-between" align="center">

          {/* Left - Resume Download */}
          <Box>
            <Text fontWeight="bold" color="white" fontSize="sm">Resume</Text>
            <a href={resumePDF} download="ResumeJL.pdf">
              <Text color="gray.400" fontSize="sm" _hover={{ color: 'white' }} cursor="pointer">Download</Text>
            </a>
          </Box>

          {/* Center - Social Icons */}
          <Box textAlign="center">
            <Text color="gray.400" fontSize="xs" mb={2}>Follow Me</Text>
            <HStack spacing={5} justify="center">
              <a href="https://www.linkedin.com/in/jayden-lombardi/" target="_blank" rel="noreferrer">
                <Box as={FaLinkedin} size="20px" color="white" _hover={{ color: 'blue.400' }} />
              </a>
              <a href="https://github.com/jaydlomb" target="_blank" rel="noreferrer">
                <Box as={FaGithub} size="20px" color="white" _hover={{ color: 'gray.400' }} />
              </a>
              <a href="https://discordapp.com/users/nyquil8" target="_blank" rel="noreferrer">
                <Box as={FaDiscord} size="20px" color="white" _hover={{ color: 'purple.400' }} />
              </a>
              <a href="mailto:jalombardi2004@gmail.com">
                <Box as={FaEnvelope} size="20px" color="white" _hover={{ color: 'red.400' }} />
              </a>
            </HStack>
          </Box>

          {/* Right - Copyright */}
          <Box textAlign="right">
            <Text color="white" fontSize="sm">&copy; 2026 Jayden Lombardi</Text>
            <Text color="gray.500" fontSize="xs">Powered by React + Chakra</Text>
          </Box>

        </Flex>
      </Box>

    </Box>
  )
}