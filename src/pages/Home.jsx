import { useNavigate } from 'react-router-dom'
import { Box, Flex, Image, Heading, Text, Button } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import FadeInOnScroll from '../components/FadeInOnScroll'
import photo from '../assets/images/headshot.png'
import chyma from '../assets/images/chyma.png'
import knightlight from '../assets/images/knightlight.png'

const pulse = keyframes`
  from { opacity: 0.08; transform: scale(1); }
  to { opacity: 0.15; transform: scale(1.1); }
`

function ProjectCard({ project, index }) {
  const navigate = useNavigate()
  const isEven = index % 2 === 0

  return (
    <Flex
      direction={{ base: 'column', lg: isEven ? 'row' : 'row-reverse' }}
      w="100%"
      h={{ base: 'auto', lg: '500px' }}
      border="2px solid"
      borderColor="brand.primary"
    >
      <Box
        w={{ base: '100%', lg: '50%' }}
        h={{ base: '300px', lg: '100%' }}
        overflow="hidden"
      >
        <Image
          src={project.image}
          alt={project.name}
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Box>

      <Flex
        w={{ base: '100%', lg: '50%' }}
        direction="column"
        justify="center"
        align="center"
        p={{ base: 8, lg: 12 }}
        bg="brand.alice"
      >
        <Box maxW="400px" textAlign="center">
          <Heading
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="900"
            letterSpacing="tighter"
            color="brand.black"
            mb={6}
          >
            {project.name}
          </Heading>

          <Box as="ul" listStyleType="none" mb={8} textAlign="left">
            {project.bullets.map((bullet, i) => (
              <Text
                as="li"
                key={i}
                fontSize={{ base: 'lg', md: 'xl' }}
                color="brand.prussian"
                mb={2}
                pl={4}
                position="relative"
                _before={{
                  content: '"•"',
                  position: 'absolute',
                  left: 0,
                  color: 'brand.primary',
                }}
              >
                {bullet}
              </Text>
            ))}
          </Box>

          <Button
            onClick={() => navigate(project.path)}
            bg="brand.primary"
            color="brand.white"
            px={8}
            py={6}
            fontWeight="bold"
            fontSize="md"
            letterSpacing="wide"
            borderRadius="none"
            clipPath="polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)"
            _hover={{ bg: 'brand.oxford', transform: 'scale(1.05)' }}
            _active={{ transform: 'scale(0.98)' }}
            transition="all 0.3s ease-out"
          >
            View Project
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}

export default function Home() {
  const navigate = useNavigate()
  const projects = [
    {
      name: 'CHYMA',
      image: chyma,
      path: '/projects/chyma',
      bullets: [
        'Isometric puzzle game built in Unity',
        'Designed UI/UX and Mechanics',
        '15-person team',
        'Shipping May 2026',
      ],
    },
    {
      name: 'KNIGHT LIGHT',
      image: knightlight,
      path: '/projects/knightlight',
      bullets: [
        'Solo top-down boss battle',
        'Custom combat and enemy AI systems',
        'Souls-Like Game',
        'Solo programmer on 6-person team',
      ],
    },
  ]

  const tags = ['SYSTEMS', 'UI/UX', 'GAMEPLAY']

  return (
    <Box minH="90vh" bg="brand.white" position="relative" overflow="hidden">
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
        bg="brand.primary"
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
        bg="brand.primary"
        borderRadius="full"
        filter="blur(60px)"
        opacity={0.1}
        animation={`${pulse} 3s ease-in-out infinite alternate`}
      />

      {/* Main content */}
      <Flex
        position="relative"
        zIndex={1}
        align="flex-start"
        justify="center"
        px={{ base: 4, md: 6, lg: 16 }}
        py={{ base: 16, lg: 100 }}
        gap={{ base: 8, lg: 16 }}
        direction={{ base: 'column-reverse', lg: 'row' }}
      >
        {/* Left: Text */}
        <Box maxW="500px" textAlign={{ base: 'center', lg: 'left' }} alignSelf="flex-end">
          {/* Role tags */}
          <Flex gap={3} mb={6} wrap="wrap" justify={{ base: 'center', lg: 'flex-start' }}>
            {tags.map((tag, i) => (
              <FadeInOnScroll key={tag} delay={i * 0.1}>
                <Box
                  px={{ base: 3, md: 4 }}
                  py={{ base: 1, md: 2 }}
                  fontSize={{ base: 'xs', md: 'sm' }}
                  fontWeight="bold"
                  letterSpacing="widest"
                  border="2px solid"
                  borderColor="brand.oxford"
                  color="brand.oxford"
                  borderRadius="full"
                >
                  {tag}
                </Box>
              </FadeInOnScroll>
            ))}
          </Flex>

          {/* Name */}
          <FadeInOnScroll delay={0.2}>
            <Heading
              fontSize={{ base: '4xl', md: '5xl', lg: '8xl' }}
              fontWeight="900"
              lineHeight="0.95"
              letterSpacing="tighter"
              color="brand.black"
            >
              JAYDEN
              <br />
              <Text as="span" color="brand.primary">
                LOMBARDI
              </Text>
            </Heading>
          </FadeInOnScroll>

          {/* Tagline */}
          <FadeInOnScroll delay={0.4}>
            <Text
              mt={6}
              fontSize={{ base: 'md', md: 'lg' }}
              color="brand.prussian"
              maxW="400px"
              mx={{ base: 'auto', lg: 0 }}
              lineHeight={1.7}
            >
              Game programmer always striving to learn, create, and code more.
              <Text as="span" display="block" mt={2} fontSize={{ base: 'xs', md: 'sm' }} color="brand.oxford">
                UI/Systems Programmer · 15-person team · Shipping May 2026
              </Text>
            </Text>
          </FadeInOnScroll>
        </Box>

        {/* Right: Photo */}
        <FadeInOnScroll delay={0.3}>
          <Box position="relative">
            {/* Decorative frames */}
            <Box
              position="absolute"
              top="-16px"
              left="-16px"
              w="100%"
              h="100%"
              border="2px solid"
              borderColor="brand.primary"
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
              borderColor="brand.oxford"
              opacity={0.3}
              transform="rotate(2deg)"
              zIndex={-1}
            />

            {/* Photo with gradient border */}
            <Box
              p="4px"
              bgGradient="linear(to-br, brand.primary, brand.oxford, brand.black)"
            >
              <Image
                src={photo}
                alt="Jayden"
                w={{ base: '240px', md: '280px', lg: '320px' }}
                h={{ base: '300px', md: '350px', lg: '400px' }}
                objectFit="cover"
                bg="brand.alice"
              />
            </Box>

            {/* Badge */}
            <Box
              position="absolute"
              bottom="-24px"
              left="4px"
              bg="brand.primary"
              color="brand.white"
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
        </FadeInOnScroll>
      </Flex>

      {/* Projects Section */}
      <Box position="relative" zIndex={1} mt={{ base: 16, lg: 24 }} px={{ base: 2, md: 3, lg: 5 }}>
        <FadeInOnScroll>
          <Heading
            fontSize={{ base: '3xl', md: '4xl', lg: '7xl' }}
            fontWeight="900"
            letterSpacing="tighter"
            color="brand.black"
            textAlign="center"
            mb={{ base: 12, lg: 20 }}
          >
            PROJECTS
          </Heading>
        </FadeInOnScroll>

        <Flex direction="column" gap={{ base: 8, lg: 10 }}>
          {projects.map((project, index) => (
            <FadeInOnScroll key={project.name} delay={index * 0.15}>
              <ProjectCard project={project} index={index} />
            </FadeInOnScroll>
          ))}
        </Flex>

        <FadeInOnScroll delay={0.1}>
          <Flex justify="center" mt={{ base: 10, lg: 16 }}>
            <Button
              onClick={() => navigate('/projects')}
              bg="brand.primary"
              color="brand.white"
              px={{ base: 10, md: 14 }}
              py={{ base: 6, md: 8 }}
              fontWeight="bold"
              fontSize={{ base: 'md', md: 'lg' }}
              letterSpacing="wide"
              borderRadius="none"
              clipPath="polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)"
              _hover={{ bg: 'brand.oxford', transform: 'scale(1.05)' }}
              _active={{ transform: 'scale(0.98)' }}
              transition="all 0.3s ease-out"
              mb={{ base: 12, lg: 20 }}
            >
              View More Projects
            </Button>
          </Flex>
        </FadeInOnScroll>

      </Box>
    </Box>
  )
}