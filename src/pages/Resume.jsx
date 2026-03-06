import { Box, Heading, Text, SimpleGrid, List, Link, Flex } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

function Section({ title, delay = 0 }) {
  return (
    <Box
      mt={10}
      mb={4}
      animation={`${fadeSlideUp} 0.6s ease-out ${delay}s forwards`}
      opacity={0}
    >
      <Heading
        fontSize="2xl"
        fontWeight="900"
        color="#000000"
        letterSpacing="tight"
      >
        {title}
      </Heading>
      <Box w="40px" h="3px" bg="#224AA0" mt={2} />
    </Box>
  )
}

function Entry({ title, subtitle, location, date, bullets }) {
  return (
    <Box mb={6}>
      <Flex justify="space-between" align="baseline">
        <Text fontWeight="bold" color="#0a1628" fontSize="lg">{title}</Text>
        <Text fontSize="md" color="#1e3a5f">{date}</Text>
      </Flex>
      <Flex justify="space-between" align="baseline">
        <Text as="i" fontSize="md" color="#1e3a5f">{subtitle}</Text>
        <Text as="i" fontSize="md" color="#1e3a5f">{location}</Text>
      </Flex>
      {bullets && (
        <List.Root mt={2} pl={4} spacing={1}>
          {bullets.map((b, i) => (
            <List.Item key={i} fontSize="md" color="#0a1628">
              {b}
            </List.Item>
          ))}
        </List.Root>
      )}
    </Box>
  )
}

export default function Resume() {
  return (
    <Box maxW="800px" mx="auto" py={8}>
      {/* Header */}
      <Box
        animation={`${fadeSlideUp} 0.6s ease-out forwards`}
        opacity={0}
      >
        <Heading
          fontSize="4xl"
          fontWeight="900"
          color="#000000"
          letterSpacing="tight"
        >
          Jayden <Text as="span" color="#224AA0">Lombardi</Text>
        </Heading>
        <Text mt={2} fontSize="xl" color="#0a1628">
          jalombardi2004@gmail.com | (518) 502-3680 | Albany, NY
        </Text>
        <Link
          href="https://www.linkedin.com/in/jayden-lombardi/"
          isExternal
          color="#224AA0"
          fontWeight="bold"
          fontSize="xl"
          _hover={{ color: '#1a3a7a' }}
        >
          LinkedIn
        </Link>
        <Box w="60px" h="4px" bg="#224AA0" mt={4} mb={6} />
      </Box>

      {/* Degree Info */}
      <Box
        animation={`${fadeSlideUp} 0.6s ease-out 0.1s forwards`}
        opacity={0}
      >
        <Flex justify="space-between" align="baseline">
          <Text color="#0a1628" fontSize="lg">
            <Text as="span" fontWeight="bold">Bachelor of Science in Video Game Programming</Text>
          </Text>
          <Text fontSize="lg" color="#1e3a5f">May 2026</Text>
        </Flex>
        <Flex justify="space-between">
          <Text fontSize="lg" color="#0a1628" fontWeight="bold">Minor in Computer Science</Text>
          <Text fontSize="lg" color="#1e3a5f">Champlain College, Burlington, VT</Text>
        </Flex>
      </Box>

      {/* Education */}
      <Section title="Education" delay={0.15} />
      <Box animation={`${fadeSlideUp} 0.6s ease-out 0.2s forwards`} opacity={0}>
        <Entry
          title="Champlain College"
          subtitle="Bachelor's Degree Game Programming"
          location="Burlington, VT"
          date="Aug 2022 - May 2026"
          bullets={['GPA of 3.6', 'Minor in Computer Science', 'Fitness Center Employee', 'ex-Student Ambassador']}
        />
        <Entry
          title="Champlain College Montreal"
          subtitle="Game Programming"
          location="Montreal, QC"
          date="Jan 2025 - May 2025"
          bullets={["Semester abroad at Champlain College's Montreal Campus", 'Learned from teachers in the game industry', 'Visited multiple indie studios']}
        />
        <Entry
          title="Capital Region BOCES"
          subtitle="Video Game Design and Implementation"
          location="Schenectady, NY"
          date="Sep 2020 - Jun 2022"
          bullets={['Two years alongside regular high school.', 'First year designing and creating testable, small games within small groups of 4-5.', 'Second year learning Unity and Blender, then creating a testable 3D video game with a group of 14-15.']}
        />
        <Entry
          title="Clayton A Bouton High School"
          subtitle="High School Diploma"
          location="Voorheesville, NY"
          date="Sep 2018 - Jun 2022"
          bullets={['High Honors, Advanced Diploma', 'Varsity Swim team Captain (1 year), Athlete (4 years)', 'National Honors Society']}
        />
      </Box>

      {/* Skills */}
      <Section title="Skills" delay={0.25} />
      <SimpleGrid
        columns={2}
        spacing={8}
        animation={`${fadeSlideUp} 0.6s ease-out 0.3s forwards`}
        opacity={0}
      >
        {[
          { heading: 'Technical', skills: ['C#', 'C++', 'Unity 2022+', 'Unreal Engine 4 + 5', 'OpenGL', 'Python', 'HTML + CSS'] },
          { heading: 'Professional', skills: ['User Interface / User Experience', 'Game Programming', 'Game Architecture', 'Agile Methodologies', 'Gameplay Mechanics', 'Communication'] },
        ].map(({ heading, skills }) => (
          <Box key={heading}>
            <Text fontWeight="bold" mb={2} fontSize="md" color="#0a1628" letterSpacing="wide">
              {heading}
            </Text>
            <List.Root pl={4} spacing={1}>
              {skills.map((s) => (
                <List.Item key={s} fontSize="md" color="#0a1628">
                  {s}
                </List.Item>
              ))}
            </List.Root>
          </Box>
        ))}
      </SimpleGrid>

      {/* Relevant Courses */}
      <Section title="Relevant Courses" delay={0.35} />
      <SimpleGrid
        columns={3}
        spacing={6}
        animation={`${fadeSlideUp} 0.6s ease-out 0.4s forwards`}
        opacity={0}
      >
        {[
          { heading: 'Studio & Capstone', courses: ['Game Studio 1 & 2', 'College Capstone Game Development', 'Advanced Seminar: Game Programming', "Game Programmer's Portfolio"] },
          { heading: 'Programming & Systems', courses: ['Advanced Programming', 'AI for Video Games', 'Game Architecture', 'Game Physics', 'Intermediate Graphics and Animation Programming', 'Web and Mobile Development', 'Networking for Online Games'] },
          { heading: 'Math & Fundamentals', courses: ['Data Structures & Algorithms', 'Matrices, Vectors, and 3D Math', 'Discrete Mathematics', 'Linear Algebra', 'Computer Architecture', 'Python Programming', 'Modern Graphics Programming'] },
        ].map(({ heading, courses }) => (
          <Box key={heading}>
            <Text fontWeight="bold" mb={2} fontSize="md" color="#0a1628" letterSpacing="wide">
              {heading}
            </Text>
            <List.Root pl={4} spacing={1}>
              {courses.map((c) => (
                <List.Item key={c} fontSize="md" color="#0a1628">
                  {c}
                </List.Item>
              ))}
            </List.Root>
          </Box>
        ))}
      </SimpleGrid>

      {/* Work Experience */}
      <Section title="Work Experience" delay={0.45} />
      <Box animation={`${fadeSlideUp} 0.6s ease-out 0.5s forwards`} opacity={0}>
        <Entry
          title="Programming Intern"
          subtitle="WereWolf Studios"
          location="Albany, NY"
          date="May 2024 - June 2024"
          bullets={['Hands-on experience in Unreal Engine 5 building levels, creating blueprints, and working with player and game states/controllers.', 'Worked directly with the CEO, COO, and technical support in a remote environment using Google Teams and Slack.', 'Integrated personal contributions into larger repositories.']}
        />
        <Entry
          title="Fitness Center Desk Worker"
          subtitle="Champlain College"
          location="Burlington, VT"
          date="Aug 2023 - Present"
          bullets={['Maintained daily operations at the Hub/Information desk, checking in patrons and maintaining a workout space for 200+ students and faculty.', 'Developed communication, problem solving, and multitasking skills through frequent patron interaction.']}
        />
        <Entry
          title="Lifeguard"
          subtitle="City of Albany Dept. of Rec."
          location="Albany, NY"
          date="Jun 2020 - Aug 2024"
          bullets={['Practiced and provided respectful customer service', 'Identified and corrected unsafe behaviors of swimmers', 'Upkeep and maintenance of sanitary and chlorine-related needs for two pools', 'Teamwork in large groups to keep pools operational']}
        />
      </Box>
    </Box>
  )
}