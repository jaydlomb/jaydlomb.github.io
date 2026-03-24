import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Box, Heading, Text, VStack, Input, Textarea, Button, Flex } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

export default function Contact() {
  const form = useRef()
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const info = [
    { label: 'Phone', value: '(518) 502-3680' },
    { label: 'Personal Email', value: 'jalombardi2004@gmail.com' },
    { label: 'Personal Address', value: 'Voorheesville, New York 12186' },
    { label: 'School Email', value: 'jayden.lombardi@mymail.champlain.edu' },
    { label: 'School Address', value: 'Champlain College, Maple Street, Burlington VT 05401' },
  ]

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm('website_contacting', 'template_thwla8c', form.current, 'zUjiDV0rq9SHYM7dM')
      .then(() => {
        setSent(true)
        e.target.reset()
      })
      .catch(() => setError(true))
  }

  return (
    <Box maxW="600px" mx="auto" py={{ base: 4, lg: 8 }} px={{ base: 4, md: 0 }}>
      {/* Header */}
      <Box
        animation={`${fadeSlideUp} 0.6s ease-out forwards`}
        opacity={0}
      >
        <Heading
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="900"
          color="#000000"
          letterSpacing="tight"
          mb={2}
        >
          Contact <Text as="span" color="#224AA0">Info</Text>
        </Heading>
        <Text color="#0a1628" mb={4} fontSize={{ base: 'md', md: 'lg' }}>
          Questions? Comments? Concerns? I look forward to hearing from you!
        </Text>
        <Box w="60px" h="4px" bg="#224AA0" mb={{ base: 6, md: 8 }} />
      </Box>

      {/* Contact Info */}
      <VStack
        align="start"
        spacing={{ base: 4, md: 5 }}
        mb={{ base: 12, md: 20 }}
        animation={`${fadeSlideUp} 0.6s ease-out 0.1s forwards`}
        opacity={0}
      >
        {info.map(({ label, value }) => (
          <Box key={label}>
            <Text fontWeight="bold" color="#0a1628" fontSize={{ base: 'sm', md: 'md' }} letterSpacing="wide">
              {label}
            </Text>
            <Text color="#1e3a5f" fontSize={{ base: 'md', md: 'lg' }}>{value}</Text>
          </Box>
        ))}
      </VStack>

      {/* Form Section */}
      <Box
        animation={`${fadeSlideUp} 0.6s ease-out 0.2s forwards`}
        opacity={0}
      >
        <Heading
          fontSize={{ base: 'xl', md: '2xl' }}
          fontWeight="900"
          color="#000000"
          letterSpacing="tight"
          mb={2}
        >
          Send a <Text as="span" color="#224AA0">Message</Text>
        </Heading>
        <Box w="40px" h="3px" bg="#224AA0" mb={6} />

        <form ref={form} onSubmit={sendEmail}>
          <VStack spacing={4} align="stretch">
            <Flex gap={4} direction={{ base: 'column', md: 'row' }}>
              <Input
                name="first_name"
                placeholder="First Name"
                required
                bg="#e8f0fe"
                border="2px solid"
                borderColor="#1e3a5f"
                color="#0a1628"
                _placeholder={{ color: '#3b5998' }}
                _hover={{ borderColor: '#224AA0' }}
                _focus={{ borderColor: '#224AA0', boxShadow: '0 0 0 1px #224AA0' }}
                transition="all 0.2s"
              />
              <Input
                name="last_name"
                placeholder="Last Name"
                required
                bg="#e8f0fe"
                border="2px solid"
                borderColor="#1e3a5f"
                color="#0a1628"
                _placeholder={{ color: '#3b5998' }}
                _hover={{ borderColor: '#224AA0' }}
                _focus={{ borderColor: '#224AA0', boxShadow: '0 0 0 1px #224AA0' }}
                transition="all 0.2s"
              />
            </Flex>
            <Input
              name="contact_info"
              placeholder="Email or Phone Number"
              required
              bg="#e8f0fe"
              border="2px solid"
              borderColor="#1e3a5f"
              color="#0a1628"
              _placeholder={{ color: '#3b5998' }}
              _hover={{ borderColor: '#224AA0' }}
              _focus={{ borderColor: '#224AA0', boxShadow: '0 0 0 1px #224AA0' }}
              transition="all 0.2s"
            />
            <Textarea
              name="message"
              placeholder="Message / Inquiry"
              rows={5}
              required
              bg="#e8f0fe"
              border="2px solid"
              borderColor="#1e3a5f"
              color="#0a1628"
              _placeholder={{ color: '#3b5998' }}
              _hover={{ borderColor: '#224AA0' }}
              _focus={{ borderColor: '#224AA0', boxShadow: '0 0 0 1px #224AA0' }}
              transition="all 0.2s"
            />
            <Button
              type="submit"
              bg={sent ? '#16a34a' : error ? '#dc2626' : '#224AA0'}
              color="#FFFFFF"
              px={8}
              py={6}
              fontWeight="bold"
              letterSpacing="wide"
              alignSelf="flex-start"
              _hover={{ bg: sent ? '#15803d' : error ? '#b91c1c' : '#1a3a7a', transform: 'scale(1.02)' }}
              _active={{ transform: 'scale(0.98)' }}
              transition="all 0.2s"
            >
              {sent ? 'Sent!' : error ? 'Failed, try again' : 'Send'}
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  )
}