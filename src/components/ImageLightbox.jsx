import { useState } from 'react'
import { Box, Image, Portal, Text } from '@chakra-ui/react'

export default function ImageLightbox({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Thumbnail */}
      <Box
        position="relative"
        cursor="pointer"
        onClick={() => setIsOpen(true)}
      >
        <Box
          position="absolute"
          top={{ base: '-6px', md: '-10px' }}
          left={{ base: '-6px', md: '-10px' }}
          w="100%"
          h="100%"
          border="2px solid"
          borderColor="#224AA0"
          opacity={0.4}
          transform="rotate(-1deg)"
          zIndex={0}
        />
        <Image
          src={src}
          alt={alt}
          w="100%"
          border="2px solid"
          borderColor="#0a1628"
          position="relative"
          zIndex={1}
          transition="transform 0.2s"
          _hover={{ transform: 'scale(1.02)' }}
        />
      </Box>

      {/* Lightbox overlay - Portal renders outside normal DOM hierarchy */}
      {isOpen && (
        <Portal>
          <Box
            position="fixed"
            top="0"
            left="0"
            width="100vw"
            height="100vh"
            bg="rgba(0, 0, 0, 0.95)"
            zIndex={9999}
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            onClick={() => setIsOpen(false)}
            p={{ base: 4, md: 0 }}
          >
            <Image
              src={src}
              alt={alt}
              w="80vw"
              maxW="80vw"
              maxH="80vh"
              objectFit="contain"
              border="3px solid"
              borderColor="#224AA0"
            />

            <Text
              position="absolute"
              bottom={{ base: '16px', md: '30px' }}
              left="50%"
              transform="translateX(-50%)"
              color="#e8f0fe"
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="bold"
              letterSpacing="wide"
            >
              Click anywhere to close
            </Text>
          </Box>
        </Portal>
      )}
    </>
  )
}