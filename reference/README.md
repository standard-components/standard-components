
<img src='https://compositor.io/logo/dist/standard.png' width='128' height='128' />

# Standard Components

A reference implementation of [Standard Components][std]

[![standard-components][badge]][std]

[badge]: https://img.shields.io/badge/standard-components-blue.svg?style=flat-square&longCache=true
[std]: https://github.com/standard-components/standard-components

```sh
npm i standard-components
```

```jsx
import React from 'react'
import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  BackgroundImage,
  Button,
  Link
} from 'standard-components'

const App = props => (
  <Box>
    <BackgroundImage
      px={3}
      py={4}
      backgroundImage='hero.jpg'>
      <Heading is='h1'>Hello Standard</Heading>
      <Button>
        Beep
      </Button>
    </BackgroundImage>
    <Flex
      px={3}
      py={4}
      flexWrap={[ 'wrap', 'nowrap' ]}
      alignItems='center'>
      <Box width={[ 1, 128 ]}>
        <Image src='kitten.png' />
      </Box>
      <Box width={1}>
        <Heading>Meow</Heading>
        <Text>
          Look at <Link href='/cat'>this cat</Link>
        </Text>
      </Box>
    </Flex>
  </Box>
)
```
