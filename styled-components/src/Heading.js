import styled from 'styled-components'

import Text from './Text'

const Heading = styled(Text)([])

Heading.displayName = 'Heading'
Heading.defaultProps = {
  is: 'h3',
  m: 0
}

export default Heading
