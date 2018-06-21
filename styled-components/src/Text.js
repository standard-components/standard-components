import styled from 'styled-components'
import tag from 'clean-tag'

import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  space,
  textAlign
} from 'styled-system'

const Text = styled(tag.p)(
  [],
  color,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  space,
  textAlign
)

Text.displayName = 'Text'
Text.defaultProps = {
  m: 0
}
Text.propTypes = {
  ...fontFamily.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...letterSpacing.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes
}

export default Text
