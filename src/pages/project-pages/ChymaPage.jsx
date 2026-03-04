import { Box, Flex, Image, Text, Button, Heading, List } from '@chakra-ui/react'
import chyma from '../../assets/images/chyma.png'

export default function ChymaPage() {
  return (
    <Box maxW="1400px" mx="auto" mt={10} px={4}>

      {/* First white box - Image and description */}
      <Flex bg="white" borderRadius="md" overflow="hidden" minH="400px">
        <Box flex={1}>
          <Image
            src={chyma}
            alt="Knight Light"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Box>

        <Flex flex={1} direction="column" justify="center" align="center" p={10}>
          <Text textAlign="center" maxW="400px" mb={8}>
            In Chyma and the Toll of Time, you'll play as the titular Chyma,
            a little bell trying to unravel the story of his people to save the planet.
            Chyma wields the power of the Reverb, allowing him to create a copy of himself
            that will follow his exact movements and actions. Using this ability, solve fun
            puzzles to ascend the temple, uncovering secrets and becoming stronger along the way!
          </Text>

          <Button
            as="a"
            href="https://github.com/jaydlomb/KnighLight"
            target="_blank"
            bg="goldenrod"
            color="black"
            _hover={{ bg: 'blue' }}
          >
            GitHub Link
          </Button>
        </Flex>
      </Flex>

      {/* Second white box - About and video */}
      <Flex bg="white" borderRadius="md" overflow="hidden" mt={10} minH="400px">
        <Box flex={1} p={10} ml={50}>
          <Heading fontWeight={"bold"} fontSize={30} mb={6}>ABOUT</Heading>

          <Text fontWeight="bold">Platform</Text>
          <List.Root pl={4} spacing={1} mb={4}>
            <List.Item>Windows</List.Item>
          </List.Root>

          <Text fontWeight="bold">Developers</Text>
          <List.Root pl={4} spacing={1} mb={4}>
            <List.Item>Programmer - Jayden Lombardo</List.Item>
            <List.Item>Programmer - Drew Herlocher</List.Item>
            <List.Item>Programmer - Dawson Jackson</List.Item>
            <List.Item>Designer - </List.Item>
            <List.Item>Artist - </List.Item>
            <List.Item>Sound - </List.Item>
            <List.Item>Production - </List.Item>
          </List.Root>

          <Text fontWeight="bold">Technology</Text>
          <List.Root pl={4} spacing={1} mb={4}>
            <List.Item>Unity, C#, Unity Animations, ImGUI</List.Item>
          </List.Root>

          <Text fontWeight="bold">Duration</Text>
          <List.Root pl={4} spacing={1} mb={4}>
            <List.Item>7/8 months</List.Item>
          </List.Root>
        </Box>

        <Flex flex={1} justify="center" align="center" p={10}>
          <video
            src="/videos/knightlight.mp4"
            controls
            style={{ width: '80%', borderRadius: '8px' }}
          />
        </Flex>
      </Flex>

      <Flex mt={10} justify="center" gap="10%">
        <Box bg="white" borderRadius="md" flex="0 0 45%" p={10}>
          <Heading fontWeight={"bold"} fontSize={30} mb={4}>Responsibilities</Heading>
          <List.Root pl={4} spacing={2}>
            <List.Item>Implemented player movement and attacking</List.Item>
            <List.Item>Implemented dragon segment movement and attacking</List.Item>
            <List.Item>Implemented premade animations on character and dragon</List.Item>
            <List.Item>Implemented basic UI for player and dragon health</List.Item>
            <List.Item>Implemented player and dragon interactions</List.Item>
            <List.Item>Used feedback from various testing sessions to improve on mechanics and game feel</List.Item>
            <List.Item>Created and upkept a Technical Plan and Systems + Mechanics List</List.Item>
            <List.Item>Led the team Git, handling merges and conflicts</List.Item>
          </List.Root>
        </Box>

        <Box bg="white" borderRadius="md" flex="0 0 45%" p={10}>
          <Heading fontWeight={"bold"} fontSize={30} mb={4}>Future Changes</Heading>
          <List.Root pl={4} spacing={2}>
            <List.Item>Better structure with the scripts</List.Item>
            <List.Item>Better pathfinding on dragon segments</List.Item>
            <List.Item>Better game feel with more testing and feedback</List.Item>
            <List.Item>Increasing difficulty as dragon segments are defeated</List.Item>
          </List.Root>
        </Box>
      </Flex>

      <Box mt={10}>
        <Heading fontWeight={"bold"} fontSize={30} mb={6} textAlign="center">Gallery</Heading>
        <Flex justify="center" gap={6}>
          <Image
            src="https://via.placeholder.com/400x225"
            alt="Screenshot 1"
            borderRadius="md"
            border="2px solid black"
          />
          <Image
            src="https://via.placeholder.com/400x225"
            alt="Screenshot 2"
            borderRadius="md"
            border="2px solid black"
          />
          <Image
            src="https://via.placeholder.com/400x225"
            alt="Screenshot 3"
            borderRadius="md"
            border="2px solid black"
          />
        </Flex>
      </Box>

    </Box>
  )
}