import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Box, Heading, Text, VStack, Separator, Input, Textarea, Button, Flex  } from '@chakra-ui/react'

export default function Contact() 
{
  const form = useRef()
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const info = 
  [
    { label: 'Phone', value: '(518) 502-3680' },
    { label: 'Personal Email', value: 'jalombardi2004@gmail.com' },
    { label: 'Personal Address', value: 'Voorheesville, New York 12186' },
    { label: 'School Email', value: 'jayden.lombardi@mymail.champlain.edu' },
    { label: 'School Address', value: 'Champlain College, Maple Street, Burlington VT 05401' },
  ]

  const sendEmail = (e) => 
  {
    e.preventDefault()
    emailjs.sendForm('website_contacting', 'template_thwla8c', form.current, 'zUjiDV0rq9SHYM7dM')
      .then(() => setSent(true))
      .catch(() => setError(true))
  }

  return(
    <Box maxW="600px" mx="auto">
      <Heading mb={2}>Contact Info</Heading>
      <Text color="gray.400" mb={6}>Questions? Comments? Concerns? I look forward to hearing from you!</Text>
      <Separator mb={6} />

      <VStack align="start" spacing={4} mb={10}>
        {info.map(({ label, value }) => (
          <Box key={label}>
            <Text fontWeight="bold">{label}</Text>
            <Text>{value}</Text>
          </Box>
        ))}
      </VStack>

      <Separator mb={6} />
      <Heading size="md" mb={4}>Send a Message</Heading>

      <form ref={form} onSubmit={sendEmail}>
        <VStack spacing={4} align="stretch">
          <Flex gap={4}>
            <Input name="first_name" placeholder="First Name" required />
            <Input name="last_name" placeholder="Last Name" required />
          </Flex>
          <Input name="contact_info" placeholder="Email or Phone Number" required />
          <Textarea name="message" placeholder="Message / Inquiry" rows={5} required />
          <Button type="submit" colorScheme="blue" alignSelf="flex-start">
            {sent ? 'Sent!' : error ? 'Failed, try again' : 'Send'}
          </Button>
        </VStack>
      </form>
    </Box>
  )
}