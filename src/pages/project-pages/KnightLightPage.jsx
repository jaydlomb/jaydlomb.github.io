import { useState } from 'react'
import { Box, Flex, Text, Button, Heading, List } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import ImageLightbox from '../../components/ImageLightbox'
import GalleryGrid from '../../components/GalleryGrid'
import knightlight from '../../assets/images/knightlight.png'
import knightlight1 from '../../assets/images/knightlight1.png'
import knightlight2 from '../../assets/images/knightlight2.png'
import knightlight3 from '../../assets/images/knightlight3.png'
import knightlight4 from '../../assets/images/knightlight4.png'
import knightlight5 from '../../assets/images/knightlight5.png'
import knightlight6 from '../../assets/images/knightlight6.png'

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

export default function KnightLightPage() {
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
          <ImageLightbox src={knightlight} alt="Knight Light" />
        </Box>

        <Box flex={1}>
          <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight="900" color="#000000" letterSpacing="tight" mb={2}>
            Knight <Text as="span" color="#224AA0">Light</Text>
          </Heading>
          <Box w="60px" h="4px" bg="#224AA0" mb={6} />

          <Text color="#0a1628" fontSize={{ base: 'md', lg: 'lg' }} lineHeight={1.8} mb={8}>
            Knight light is a top-down fighting game focused at players looking for tense and interesting boss fights. 
            It takes place in a dark world in which a dark dragon resides, the knight of light must defeat him to 
            cleanse the plain of darkness. The player should feel as if they are gaining leverage while fighting 
            through their battle as their fight pushes back the darkness imposed by the foes they fight.
          </Text>

          <Button
            as="a"
            href="https://github.com/jaydlomb/KnighLight"
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
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>Artist - Ann McMullen</List.Item>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>Artist - Coleman FitzGerald</List.Item>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>Production - Elara Spiller</List.Item>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>Designer - Alexander Cowell</List.Item>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>Sound Designer - Luca Petrosso</List.Item>
          </List.Root>

          <Text fontWeight="bold" color="#0a1628" mb={1} fontSize={{ base: 'sm', md: 'md' }}>Technology</Text>
          <List.Root pl={4} spacing={1} mb={5}>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>Unity, C#, Unity Animations, ImGUI</List.Item>
          </List.Root>

          <Text fontWeight="bold" color="#0a1628" mb={1} fontSize={{ base: 'sm', md: 'md' }}>Duration</Text>
          <List.Root pl={4} spacing={1}>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>6 Weeks</List.Item>
          </List.Root>
        </Box>

        <Flex flex={1} align="center" justify="center">
          <Box
            as="iframe"
            src="https://www.youtube.com/embed/Xtf7G2QFn4g?si=IBifCdKuFyXw2t6T?vq=hd1080"
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
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Lead/Sole Programmer</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Implemented player movement and attacking</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Implemented dragon segment movement and attacking</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Implemented premade animations on character and dragon</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Implemented basic UI for player and dragon health</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Implemented player and dragon interactions</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Used feedback from various testing sessions to improve on mechanics and game feel​</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Created and upkept a Technical Plan and Systems + Mechanics List</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Led the team Git, handling merges and conflicts</List.Item>
          </List.Root>
        </Box>

        <Box flex={1} bg="#e8f0fe" p={{ base: 5, md: 8 }}>
          <Heading fontSize={{ base: 'lg', md: '2xl' }} fontWeight="900" color="#000000" letterSpacing="tight" mb={2}>Future Changes</Heading>
          <Box w="40px" h="3px" bg="#224AA0" mb={6} />
          <List.Root pl={4} spacing={2}>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Better structure with the scripts</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Better pathfinding on dragon segments</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Better game feel with more testing and feedback</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Increasing difficulty as dragon segments are defeated</List.Item>
          </List.Root>
        </Box>
      </Flex>

      {/* Gallery */}
      <Box animation={`${fadeSlideUp} 0.6s ease-out 0.3s forwards`} opacity={0}>
        <Heading fontSize={{ base: 'lg', md: '2xl' }} fontWeight="900" color="#000000" letterSpacing="tight" mb={2}>Gallery</Heading>
        <Box w="40px" h="3px" bg="#224AA0" mb={8} />
        <GalleryGrid images={[
          { src: knightlight1, alt: 'Screenshot 1' },
          { src: knightlight2, alt: 'Screenshot 2' },
          { src: knightlight3, alt: 'Screenshot 3' },
          { src: knightlight4, alt: 'Screenshot 4' },
          { src: knightlight5, alt: 'Screenshot 5' },
          { src: knightlight6, alt: 'Screenshot 6' },
        ]} />
      </Box>
    </Box>
  )
}