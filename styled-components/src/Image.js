import styled from 'styled-components'
import tag from 'clean-tag'

import {
  space,
  width
} from 'styled-system'

const Image = styled(tag.img)(
  [],
  space,
  width
)

Image.displayName = 'Image'
Image.propTypes = {
  ...space.propTypes,
  ...width.propTypes
}

export default Image
