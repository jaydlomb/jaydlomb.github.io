import { useState } from 'react'
import { Box, Flex, Text, Button, Heading, List } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import ImageLightbox from '../../components/ImageLightbox'
import virusventure from '../../assets/images/virusventure.png'

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

export default function VirusVenturePage() {
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
          <ImageLightbox src={virusventure} alt="Virus Venture" />
        </Box>

        <Box flex={1}>
          <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight="900" color="#000000" letterSpacing="tight" mb={2}>
            Virus <Text as="span" color="#224AA0">Venture</Text>
          </Heading>
          <Box w="60px" h="4px" bg="#224AA0" mb={6} />

          <Text color="#0a1628" fontSize={{ base: 'md', lg: 'lg' }} lineHeight={1.8} mb={8}>
            Virus Venture is a simple, educational platformer game that aims to teach children around the 
            3rd-5th grade level about the dangers of the internet. This game would be played in a classroom 
            environment likely on chrome books or computers. The player adventures through a digital world, 
            defeating viruses and learning basic internet safety skills in order to return to the real world.
          </Text>

          <Button
            as="a"
            href="https://github.com/jaydlomb/VirusVenture"
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
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>Windows, Mac, and Web</List.Item>
          </List.Root>

          <Text fontWeight="bold" color="#0a1628" mb={1} fontSize={{ base: 'sm', md: 'md' }}>Developers</Text>
          <List.Root pl={4} spacing={1} mb={5}>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>Programmer - Jayden Lombardi</List.Item>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>Programmer - Sierra Blume</List.Item>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>Artist - Aidan Matschiner</List.Item>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>Artist - Darla Nordstrom</List.Item>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>Designer/Production - Jorge Avila</List.Item>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>Sound Design - Luca Petrosso</List.Item>
          </List.Root>

          <Text fontWeight="bold" color="#0a1628" mb={1} fontSize={{ base: 'sm', md: 'md' }}>Technology</Text>
          <List.Root pl={4} spacing={1} mb={5}>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>Unity, C#, Itch, Visual Studios, BitBucket</List.Item>
          </List.Root>

          <Text fontWeight="bold" color="#0a1628" mb={1} fontSize={{ base: 'sm', md: 'md' }}>Duration</Text>
          <List.Root pl={4} spacing={1}>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>6 Weeks</List.Item>
          </List.Root>
        </Box>

        <Flex flex={1} align="center" justify="center">
          <Box
            as="iframe"
            src="https://www.youtube.com/embed/x1vP1Yggshs?si=8j1K8nWGmExNo1jl?vq=hd1080"
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
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Lead Programmer</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Implementing player movement and powerups</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Implementing a basic dialogue system </List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Implementing a 'Helldivers-esc' input system for challenges</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Implementing UI to match the previously mentioned system​</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Implementing basic unity Scene management</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Used feedback from various testing sessions to improve on mechanics and game feel​</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Created and upkept a Technical Plan and Systems + Mechanics List</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Led the team Git, handling merges and conflicts</List.Item>
          </List.Root>
        </Box>

        <Box flex={1} bg="#e8f0fe" p={{ base: 5, md: 8 }}>
          <Heading fontSize={{ base: 'lg', md: '2xl' }} fontWeight="900" color="#000000" letterSpacing="tight" mb={2}>Future Changes</Heading>
          <Box w="40px" h="3px" bg="#224AA0" mb={6} />
          <List.Root pl={4} spacing={2}>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Fixing the current or Implementing new dialogue system (not a good structure currently)</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Fixing the input challenges </List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Fixing overall code structure and look, so it is more accessible to designers</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Fixing player jump (slight bug right now)</List.Item>
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