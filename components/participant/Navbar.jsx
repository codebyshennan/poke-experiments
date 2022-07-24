import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { Box, Flex, Text } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { Discover, Help, Id, Medal } from '../../icons'

const ParticipantNav = (props) => {
  const [navLinks, setNavlinks] = useState([
    { icon: <Id />, text: 'Race', active: true },
    { icon: <Medal />, text: 'Leaderboard', active: false },
    { icon: <Discover />, text: 'Discover', active: false },
    { icon: <Help />, text: 'Help', active: false },
  ])

  const setActive = (text) => {
    const updatedNavLinks = navLinks.map((links) => {
      if (links.text === text) {
        return { ...links, active: true }
      } else {
        return { ...links, active: false }
      }
    })

    setNavlinks(updatedNavLinks)
  }

  return (
    <Flex
      as='nav'
      position='fixed'
      left={0}
      bottom={0}
      w='100vw'
      bg={'#F5F7FA'}
      py={3}
    >
      {navLinks.map(({ icon, text, active }) => {
        return (
          <Box flex='1' key={text} onClick={() => setActive(text)}>
            <VStack color='#101AA1' opacity={active ? '100%' : '35%'}>
              {icon}
              <Text fontSize={'10px'}>{text}</Text>
            </VStack>
          </Box>
        )
      })}
    </Flex>
  )
}

ParticipantNav.propTypes = {}

export default ParticipantNav
