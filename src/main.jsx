import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'
import App from './App.jsx'

const system = createSystem(defaultConfig, 
{
  globalCss: 
  {
    body: 
    {
      fontFamily: 'Georgia, serif',
      bg: '#f9f9f9',
      color: '#111',
    },
  },
})

createRoot(document.getElementById('root')).render
(
  <StrictMode>
    <ChakraProvider value={system}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
)