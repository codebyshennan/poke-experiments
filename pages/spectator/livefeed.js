import React from 'react'
import PropTypes from 'prop-types'
import SpectatorNav from '../../components/spectator/Navbar'

const livefeed = (props) => {
  return (
    <>
      <iframe
        className='relative h-full w-full'
        src='https://www.youtube.com/embed/live_stream?channel=UCx56vBLQ42-5r4XYwVOLnnw'
        title='YouTube video player'
        frameBorder={'0'}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
      <SpectatorNav />
    </>
  )
}

livefeed.propTypes = {}

export default livefeed
