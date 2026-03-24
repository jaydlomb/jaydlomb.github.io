import { useRef, useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

export default function FadeInOnScroll({ children, delay = 0 }) {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <Box
      ref={ref}
      opacity={0}
      animation={visible ? `${fadeSlideUp} 0.6s ease-out ${delay}s forwards` : 'none'}
    >
      {children}
    </Box>
  )
}