import React, { createElement as el } from 'react'
import styled from 'styled-components'
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

const Text = ({ is, ...props }) => {
  const Component = styled(is)([],
    color,
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    textAlign
  )

  return el(Component, props)
}

Text.displayName = 'Text'
Text.propTypes = {
  ...propTypes.fontFamily,
  ...propTypes.fontSize,
  ...propTypes.fontWeight,
  ...propTypes.letterSpacing,
  ...propTypes.lineHeight,
  ...propTypes.textAlign,
  ...propTypes.propTypes
}
Text.defaultProps = {
  is: 'p'
}

export default Text
