import React from 'react'
import { BackgroundImage } from '../src'

const image = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'

export default () => (
  <BackgroundImage
    p={5}
    backgroundImage={image}
  />
)
