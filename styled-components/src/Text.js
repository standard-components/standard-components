import styled from 'styled-components'
import tag from 'clean-tag'

import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  propTypes
} from 'styled-system'

const Text = styled(tag.p)(
  [],
  color,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign
)

Text.displayName = 'Text'
Text.propTypes = {
  ...propTypes.fontFamily,
  ...propTypes.fontSize,
  ...propTypes.fontWeight,
  ...propTypes.letterSpacing,
  ...propTypes.lineHeight,
  ...propTypes.textAlign
}

export default Text
