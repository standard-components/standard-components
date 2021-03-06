import styled from 'styled-components'
import tag from 'clean-tag'

import {
  alignItems,
  flexWrap,
  flexDirection,
  justifyContent,
  space,
  width
} from 'styled-system'

const Flex = styled(tag.div)(
  [{ display: 'flex' }],
  alignItems,
  flexWrap,
  flexDirection,
  justifyContent,
  space,
  width,
)

Flex.displayName = 'Flex'
Flex.propTypes = {
  ...alignItems.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...justifyContent.propTypes,
  ...space.propTypes,
  ...width.propTypes
}

export default Flex
