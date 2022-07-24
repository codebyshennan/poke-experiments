import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { FacebookProvider } from 'react-facebook'
import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <FacebookProvider appId='5442659299088833'>
        <Component {...pageProps} />
      </FacebookProvider>
    </ChakraProvider>
  )
}

export default MyApp
