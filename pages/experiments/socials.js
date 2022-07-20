import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@chakra-ui/react'
import { GridItem } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import {
  FaCloudDownloadAlt,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa'
import { Center } from '@chakra-ui/react'
import Cookies from 'js-cookie'
import { Share } from 'react-facebook'

const socials = (props) => {
  const escape = (s) => {
    return s.replace(/[^0-9A-Za-z ]/g, (c) => '&#' + c.charCodeAt(0) + ';')
  }

  const defaultMessage = 'welcome to pokemon'
  const phoneNumber = '93371254'

  // const { phoneNumber, email } = Cookies.get()

  return (
    <Center>
      <Grid templateColumns='repeat(6, 0fr)' gap={1}>
        <GridItem>
          <IconButton
            aria-label='download'
            size='lg'
            icon={<FaCloudDownloadAlt />}
          />
        </GridItem>
        <GridItem>
          <IconButton aria-label='instagram' size='lg' icon={<FaInstagram />} />
        </GridItem>
        <GridItem>
          <IconButton
            aria-label='whatsapp'
            size='lg'
            icon={<FaWhatsapp />}
            onClick={() =>
              window.open(
                `https://wa.me/${phoneNumber}?text=${escape(defaultMessage)}`
              )
            }
          />
        </GridItem>
        <GridItem>
          <Share href='http://www.google.com'>
            {({ handleClick, loading }) => (
              <IconButton
                aria-label='whatsapp'
                size='lg'
                icon={<FaFacebook />}
                onClick={handleClick}
              />
            )}
          </Share>
        </GridItem>
        <GridItem>
          <IconButton
            aria-label='telegram'
            size='lg'
            icon={<FaTelegram />}
            onClick={() =>
              window.open(
                `https://t.me/share/url?url=circles.life&text=${defaultMessage}`
              )
            }
          />
        </GridItem>
        <GridItem>
          <IconButton aria-label='tiktok' size='lg' icon={<FaTiktok />} />
        </GridItem>
      </Grid>
    </Center>
  )
}

socials.propTypes = {}

export default socials
