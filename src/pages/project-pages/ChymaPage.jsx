import { useState } from 'react'
import { Box, Flex, Text, Button, Heading, List } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import ImageLightbox from '../../components/ImageLightbox'
import chyma from '../../assets/images/chyma.png'

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

export default function ChymaPage() {
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <Box maxW="1200px" mx="auto" py={{ base: 6, lg: 10 }} px={{ base: 4, md: 6 }}>

      {/* Hero Section */}
      <Flex
        gap={{ base: 6, lg: 10 }}
        align="center"
        direction={{ base: 'column', lg: 'row' }}
        mb={{ base: 10, lg: 16 }}
        animation={`${fadeSlideUp} 0.6s ease-out forwards`}
        opacity={0}
      >
        <Box flex={1} w="100%">
          <ImageLightbox src={chyma} alt="Chyma and the Toll of Time" />
        </Box>

        <Box flex={1}>
          <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight="900" color="#000000" letterSpacing="tight" mb={2}>
            Chyma and the <Text as="span" color="#224AA0">Toll of Time</Text>
          </Heading>
          <Box w="60px" h="4px" bg="#224AA0" mb={6} />

          <Text color="#0a1628" fontSize={{ base: 'md', lg: 'lg' }} lineHeight={1.8} mb={8}>
            In Chyma and the Toll of Time, you'll play as the titular Chyma,
            a little bell trying to unravel the story of his people to save the planet.
            Chyma wields the power of the Reverb, allowing him to create a copy of himself
            that will follow his exact movements and actions. Using this ability, solve fun
            puzzles to ascend the temple, uncovering secrets and becoming stronger along the way!
          </Text>

          <Button
            as="a"
            href="https://github.com/jaydlomb/Chyma"
            target="_blank"
            bg={btnHovered ? '#1a3a7a' : '#224AA0'}
            color="#FFFFFF"
            px={{ base: 6, md: 8 }}
            py={6}
            fontWeight="bold"
            letterSpacing="wide"
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            transform={btnHovered ? 'scale(1.02)' : 'scale(1)'}
            transition="all 0.2s"
            _hover={{}}
          >
            GitHub Link
          </Button>
        </Box>
      </Flex>

      {/* About & Video */}
      <Flex gap={{ base: 6, lg: 10 }} direction={{ base: 'column', lg: 'row' }} mb={{ base: 10, lg: 16 }} animation={`${fadeSlideUp} 0.6s ease-out 0.1s forwards`} opacity={0}>
        <Box flex={1}>
          <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight="900" color="#000000" letterSpacing="tight" mb={2}>About</Heading>
          <Box w="40px" h="3px" bg="#224AA0" mb={6} />

          <Text fontWeight="bold" color="#0a1628" mb={1} fontSize={{ base: 'sm', md: 'md' }}>Platform</Text>
          <List.Root pl={4} spacing={1} mb={5}>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>Windows</List.Item>
          </List.Root>

          <Text fontWeight="bold" color="#0a1628" mb={1} fontSize={{ base: 'sm', md: 'md' }}>Developers</Text>
          <List.Root pl={4} spacing={1} mb={5}>
            {['Programmer - Jayden Lombardi', 'Programmer - Drew Herlocher', 'Programmer - Dawson Jackson', 'Designer - Lily MacBride', 'Designer - Ben Bradway', 'Designer - Jean-Pierre Bailly-Hall', 'Designer - Ben Baehre', 'Artist - Brandon Bell', 'Artist - Nate Swietlik', 'Artist - Darla Nordstrom', 'Artist - Hanna Bacha', 'Sound - Marie Kutschke', 'Product Owner - Hale Walls', 'Production - Adele Goldader'].map((dev) => (
              <List.Item key={dev} color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>{dev}</List.Item>
            ))}
          </List.Root>

          <Text fontWeight="bold" color="#0a1628" mb={1} fontSize={{ base: 'sm', md: 'md' }}>Technology</Text>
          <List.Root pl={4} spacing={1} mb={5}>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>Unity 6000.2.2f1, Visual Studios 2022 C#</List.Item>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>GitBash, TortoiseGit, GitHub Desktop</List.Item>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>Maya, Substance Painter, Houdini</List.Item>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>Cubase, Adobe Audition</List.Item>
          </List.Root>

          <Text fontWeight="bold" color="#0a1628" mb={1} fontSize={{ base: 'sm', md: 'md' }}>Duration</Text>
          <List.Root pl={4} spacing={1}>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>7/8 months</List.Item>
          </List.Root>
        </Box>

        <Flex flex={1} align="center" justify="center">
          <Box
            as="iframe"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID?vq=hd1080"
            w="100%"
            maxW="700px"
            h={{ base: '250px', md: '400px' }}
            border="2px solid"
            borderColor="#0a1628"
            allowFullScreen
          />
        </Flex>
      </Flex>

      {/* Responsibilities & Future Changes */}
      <Flex gap={{ base: 4, lg: 10 }} direction={{ base: 'column', md: 'row' }} mb={{ base: 10, lg: 16 }} animation={`${fadeSlideUp} 0.6s ease-out 0.2s forwards`} opacity={0}>
        <Box flex={1} bg="#e8f0fe" p={{ base: 5, md: 8 }}>
          <Heading fontSize={{ base: 'lg', md: '2xl' }} fontWeight="900" color="#000000" letterSpacing="tight" mb={2}>Responsibilities</Heading>
          <Box w="40px" h="3px" bg="#224AA0" mb={6} />
          <List.Root pl={4} spacing={2}>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Implemented dynamic audio system</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Implemented save state system</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Implemented all UI</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Implemented core player and environmental mechanics</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Implemented animations on player and enemies</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Tested and killed bugs rigorously</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Used feedback from testing sessions to improve mechanics</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Created and maintained Technical Plan and Systems List</List.Item>
          </List.Root>
        </Box>

        <Box flex={1} bg="#e8f0fe" p={{ base: 5, md: 8 }}>
          <Heading fontSize={{ base: 'lg', md: '2xl' }} fontWeight="900" color="#000000" letterSpacing="tight" mb={2}>Future Changes</Heading>
          <Box w="40px" h="3px" bg="#224AA0" mb={6} />
          <List.Root pl={4} spacing={2}>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Better game feel with more testing and feedback</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Code architecture restructuring</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Optimization and performance enhancement</List.Item>
          </List.Root>
        </Box>
      </Flex>

      {/* Gallery */}
      <Box animation={`${fadeSlideUp} 0.6s ease-out 0.3s forwards`} opacity={0}>
        <Heading fontSize={{ base: 'lg', md: '2xl' }} fontWeight="900" color="#000000" letterSpacing="tight" mb={2}>Gallery</Heading>
        <Box w="40px" h="3px" bg="#224AA0" mb={8} />
        <Flex gap={{ base: 4, md: 6 }} wrap="wrap" justify="center">
          {[1, 2, 3].map((i) => (
            <ImageLightbox key={i} src="https://via.placeholder.com/400x225" alt={`Screenshot ${i}`} />
          ))}
        </Flex>
      </Box>

    </Box>
  )
}