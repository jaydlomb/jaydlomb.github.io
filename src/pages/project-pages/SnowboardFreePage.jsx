import { useState } from 'react'
import { Box, Flex, Text, Button, Heading, List } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import ImageLightbox from '../../components/ImageLightbox'
import snowboardfree from '../../assets/images/snowboardfree.png'

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

export default function SnowboardFreePage() {
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <Box maxW="1200px" mx="auto" py={10} px={6}>

      {/* Hero Section */}
      <Flex
        gap={10}
        align="center"
        wrap="wrap"
        mb={16}
        animation={`${fadeSlideUp} 0.6s ease-out forwards`}
        opacity={0}
      >
        <Box flex={1} minW="400px">
          <ImageLightbox src={snowboardfree} alt="Snowboard Free" />
        </Box>

        <Box flex={1} minW="300px">
          <Heading fontSize="4xl" fontWeight="900" color="#000000" letterSpacing="tight" mb={2}>
            Snowboard <Text as="span" color="#224AA0">Free</Text>
          </Heading>
          <Box w="60px" h="4px" bg="#224AA0" mb={6} />

          <Text color="#0a1628" fontSize="lg" lineHeight={1.8} mb={8}>
            My take on the 1991 game 'Ski-Free', except with a snowboard. Carve through endless snowy terrain,
            dodging obstacles and seeing how long you can survive before disaster strikes!
          </Text>

          <Button
            as="a"
            href="https://github.com/jaydlomb/SnowboardFree"
            target="_blank"
            bg={btnHovered ? '#1a3a7a' : '#224AA0'}
            color="#FFFFFF"
            px={8}
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
      <Flex gap={10} wrap="wrap" mb={16} animation={`${fadeSlideUp} 0.6s ease-out 0.1s forwards`} opacity={0}>
        <Box flex={1} minW="300px">
          <Heading fontSize="2xl" fontWeight="900" color="#000000" letterSpacing="tight" mb={2}>About</Heading>
          <Box w="40px" h="3px" bg="#224AA0" mb={6} />

          <Text fontWeight="bold" color="#0a1628" mb={1}>Platform</Text>
          <List.Root pl={4} spacing={1} mb={5}>
            <List.Item color="#1e3a5f" fontSize="md">Windows</List.Item>
          </List.Root>

          <Text fontWeight="bold" color="#0a1628" mb={1}>Developers</Text>
          <List.Root pl={4} spacing={1} mb={5}>
            <List.Item color="#1e3a5f" fontSize="md">Programmer - Jayden Lombardi</List.Item>
          </List.Root>

          <Text fontWeight="bold" color="#0a1628" mb={1}>Technology</Text>
          <List.Root pl={4} spacing={1} mb={5}>
            <List.Item color="#1e3a5f" fontSize="md">Unity, C#</List.Item>
          </List.Root>

          <Text fontWeight="bold" color="#0a1628" mb={1}>Duration</Text>
          <List.Root pl={4} spacing={1}>
            <List.Item color="#1e3a5f" fontSize="md">Solo Project</List.Item>
          </List.Root>
        </Box>

        <Flex flex={1} minW="400px" align="center" justify="center">
          <Box
            as="iframe"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID?vq=hd1080"
            w="100%"
            maxW="700px"
            h="400px"
            border="2px solid"
            borderColor="#0a1628"
            allowFullScreen
          />
        </Flex>
      </Flex>

      {/* Responsibilities & Future Changes */}
      <Flex gap={10} wrap="wrap" mb={16} animation={`${fadeSlideUp} 0.6s ease-out 0.2s forwards`} opacity={0}>
        <Box flex={1} minW="300px" bg="#e8f0fe" p={8}>
          <Heading fontSize="2xl" fontWeight="900" color="#000000" letterSpacing="tight" mb={2}>Responsibilities</Heading>
          <Box w="40px" h="3px" bg="#224AA0" mb={6} />
          <List.Root pl={4} spacing={2}>
            <List.Item color="#0a1628" fontSize="md">Implemented player movement and attacking</List.Item>
          </List.Root>
        </Box>

        <Box flex={1} minW="300px" bg="#e8f0fe" p={8}>
          <Heading fontSize="2xl" fontWeight="900" color="#000000" letterSpacing="tight" mb={2}>Future Changes</Heading>
          <Box w="40px" h="3px" bg="#224AA0" mb={6} />
          <List.Root pl={4} spacing={2}>
            <List.Item color="#0a1628" fontSize="md">Better structure with the scripts</List.Item>
          </List.Root>
        </Box>
      </Flex>

      {/* Gallery */}
      <Box animation={`${fadeSlideUp} 0.6s ease-out 0.3s forwards`} opacity={0}>
        <Heading fontSize="2xl" fontWeight="900" color="#000000" letterSpacing="tight" mb={2}>Gallery</Heading>
        <Box w="40px" h="3px" bg="#224AA0" mb={8} />
        <Flex gap={6} wrap="wrap" justify="center">
          {[1, 2, 3].map((i) => (
            <ImageLightbox key={i} src="https://via.placeholder.com/400x225" alt={`Screenshot ${i}`} />
          ))}
        </Flex>
      </Box>

    </Box>
  )
}