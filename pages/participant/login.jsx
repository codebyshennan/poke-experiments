import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import { PrismaClient } from '@prisma/client'

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const widget = await prisma.widget.findMany()

  return {
    props: { widget },
  }
}

export default function Login({ widget }) {
  console.log(widget)

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Login
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id='firstName' isRequired>
              <FormLabel>Name</FormLabel>
              <Input type='text' />
            </FormControl>
            <FormControl id='lastName'>
              <FormLabel>Phone Number</FormLabel>
              <Input type='text' />
            </FormControl>
            <FormControl id='email' isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type='email' />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText='Submitting'
                size='lg'
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Login
              </Button>
            </Stack>
            {/* <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack> */}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
