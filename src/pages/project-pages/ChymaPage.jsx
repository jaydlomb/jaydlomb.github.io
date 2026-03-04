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
            <List.Item>Designer - Lily MacBride</List.Item>
            <List.Item>Designer - Ben Bradway</List.Item>
            <List.Item>Designer - Jean-Pierre Bailly-Hall</List.Item>
            <List.Item>Designer - Ben Baehre</List.Item>
            <List.Item>Artist - Brandon Bell</List.Item>
            <List.Item>Artist - Nate Swietlik</List.Item>
            <List.Item>Artist - Darla Nordstrom</List.Item>
            <List.Item>Artist - Hanna Bacha</List.Item>
            <List.Item>Sound - Marie Kutschke</List.Item>
            <List.Item>Product Owner - Hale Walls</List.Item>
            <List.Item>Production - Adele Goldader</List.Item>
          </List.Root>

          <Text fontWeight="bold">Technology</Text>
          <List.Root pl={4} spacing={1} mb={4}>
            <List.Item>Editing Software: Unity 6000.2.2f1, Visual Studios 2022 C#</List.Item>
            <List.Item>Git Software: GitBash, TortoiseGit, GitHub Desktop</List.Item>
            <List.Item>Art: Maya, Substance Painter, Substance Designer, Houdini</List.Item>
            <List.Item>Audio: Cubase, Adobe Audtion</List.Item>
            <List.Item>Communication: Discord, Mattermost, Jira, Confluence</List.Item>
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
            <List.Item>Implemented premade animations on player and enemies</List.Item>
            <List.Item>Used feedback from various testing sessions to improve on mechanics and game feel</List.Item>
            <List.Item>Created and upkept a Technical Plan and Systems + Mechanics List</List.Item>
          </List.Root>
        </Box>

        <Box bg="white" borderRadius="md" flex="0 0 45%" p={10}>
          <Heading fontWeight={"bold"} fontSize={30} mb={4}>Future Changes</Heading>
          <List.Root pl={4} spacing={2}>
            <List.Item>Better game feel with more testing and feedback</List.Item>
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