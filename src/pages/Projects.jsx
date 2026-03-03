import { Box, Flex, Image, Text, Heading, Separator, Button } from '@chakra-ui/react'
//images import
import ds from '../assets/images/3ds.png'
import chyma from '../assets/images/chyma.png'
import goap from '../assets/images/goap.png'
import knightlightpng from '../assets/images/knightlight.png'

export default function Projects() {
    return (
        <Box maxW="1200px" mx="auto" mt={10}>

            {/*Game Projects*/}
            <Heading fontSize="32px" mb={3}>Games</Heading>
            <Separator borderColor="black" mb={6} />

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
                            <Button bg="black" color="white" size="md" _hover={{ bg: 'blue' }}>
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
                        src={knightlightpng}
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
                            <Button bg="black" color="white" size="md" _hover={{ bg: 'blue' }}>
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

            {/*Tech Projects*/}
            <Heading fontSize="32px" mt={12} mb={3}>Technical Projects</Heading>
            <Separator borderColor="black" mb={6} />

            <Flex>
                <Flex flex={1} justify="center" align="center">
                    <Image
                        src="https://via.placeholder.com/485x239"
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
                            <Button bg="black" color="white" size="md" _hover={{ bg: 'blue' }}>
                                View More
                            </Button>
                        </Flex>
                        <Text>
                            A 'Dark-Souls-Esc' boss fight where a player must defeat a three-segmented dragon, each with unique properties and attack styles. A top-down fighting game focused on players looking for tense and interesting boss fights.
                        </Text>
                    </Box>
                </Flex>
            </Flex>

        </Box>
    )
}