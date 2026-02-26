import { Box, Heading, Text, Separator, SimpleGrid, List, Link, Flex } from '@chakra-ui/react'

function Section({ title }) {
  return (
    <>
      <Heading size="md" mt={8} mb={3}>{title}</Heading>
      <Separator borderColor="black" mb={4} />
    </>
  )
}

function Entry({ title, subtitle, location, date, bullets }) {
  return (
    <Box mb={5}>
      <Flex justify="space-between">
        <Text fontWeight="bold" >{title}</Text>
        <Text fontSize="sm">{date}</Text>
      </Flex>
      <Flex justify="space-between">
        <Text as="i" fontSize="sm">{subtitle}</Text>
        <Text as="i" fontSize="sm">{location}</Text>
      </Flex>
      {bullets && (
        <List.Root mt={2} pl={4} spacing={1}>
          {bullets.map((b, i) => <List.Item key={i} fontSize="sm">{b}</List.Item>)}
        </List.Root>
      )}
    </Box>
  )
}

export default function Resume() {
  return (
    <Box maxW="800px" mx="auto">

      {/* Header */}
      <Heading size="xl">Jayden Lombardi</Heading>
      <Text mt={1}>jalombardi2004@gmail.com | (518) 502-3680 | Albany, NY</Text>
      <Link href="https://www.linkedin.com/in/jayden-lombardi/" isExternal color="blue.400">LinkedIn</Link>
      <Separator borderColor="black" mt={4} mb={4} />
      <Flex justify="space-between">
        <Text><strong>Bachelor of Science in Video Game Programming</strong>, Minor in Computer Science</Text>
        <Text fontSize="sm">May 2026</Text>
      </Flex>
      <Flex justify="space-between">
        <Text fontSize="sm">Champlain College</Text>
        <Text fontSize="sm">Burlington, VT</Text>
      </Flex>

      {/* Education */}
      <Section title="Education" />
      <Entry title="Champlain College" subtitle="Bachelor's Degree Game Programming" location="Burlington, VT" date="Aug 2022 - May 2026"
        bullets={['GPA of 3.6', 'Minor in Computer Science', 'Fitness Center Employee', 'ex-Student Ambassador']} />
      <Entry title="Champlain College Montreal" subtitle="Game Programming" location="Montreal, QC" date="Jan 2025 - May 2025"
        bullets={["Semester abroad at Champlain College's Montreal Campus", 'Learned from teachers in the game industry', 'Visited multiple indie studios']} />
      <Entry title="Capital Region BOCES" subtitle="Video Game Design and Implementation" location="Schenectady, NY" date="Sep 2020 - Jun 2022"
        bullets={['I spent two years here alongside my regular high school.', 'Worked for the first year designing and creating testable, small games within small groups of 4-5.', 'Worked for the first half of the second year learning Unity and Blender.', 'Worked for the second half of the second year creating a testable 3D video game with a group of 14-15.']} />
      <Entry title="Clayton A Bouton High School" subtitle="High School Diploma" location="Voorheesville, NY" date="Sep 2018 - Jun 2022"
        bullets={['Grade: High Honors, Advanced Diploma', 'Captain of the Varsity Swim team 1 year.', 'Athlete on the Varsity Swim team 4 years.', 'National Honors Society.', 'Worked a Learn to Swim after school program 2 years.']} />

      {/* Skills */}
      <Section title="Skills" />
      <SimpleGrid columns={2} spacing={6}>
        {[
          { heading: 'Technical', skills: ['C#', 'C++', 'Unity 2022+', 'Unreal Engine 4 + 5', 'OpenGL', 'Python', 'HTML + CSS'] },
          { heading: 'Professional', skills: ['User Interface / User Experience', 'Game Programming', 'Game Architecture', 'Agile Methodologies', 'Gameplay Mechanics', 'Game Development', 'Communication'] },
        ].map(({ heading, skills }) => (
          <Box key={heading}>
            <Text fontWeight="bold" mb={2} fontSize="sm">{heading}</Text>
            <List.Root pl={4} spacing={1}>
              {skills.map(s => <List.Item key={s} fontSize="sm">{s}</List.Item>)}
            </List.Root>
          </Box>
        ))}
      </SimpleGrid>

      {/* Relevant Courses */}
      <Section title="Relevant Courses" />
      <SimpleGrid columns={3} spacing={6}>
        {[
          { heading: 'Studio & Capstone', courses: ['Game Studio 1 & 2', 'College Capstone Game Development', 'Advanced Seminar: Game Programming', "Game Programmer's Portfolio"] },
          { heading: 'Programming & Systems', courses: ['Advanced Programming', 'AI for Video Games', 'Game Architecture', 'Game Physics', 'Intermediate Graphics and Animation Programming', 'Web and Mobile Development', 'Networking for Online Games'] },
          { heading: 'Math & Fundamentals', courses: ['Data Structures & Algorithms', 'Matrices, Vectors, and 3D Math', 'Discrete Mathematics', 'Linear Algebra', 'Computer Architecture', 'Python Programming', 'Modern Graphics Programming'] },
        ].map(({ heading, courses }) => (
          <Box key={heading}>
            <Text fontWeight="bold" mb={2} fontSize="sm">{heading}</Text>
            <List.Root pl={4} spacing={1}>
              {courses.map(c => <List.Item key={c} fontSize="sm">{c}</List.Item>)}
            </List.Root>
          </Box>
        ))}
      </SimpleGrid>

      {/* Work Experience */}
      <Section title="Work Experience" />
      <Entry title="Programming Intern" subtitle="WereWolf Studios" location="Albany, NY" date="May 2024 - June 2024"
        bullets={['Acquired hands-on experience in Unreal Engine 5 building levels, creating blueprints, and working with player and game states/controllers.', 'Worked directly with the CEO, COO, and technical support in a remote environment using Google Teams and Slack.', 'Integrated personal contributions into larger repositories.']} />
      <Entry title="Fitness Center Desk Worker" subtitle="Champlain College" location="Burlington, VT" date="Aug 2023 - Present"
        bullets={['Maintained daily operations at the Hub/Information desk, checking in patrons and maintaining a workout space for 200+ students and faculty.', 'Developed communication, problem solving, and multitasking skills through frequent patron interaction.']} />
      <Entry title="Lifeguard" subtitle="City of Albany Dept. of Rec." location="Albany, NY" date="Jun 2020 - Aug 2024"
        bullets={['Practiced and provided respectful customer service', 'Identified and corrected unsafe behaviors of swimmers, such as running, diving, and horseplay', 'Upkeep, and maintained the sanitary and chlorine-related needs for two pools', 'Worked in big groups of people using teamwork to keep said pools up and running']} />

    </Box>
  )
}