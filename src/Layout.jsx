import { Link, Outlet, useLocation } from 'react-router-dom'
import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaDiscord, FaEnvelope } from 'react-icons/fa'
import resumePDF from './assets/ResumeJL.pdf'

export default function Layout() {
  const location = useLocation()

  const navLinks = [
    { label: 'Resume', to: '/resume' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <Box minH="100vh" display="flex" flexDirection="column" bg="#FFFFFF">

      {/* Header / Nav */}
      <Box as="header" bg="#000000" px={{ base: 4, md: 10 }} py={{ base: 4, md: 6 }}>
        <Flex justify="space-between" align="center">
          <Box
            as={Link}
            to="/"
            fontWeight="bold"
            fontSize={{ base: 'lg', md: '2xl' }}
            letterSpacing="tight"
            color="#e8f0fe"
            _hover={{ color: '#224AA0' }}
            textDecoration="none"
            transition="color 0.3s"
          >
            Jayden Lombardi
          </Box>

<HStack gap={{ base: 6, md: 8 }}>
  {navLinks.map(({ label, to }, index) => (
    <>
      {index > 0 && (
        <Box h="24px" w="3px" bg="#e8f0fe" />
      )}
      <Box
        key={to}
        as={Link}
        to={to}
        position="relative"
        color={location.pathname === to ? '#224AA0' : '#e8f0fe'}
        _hover={{ color: '#224AA0' }}
        fontSize={{ base: 'lg', md: '2xl' }}
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
    </>
  ))}
</HStack>
        </Flex>
      </Box>

      {/* Page Content */}
      <Box as="main" flex="1">
        <Outlet />
      </Box>

{/* Footer */}
      <Box as="footer" bg="#000000" px={{ base: 4, md: 10 }} py={{ base: 6, md: 10 }}>
        <Flex 
          justify="space-between"
          align="center"
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 6, md: 0 }}
        >

          {/* Left - Social Icons */}
          <Box textAlign={{ base: 'center', md: 'left' }}>
            <Text color="#e8f0fe" fontWeight="bold" fontSize={{ base: 'sm', md: 'md' }} mb={{ base: 2, md: 4 }} letterSpacing="wide">
              Follow Me
            </Text>
            <HStack spacing={{ base: 4, md: 6 }} justify={{ base: 'center', md: 'flex-start' }}>
              <a href="https://www.linkedin.com/in/jayden-lombardi/" target="_blank" rel="noreferrer">
                <Box as={FaLinkedin} boxSize={{ base: '22px', md: '28px' }} color="#e8f0fe" _hover={{ color: '#224AA0' }} transition="color 0.3s" />
              </a>
              <a href="https://github.com/jaydlomb" target="_blank" rel="noreferrer">
                <Box as={FaGithub} boxSize={{ base: '22px', md: '28px' }} color="#e8f0fe" _hover={{ color: '#224AA0' }} transition="color 0.3s" />
              </a>
              <a href="https://discordapp.com/users/nyquil8" target="_blank" rel="noreferrer">
                <Box as={FaDiscord} boxSize={{ base: '22px', md: '28px' }} color="#e8f0fe" _hover={{ color: '#224AA0' }} transition="color 0.3s" />
              </a>
              <a href="mailto:jalombardi2004@gmail.com">
                <Box as={FaEnvelope} boxSize={{ base: '22px', md: '28px' }} color="#e8f0fe" _hover={{ color: '#224AA0' }} transition="color 0.3s" />
              </a>
            </HStack>
          </Box>

          {/* Right - Copyright */}
          <Box textAlign={{ base: 'center', md: 'right' }}>
            <Text color="#e8f0fe" fontWeight="bold" fontSize={{ base: 'sm', md: 'md' }}>
              &copy; 2026 Jayden Lombardi
            </Text>
            <Text color="#3b5998" fontSize={{ base: 'xs', md: 'sm' }}>
              Powered by React + Chakra
            </Text>
          </Box>

        </Flex>
      </Box>

    </Box>
  )
}