import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { FacebookProvider } from 'react-facebook'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <FacebookProvider appId='5442659299088833'>
        <Component {...pageProps} />
      </FacebookProvider>
    </ChakraProvider>
  )
}

export default MyApp
