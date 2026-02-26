import { Link, Outlet } from 'react-router-dom'
import { Box, Flex, HStack, Text } from '@chakra-ui/react'

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
              {index < arr.length - 1 && (<Text color="gray.600" fontSize="lg">|</Text>)}
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
      <Box as="footer" bg="gray.900" px={8} py={4} borderTop="1px solid" borderColor="gray.700">
        <Text color="white" fontSize="sm" textAlign="center">
          &copy; 2026 Jayden Lombardi
        </Text>
      </Box>

    </Box>
  )
}