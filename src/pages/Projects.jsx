import { useState } from 'react'
import { Box, Flex, Image, Text, Heading, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { keyframes } from '@emotion/react'

// images import
import ds from '../assets/images/3ds.png'
import chyma from '../assets/images/chyma.png'
import goap from '../assets/images/goap.png'
import knightlight from '../assets/images/knightlight.png'
import snowboardfree from '../assets/images/snowboardfree.png'
import virusventure from '../assets/images/virusventure.png'

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

function ProjectCard({ image, title, description, path, index }) {
    const navigate = useNavigate()
    const [hovered, setHovered] = useState(false)

    return (
        <Flex
            mb={16}
            gap={10}
            align="center"
            justify="center"
            wrap="wrap"
            animation={`${fadeSlideUp} 0.6s ease-out ${index * 0.1}s forwards`}
            opacity={0}
        >
            {/* Image */}
            <Box
                position="relative"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* Decorative frame */}
                <Box
                    position="absolute"
                    top="-8px"
                    left="-8px"
                    w="100%"
                    h="100%"
                    border="2px solid"
                    borderColor="#224AA0"
                    opacity={hovered ? 0.6 : 0.3}
                    transform="rotate(-1deg)"
                    transition="opacity 0.3s"
                    zIndex={-1}
                />
                <Image
                    src={image}
                    alt={title}
                    w="450px"
                    h="220px"
                    objectFit="cover"
                    border="2px solid"
                    borderColor="#0a1628"
                    transition="transform 0.3s, box-shadow 0.3s"
                    transform={hovered ? 'scale(1.02)' : 'scale(1)'}
                    boxShadow={hovered ? '0 10px 30px rgba(10,22,40,0.2)' : 'none'}
                />
            </Box>

            {/* Text */}
            <Box flex={1} minW="300px" maxW="400px">
                <Flex justify="space-between" align="center" mb={3}>
                    <Heading fontSize="2xl" fontWeight="900" color="#000000" letterSpacing="tight">
                        {title}
                    </Heading>
                    <Button
                        bg="#224AA0"
                        color="#FFFFFF"
                        size="sm"
                        px={5}
                        fontWeight="bold"
                        letterSpacing="wide"
                        _hover={{ bg: '#1a3a7a', transform: 'scale(1.05)' }}
                        _active={{ transform: 'scale(0.98)' }}
                        transition="all 0.2s"
                        onClick={() => navigate(path)}
                    >
                        View More
                    </Button>
                </Flex>
                <Text color="#0a1628" lineHeight={1.7} fontSize="lg">
                    {description}
                </Text>
            </Box>
        </Flex>
    )
}

function SectionHeader({ children, index }) {
    return (
        <Box
            animation={`${fadeSlideUp} 0.6s ease-out ${index * 0.1}s forwards`}
            opacity={0}
        >
            <Heading
                fontSize="4xl"
                fontWeight="900"
                color="#000000"
                letterSpacing="tight"
                mb={4}
            >
                {children}
            </Heading>
            <Box w="60px" h="4px" bg="#224AA0" mb={10} />
        </Box>
    )
}

export default function Projects() {
    const games = [
        {
            image: chyma,
            title: 'Chyma and the Toll of Time',
            description: 'Play as Chyma in an isometric puzzle-platformer where you record and replay your movements to be in two places at once. Traverse through an abandoned temple and uncover music notes to play the Toll of Time.',
            path: '/projects/chyma',
        },
        {
            image: knightlight,
            title: 'Knight Light',
            description: "A 'Dark-Souls-Esc' boss fight where a player must defeat a three-segmented dragon, each with unique properties and attack styles. A top-down fighting game focused on players looking for tense and interesting boss fights.",
            path: '/projects/knightlight',
        },
        {
            image: snowboardfree,
            title: 'Snowboard Free',
            description: "My take on the 1991 game 'Ski-Free', except with a snowboard. Carve through endless snowy terrain, dodging obstacles and seeing how long you can survive before disaster strikes!",
            path: '/projects/snowboardfree',
        },
        {
            image: virusventure,
            title: 'Virus Venture',
            description: "A simple educational platformer, focused on delivering lessons about internet safety through narrative. Targets children's familiar topics of interest. Focused on teaching children 8 to 12 years old how to be safe on the internet.",
            path: '/projects/virusventure',
        },
    ]

    const techProjects = [
        {
            image: ds,
            title: 'Linking to Nintendo 3DS',
            description: 'My final project from a Computer Architecture class. I dove into the architecture of a 3DS and linking C code to an actual running demo on my personal 3DS. A solo project, proof of concept.',
            path: '/projects/ds',
        },
        {
            image: goap,
            title: 'Goal Oriented Action Plan',
            description: 'A duo project and research paper created for our final in Game AI class. Chose one of the hardest AI mechanics to implement, using Unity and NavMeshes. Would love to continue this and fix the bugs in the near future.',
            path: '/projects/goap',
        },
    ]

    return (
        <Box maxW="1100px" mx="auto" py={8} px={8}>
            <Box maxW="950px" mx="auto">
                {/* Games Section */}
                <SectionHeader index={0}>Games</SectionHeader>
                {games.map((project, i) => (
                    <ProjectCard key={project.title} {...project} index={i + 1} />
                ))}

                {/* Technical Projects Section */}
                <Box mt={20}>
                    <SectionHeader index={games.length + 1}>Technical Projects</SectionHeader>
                    {techProjects.map((project, i) => (
                        <ProjectCard key={project.title} {...project} index={games.length + i + 2} />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}