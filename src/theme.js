import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  globalCss: {
    body: {
      fontFamily: 'Georgia, serif',
      bg: '#FFFFFF',
      color: '#0a1628',
    },
  },

  theme: {
    tokens: {
      colors: {
        brand: {
          black: { value: '#000000' },
          white: { value: '#FFFFFF' },
          primary: { value: '#224AA0' },      // Steel Azure
          prussian: { value: '#0a1628' },     // Body text
          oxford: { value: '#1e3a5f' },       // Secondary text
          dusk: { value: '#3b5998' },         // Placeholders
          alice: { value: '#e8f0fe' },        // Subtle backgrounds
        },
      },
      fontSizes: {
        pageTitle: { value: '2.25rem' },
        sectionHead: { value: '1.5rem' },
        cardTitle: { value: '1.25rem' },
        body: { value: '1rem' },
        label: { value: '0.875rem' },
        fine: { value: '0.75rem' },
      },
    },

    textStyles: {
      h1: {
        value: {
          fontSize: 'pageTitle',
          fontWeight: '900',
          letterSpacing: '-0.02em',
          lineHeight: '1.1',
          color: '#000000',
        },
      },
      h2: {
        value: {
          fontSize: 'sectionHead',
          fontWeight: '900',
          letterSpacing: '-0.02em',
          lineHeight: '1.2',
          color: '#000000',
        },
      },
      h3: {
        value: {
          fontSize: 'cardTitle',
          fontWeight: 'bold',
          letterSpacing: '-0.01em',
          color: '#0a1628',
        },
      },
      body: {
        value: {
          fontSize: 'body',
          lineHeight: '1.7',
          color: '#0a1628',
        },
      },
      label: {
        value: {
          fontSize: 'label',
          fontWeight: 'bold',
          letterSpacing: '0.05em',
          color: '#0a1628',
        },
      },
      caption: {
        value: {
          fontSize: 'label',
          color: '#1e3a5f',
        },
      },
      fine: {
        value: {
          fontSize: 'fine',
          color: '#1e3a5f',
        },
      },
      tag: {
        value: {
          fontSize: 'label',
          fontWeight: 'bold',
          letterSpacing: '0.1em',
          color: '#1e3a5f',
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)