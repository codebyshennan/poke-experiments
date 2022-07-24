import { extendTheme } from '@chakra-ui/react'

// declare a variable for our theme and pass our overrides in the e`xtendTheme` method from chakra
const customTheme = extendTheme({
  fonts: {
    body: `'Roboto', sans-serif`,
  },
})

// export our theme
export default customTheme
