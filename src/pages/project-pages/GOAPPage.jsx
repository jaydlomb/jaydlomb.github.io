import { useState } from 'react'
import { Box, Flex, Text, Button, Heading, List } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import ImageLightbox from '../../components/ImageLightbox'
import goap from '../../assets/images/goap.png'

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

export default function GOAPPage() {
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
          <ImageLightbox src={goap} alt="Goal Oriented Action Plan" />
        </Box>

        <Box flex={1}>
          <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight="900" color="#000000" letterSpacing="tight" mb={2}>
            Goal Oriented <Text as="span" color="#224AA0">Action Plan</Text>
          </Heading>
          <Box w="60px" h="4px" bg="#224AA0" mb={6} />

          <Text color="#0a1628" fontSize={{ base: 'md', lg: 'lg' }} lineHeight={1.8} mb={8}>
            A duo project and research paper created for our final in Game AI class.
            Chose one of the hardest AI mechanics to implement, using Unity and NavMeshes.
            Technique was implemented with medium bugs. Not currently working 100% correctly, but on the right path.
            Would love to continue this and fix the bugs in the near future.
          </Text>

          <Button
            as="a"
            href="https://github.com/jaydlomb/GOAP"
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
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>Programmer - Jayden Lombardi</List.Item>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>Programmer - Partner</List.Item>
          </List.Root>

          <Text fontWeight="bold" color="#0a1628" mb={1} fontSize={{ base: 'sm', md: 'md' }}>Technology</Text>
          <List.Root pl={4} spacing={1} mb={5}>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>Unity, C#, NavMesh</List.Item>
          </List.Root>

          <Text fontWeight="bold" color="#0a1628" mb={1} fontSize={{ base: 'sm', md: 'md' }}>Duration</Text>
          <List.Root pl={4} spacing={1}>
            <List.Item color="#1e3a5f" fontSize={{ base: 'sm', md: 'md' }}>Final Project - Game AI Class</List.Item>
          </List.Root>
        </Box>

        <Flex flex={1} align="center" justify="center">
          <Box
            as="iframe"
            src="https://www.youtube.com/embed/9Q519JNfeRc?si=GLFBaucLrrs0aP4-?vq=hd1080"
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
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Implemented GOAP architecture</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Integrated NavMesh for pathfinding</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Co-authored research paper</List.Item>
          </List.Root>
        </Box>

        <Box flex={1} bg="#e8f0fe" p={{ base: 5, md: 8 }}>
          <Heading fontSize={{ base: 'lg', md: '2xl' }} fontWeight="900" color="#000000" letterSpacing="tight" mb={2}>Future Changes</Heading>
          <Box w="40px" h="3px" bg="#224AA0" mb={6} />
          <List.Root pl={4} spacing={2}>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Fix remaining bugs in action planning</List.Item>
            <List.Item color="#0a1628" fontSize={{ base: 'sm', md: 'md' }}>Add more complex goal states</List.Item>
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