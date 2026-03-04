import { Box, Flex, Image, Text, Heading, Separator, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

//images import
import ds from '../assets/images/3ds.png'
import chyma from '../assets/images/chyma.png'
import goap from '../assets/images/goap.png'
import knightlight from '../assets/images/knightlight.png'
import snowboardfree from '../assets/images/snowboardfree.png'
import virusventure from '../assets/images/virusventure.png'

export default function Projects() {
const navigate = useNavigate()

    return (
        <Box maxW="1200px" mx="auto" mt={10}>

            {/*Game Projects*/}
            <Heading fontSize="32px" mb={25}>Games</Heading>
            <Separator borderColor="black" mb={50} />

            <Flex mb={75}>
                <Flex flex={1} justify="center" align="center">
                    <Image
                        src={chyma}
                        alt="Project"
                        width="485px"
                        aspectRatio={485 / 239}
                        objectFit="cover"
                        border="2px solid black"
                    />
                </Flex>

                <Flex flex={1} justify="center" align="center">
                    <Box maxW="400px">
                        <Flex justify="space-between" align="center" mb={3}>
                            <Heading fontWeight="bold">Chyma and the Toll of Time</Heading>
                            
                            <Button bg="black" color="white" size="md" _hover={{ bg: 'blue' }} onClick={() => navigate('/projects/chyma')}>
                                View More
                            </Button>
                        </Flex>
                        <Text>
                            Play as Chyma in an isometric puzzle-platformer where you record and replay your movements to be in two places at once.
                            Traverse through an abandoned temple and uncover music notes to play the Toll of Time.
                        </Text>
                    </Box>
                </Flex>
            </Flex>

            <Flex mb={75}>
                <Flex flex={1} justify="center" align="center">
                    <Image
                        src={knightlight}
                        alt="Project"
                        aspectRatio={485 / 239}
                        objectFit="cover"
                        border="2px solid black"
                    />
                </Flex>

                <Flex flex={1} justify="center" align="center">
                    <Box maxW="400px">
                        <Flex justify="space-between" align="center" mb={3}>
                            <Heading fontWeight="bold">Knight Light</Heading>
                            <Button bg="black" color="white" size="md" _hover={{ bg: 'blue' }} onClick={() => navigate('/projects/knightlight')}>
                                View More
                            </Button>
                        </Flex>
                        <Text>
                            A 'Dark-Souls-Esc' boss fight where a player must defeat a three-segmented dragon,
                            each with unique properties and attack styles. A top-down fighting game focused on
                            players looking for tense and interesting boss fights.
                        </Text>
                    </Box>
                </Flex>
            </Flex>

            <Flex mb={75}>
                <Flex flex={1} justify="center" align="center">
                    <Image
                        src={snowboardfree}
                        alt="Project"
                        aspectRatio={485 / 239}
                        objectFit="cover"
                        border="2px solid black"
                    />
                </Flex>

                <Flex flex={1} justify="center" align="center">
                    <Box maxW="400px">
                        <Flex justify="space-between" align="center" mb={3}>
                            <Heading fontWeight="bold">Snowboard Free</Heading>
                            <Button bg="black" color="white" size="md" _hover={{ bg: 'blue' }} onClick={() => navigate('/projects/snowboardfree')}>
                                View More
                            </Button>
                        </Flex>
                        <Text>
                            My take on the 1991 game 'Ski-Free', except with a snowboard. Carve through endless snowy terrain,
                            dodging obstacles and seeing how long you can survive before disaster strikes!
                        </Text>
                    </Box>
                </Flex>
            </Flex>

            <Flex mb={75}>
                <Flex flex={1} justify="center" align="center">
                    <Image
                        src={virusventure}
                        alt="Project"
                        aspectRatio={485 / 239}
                        objectFit="cover"
                        border="2px solid black"
                    />
                </Flex>

                <Flex flex={1} justify="center" align="center">
                    <Box maxW="400px">
                        <Flex justify="space-between" align="center" mb={3}>
                            <Heading fontWeight="bold">Virus Venture</Heading>
                            <Button bg="black" color="white" size="md" _hover={{ bg: 'blue' }} onClick={() => navigate('/projects/virusventure')}>
                                View More
                            </Button>
                        </Flex>
                        <Text>
                            A simple educational platformer, focused on delivering lessons about internet saftey through narrative.
                            Targets children's familiar topics of interest. Focused on teaching children 8 to 12 years old how to be safe on the internet,
                            and maintain their protection.
                        </Text>
                    </Box>
                </Flex>
            </Flex>

            {/*Tech Projects*/}
            <Heading fontSize="32px" mb={25}>Technical Projects</Heading>
            <Separator borderColor="black" mb={50} />

            <Flex mb={75}>
                <Flex flex={1} justify="center" align="center">
                    <Image
                        src={ds}
                        alt="Project"
                        aspectRatio={485 / 239}
                        objectFit="cover"
                        border="2px solid black"
                    />
                </Flex>

                <Flex flex={1} justify="center" align="center">
                    <Box maxW="400px">
                        <Flex justify="space-between" align="center" mb={3}>
                            <Heading fontWeight="bold">Linking to Nintendo 3DS</Heading>
                            <Button bg="black" color="white" size="md" _hover={{ bg: 'blue' }} onClick={() => navigate('/projects/ds')}>
                                View More
                            </Button>
                        </Flex>
                        <Text>
                            My final project from a Computer Architecture class.
                            I dove into the architecture of a 3DS and linking C code to an actual running demo on my personal 3DS.
                            A solo project, proof of concept, the aim of this project was learning how to link code to a 3DS from
                            my computer, and get it up and running.
                        </Text>
                    </Box>
                </Flex>
            </Flex>

            <Flex mb={75}>
                <Flex flex={1} justify="center" align="center">
                    <Image
                        src={goap}
                        alt="Project"
                        aspectRatio={485 / 239}
                        objectFit="cover"
                        border="2px solid black"
                    />
                </Flex>

                <Flex flex={1} justify="center" align="center">
                    <Box maxW="400px">
                        <Flex justify="space-between" align="center" mb={3}>
                            <Heading fontWeight="bold">Goal Oriented Action Plan</Heading>
                            <Button bg="black" color="white" size="md" _hover={{ bg: 'blue' }} onClick={() => navigate('/projects/goap')}>
                                View More
                            </Button>
                        </Flex>
                        <Text>
                            A duo project and research paper created for our final in Game AI class. 
                            Chose one of the hardest AI mechanics to implement, using Unity and NavMeshs. 
                            Technique was implemented with medium bugs. Not currently working 100% correctly, but on the right path.
                             Would love to continue this and fix the bugs in the near future.
                        </Text>
                    </Box>
                </Flex>
            </Flex>

        </Box>
    )
}