import { Link, Outlet } from 'react-router-dom'
import { Box, Flex, HStack, Text } from '@chakra-ui/react'

export default function Layout() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">

      {/* Header / Nav */}
      <Box as="header" bg="gray.900" px={8} py={4} borderBottom="1px solid" borderColor="gray.700">
        <Flex justify="space-between" align="center">
          <Text fontWeight="bold" fontSize="lg" color="white">Jayden Lombardi</Text>
          <HStack spacing={6}>
            {[
              { label: 'Home', to: '/' },
              { label: 'Projects', to: '/projects' },
              { label: 'Resume', to: '/resume' },
              { label: 'Contact', to: '/contact' },
            ].map(({ label, to }) => (
              <Box
                key={to}
                as={Link}
                to={to}
                color="gray.300"
                _hover={{ color: 'white' }}
                fontSize="sm"
                fontWeight="medium"
              >
                {label}
              </Box>
            ))}
          </HStack>
        </Flex>
      </Box>

      {/* Page Content */}
      <Box as="main" flex="1" px={8} py={10}>
        <Outlet />
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.900" px={8} py={4} borderTop="1px solid" borderColor="gray.700">
        <Text color="gray.500" fontSize="sm" textAlign="center">
          &copy; 2026 Jayden Lombardi
        </Text>
      </Box>

    </Box>
  )
}