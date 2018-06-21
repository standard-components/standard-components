import styled from 'styled-components'
import tag from 'clean-tag'

import {
  space,
  width,
  propTypes
} from 'styled-system'

const Box = styled(tag.div)(
  [],
  space,
  width
)

Box.displayName = 'Box'
Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes
}

export default Box
