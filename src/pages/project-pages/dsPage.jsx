import { Box, Flex, Image, Text, Button, Heading, List } from '@chakra-ui/react'
import ds from '../../assets/images/3ds.png'

export default function dsPage() {
  return (
    <Box maxW="1400px" mx="auto" mt={10} px={4}>

      {/* First white box - Image and description */}
      <Flex bg="white" borderRadius="md" overflow="hidden" minH="400px">
        <Box flex={1}>
          <Image
            src={ds}
            alt="Knight Light"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Box>

        <Flex flex={1} direction="column" justify="center" align="center" p={10}>
          <Text textAlign="center" maxW="400px" mb={8}>
            A basic 3DS implementation. Users can draw on the bottom screen with the stylus and press 
            [B] to clear the screen. Users can toggle a 'strobe mode' by pressing [Select]. 
            Users can press [Start] to end the program. Pressing [A] will display a sideways image of 
            Link from the original Legend of Zelda. Complete with an 8 page research document, 
            the aim of this project was to learn how to link code to a Ninentdo 3DS.
          </Text>

          <Button
            as="a"
            href="https://github.com/jaydlomb/3dsLinking"
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
          </List.Root>
        </Box>

        <Box bg="white" borderRadius="md" flex="0 0 45%" p={10}>
          <Heading fontWeight={"bold"} fontSize={30} mb={4}>Future Changes</Heading>
          <List.Root pl={4} spacing={2}>
            <List.Item>Better structure with the scripts</List.Item>
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