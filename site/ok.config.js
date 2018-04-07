import React from 'react'
import { Box } from 'grid-styled'

const Container = Box.extend`
  max-width: 768px;
`
Container.defaultProps = {
  mx: 'auto'
}

const components = {
  Box
}
const theme = {}

const provider = Component => props => (
  <Container px={3} py={4}>
    <Component {...props} />
  </Container>
)

export default {
  components,
  theme,
  provider
}
