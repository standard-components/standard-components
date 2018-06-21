import styled from 'styled-components'
import tag from 'clean-tag'

import {
  borderColor,
  borders,
  color,
  complexStyle,
  display,
  space,
  width
} from 'styled-system'

const buttonStyle = complexStyle({
  key: 'buttons',
  prop: 'variant'
});

const buttonSize = complexStyle({
  key: 'buttonSizes',
  prop: 'size'
});

const Button = styled(tag.button)(
  [],
  borderColor,
  borders,
  buttonSize,
  buttonStyle,
  color,
  display,
  space,
  width
)

Button.displayName = 'Button'
Button.propTypes = {
  ...borderColor.propTypes,
  ...borders.propTypes,
  ...buttonSize.propTypes,
  ...buttonStyle.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...space.propTypes,
  ...width.propTypes
}

export default Button
