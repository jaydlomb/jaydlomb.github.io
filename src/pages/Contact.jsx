import { Box, Heading, Text, VStack, Separator } from '@chakra-ui/react'

export default function Contact() {
  const info = [
    { label: 'Phone', value: '(518) 502-3680' },
    { label: 'Personal Email', value: 'jalombardi2004@gmail.com' },
    { label: 'Personal Address', value: 'Voorheesville, New York 12186' },
    { label: 'School Email', value: 'jayden.lombardi@mymail.champlain.edu' },
    { label: 'School Address', value: 'Champlain College, Maple Street, Burlington VT 05401' },
  ]

  return (
    <Box maxW="600px" mx="auto">
      <Heading mb={2}>Contact Info</Heading>
      <Text color="gray.400" mb={6}>Questions? Comments? Concerns? I look forward to hearing from you!</Text>
      <Separator mb={6} />

      <VStack align="start" spacing={4}>
        {info.map(({ label, value }) => (
          <Box key={label}>
            <Text fontWeight="bold" color="white">{label}</Text>
            <Text color="gray.300">{value}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  )
}