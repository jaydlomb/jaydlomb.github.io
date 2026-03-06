import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Flex, Image, Heading, Text, Button } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import photo from '../assets/images/headshot.png'

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const pulse = keyframes`
  from { opacity: 0.08; transform: scale(1); }
  to { opacity: 0.15; transform: scale(1.1); }
`

export default function Home() {
  const navigate = useNavigate()
  const [hoveredBtn, setHoveredBtn] = useState(null)

  const buttons = [
    { label: 'Projects', path: '/projects', bg: '#224AA0', hoverBg: '#1a3a7a', color: '#FFFFFF' },
    { label: 'Resume', path: '/resume', bg: '#000000', hoverBg: '#0a1628', color: '#e8f0fe' },
    { label: 'Contact', path: '/contact', bg: '#e8f0fe', hoverBg: '#d0e0f8', color: '#0a1628' },
  ]

  const tags = ['SYSTEMS', 'UI/UX', 'GAMEPLAY']

  return (
    <Box minH="90vh" bg="#FFFFFF" position="relative" overflow="hidden">
      {/* Grid background */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.4}
        bgImage="linear-gradient(rgba(10,22,40,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(10,22,40,0.03) 1px, transparent 1px)"
        bgSize="50px 50px"
      />

      {/* Floating blurs - hidden on mobile */}
      <Box
        display={{ base: 'none', lg: 'block' }}
        position="absolute"
        top="80px"
        left="40px"
        w="160px"
        h="160px"
        bg="#224AA0"
        borderRadius="full"
        filter="blur(60px)"
        opacity={0.1}
        animation={`${pulse} 3s ease-in-out infinite alternate`}
      />
      <Box
        display={{ base: 'none', lg: 'block' }}
        position="absolute"
        bottom="120px"
        right="80px"
        w="220px"
        h="220px"
        bg="#224AA0"
        borderRadius="full"
        filter="blur(60px)"
        opacity={0.1}
        animation={`${pulse} 3s ease-in-out infinite alternate`}
      />

      {/* Main content */}
      <Flex
        position="relative"
        zIndex={1}
        align="center"
        justify="center"
        minH="90vh"
        px={{ base: 4, md: 6, lg: 16 }}
        py={{ base: 8, lg: 0 }}
        gap={{ base: 8, lg: 16 }}
        direction={{ base: 'column-reverse', lg: 'row' }}
      >
        {/* Left: Text */}
        <Box maxW="500px" textAlign={{ base: 'center', lg: 'left' }}>
          {/* Role tags */}
          <Flex gap={3} mb={6} wrap="wrap" justify={{ base: 'center', lg: 'flex-start' }}>
            {tags.map((tag, i) => (
              <Box
                key={tag}
                px={{ base: 3, md: 4 }}
                py={{ base: 1, md: 2 }}
                fontSize={{ base: 'xs', md: 'sm' }}
                fontWeight="bold"
                letterSpacing="widest"
                border="2px solid"
                borderColor="#1e3a5f"
                color="#1e3a5f"
                borderRadius="full"
                animation={`${fadeSlideUp} 0.6s ease-out ${i * 0.1}s forwards`}
                opacity={0}
              >
                {tag}
              </Box>
            ))}
          </Flex>

          {/* Name */}
          <Heading
            fontSize={{ base: '4xl', md: '5xl', lg: '8xl' }}
            fontWeight="900"
            lineHeight="0.95"
            letterSpacing="tighter"
            color="#000000"
            animation={`${fadeSlideUp} 0.6s ease-out 0.2s forwards`}
            opacity={0}
          >
            JAYDEN
            <br />
            <Text as="span" color="#224AA0">
              LOMBARDI
            </Text>
          </Heading>

          {/* Tagline */}
          <Text
            mt={6}
            fontSize={{ base: 'md', md: 'lg' }}
            color="#0a1628"
            maxW="400px"
            mx={{ base: 'auto', lg: 0 }}
            lineHeight={1.7}
            animation={`${fadeSlideUp} 0.6s ease-out 0.4s forwards`}
            opacity={0}
          >
            Game programmer always striving to learn, create, and code more.
            <Text as="span" display="block" mt={2} fontSize={{ base: 'xs', md: 'sm' }} color="#1e3a5f">
              UI/Systems Programmer · 16-person team · Shipping May 2026
            </Text>
          </Text>

          {/* Buttons */}
          <Flex
            gap={{ base: 2, md: 4 }}
            mt={8}
            justify={{ base: 'center', lg: 'flex-start' }}
            wrap="wrap"
            animation={`${fadeSlideUp} 0.6s ease-out 0.5s forwards`}
            opacity={0}
          >
            {buttons.map((btn) => (
              <Button
                key={btn.label}
                onClick={() => navigate(btn.path)}
                onMouseEnter={() => setHoveredBtn(btn.label)}
                onMouseLeave={() => setHoveredBtn(null)}
                bg={hoveredBtn === btn.label ? btn.hoverBg : btn.bg}
                color={btn.color}
                px={{ base: 4, md: 6 }}
                py={{ base: 5, md: 6 }}
                fontWeight="bold"
                fontSize={{ base: 'xs', md: 'sm' }}
                letterSpacing="wide"
                borderRadius="none"
                clipPath="polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)"
                transform={hoveredBtn === btn.label ? 'scale(1.05)' : 'scale(1)'}
                boxShadow={hoveredBtn === btn.label ? '0 20px 40px rgba(34,74,160,0.25)' : 'none'}
                transition="all 0.3s ease-out"
                _hover={{}}
                _active={{ transform: 'scale(0.98)' }}
              >
                {btn.label}
              </Button>
            ))}
          </Flex>
        </Box>

        {/* Right: Photo */}
        <Box
          position="relative"
          animation={`${fadeSlideUp} 0.8s ease-out 0.3s forwards`}
          opacity={0}
        >
          {/* Decorative frames */}
          <Box
            position="absolute"
            top="-16px"
            left="-16px"
            w="100%"
            h="100%"
            border="2px solid"
            borderColor="#224AA0"
            opacity={0.4}
            transform="rotate(-3deg)"
            zIndex={-1}
          />
          <Box
            position="absolute"
            bottom="-16px"
            right="-16px"
            w="100%"
            h="100%"
            border="2px solid"
            borderColor="#1e3a5f"
            opacity={0.3}
            transform="rotate(2deg)"
            zIndex={-1}
          />

          {/* Photo with gradient border */}
          <Box
            p="4px"
            bgGradient="linear(to-br, #224AA0, #1e3a5f, #000000)"
          >
            <Image
              src={photo}
              alt="Jayden"
              w={{ base: '240px', md: '280px', lg: '320px' }}
              h={{ base: '300px', md: '350px', lg: '400px' }}
              objectFit="cover"
              bg="#e8f0fe"
            />
          </Box>

          {/* Badge */}
          <Box
            position="absolute"
            bottom="-24px"
            left="4px"
            bg="#224AA0"
            color="#FFFFFF"
            px={{ base: 3, md: 4 }}
            py={{ base: 1, md: 2 }}
            fontWeight="bold"
            fontSize={{ base: '2xs', md: 'xs' }}
            letterSpacing="wider"
            boxShadow="xl"
          >
            CHAMPLAIN '26
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}