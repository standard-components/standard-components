import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Image
} from 'standard-components'
import { Standard } from '@compositor/logo'

const CSS = ({
  css = '*{box-sizing:border-box}body{margin:0;font-family:system-ui,sans-serif}'
}) =>
  <style
    dangerouslySetInnerHTML={{
      __html: css
    }}
  />

const BlockLink = Link.extend([], {
  display: 'inline-block',
  color: 'inherit',
  textDecoration: 'none'
})

const Badge = ({
  image = 'https://img.shields.io/badge/standard-components-blue.svg?style=flat-square&longCache=true',
  href = 'https://github.com/standard-components/standard-components'
}) =>
  <BlockLink href={href}>
    <Image src={image} />
  </BlockLink>

export default props => (
  <React.Fragment>
    <head>
      <title>Standard Components</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <CSS />

    </head>
    <Box px={3} py={5}>
      <Flex alignItems='center'>
        <Standard size={128} />
        <Box ml={3}>
          <Heading
            is='h1'
            fontSize={5}>
            Standard Components
          </Heading>
          <Badge />
        </Box>
      </Flex>
    </Box>
  </React.Fragment>
)
