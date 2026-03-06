import { Box } from '@chakra-ui/react'
import ImageLightbox from './ImageLightbox'

export default function GalleryGrid({ images }) {
  return (
    <Box
      columnCount={{ base: 2, md: 3 }}
      columnGap="16px"
    >
      {images.map((img, i) => (
        <Box key={i} mb="16px" display="inline-block" w="100%">
          <ImageLightbox src={img.src} alt={img.alt} />
        </Box>
      ))}
    </Box>
  )
}