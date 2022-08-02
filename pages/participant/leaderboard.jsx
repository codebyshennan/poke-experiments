import React from 'react'
// import PropTypes from 'prop-types'
import Navbar from '../../components/participant/Navbar'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Button,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export default function Leaderboard(props) {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Box w='500px'>
        <Box>
          <InputGroup>
            {/* <InputLeftElement
            pointerEvents='none'
            color='gray.300'
            fontSize='1.2em'
            children='$'
          /> */}
            <Input placeholder='Search Racer’s/ Team’s name' />
            <InputRightElement children={<SearchIcon color='green.500' />} />
          </InputGroup>
        </Box>
        <Navbar />
      </Box>
    </Flex>
  )
}
