import styled from 'styled-components'
import {
  space,
  color,
  width,
  fontSize,
  flex,
  alignSelf,
  order,
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
  fontWeight,
  lineHeight,
  textAlign,
  letterSpacing,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  border,
  borderColor,
  borderRadius
} from 'styled-system'
import tag from 'clean-tag'

export const Box = styled(tag)([],
  space,
  color,
  width,
  fontSize,
  flex,
  alignSelf,
  order
)

Box.displayName = 'Box'

export const Flex = styled(Box)([], {
  display: 'flex'
},
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap
)

Flex.displayName = 'Flex'

export const Text = styled(tag)([],
  space,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  letterSpacing
)

Text.displayName = 'Text'

export const Heading = styled(Text)([],)

Heading.displayName = 'Heading'

Heading.defaultProps = {
  is: 'h2',
  m: 0,
  fontSize: 4,
  fontWeight: 'bold',
  lineHeight: 1.25
}

export const Image = styled(tag.img)([], {
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
},
  space,
  color,
  width
)

Image.displayName = 'Image'

export const BackgroundImage = styled(Box)([],
  backgroundImage,
  backgroundSize,
  backgroundPosition
)

BackgroundImage.displayName = 'BackgroundImage'

BackgroundImage.defaultProps = {
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

export const Button = styled(tag.button)([], {
  fontFamily: 'inherit',
  fontWeight: 'bold',
  lineHeight: 1.25,
  appearance: 'none',
  textDecoration: 'none',
  display: 'inline-block',
  verticalAlign: 'middle',
  textAlign: 'center',
},
  space,
  color,
  fontSize,
  border,
  borderRadius,
  borderColor
)

Button.displayName = 'Button'

Button.defaultProps = {
  m: 0,
  px: 3,
  py: 2,
  fontSize: 'inherit',
  color: 'white',
  bg: 'blue',
  border: 0,
  borderRadius: 2
}

export const Link = styled(tag.a)([],
  space,
  color
)

Link.displayName = 'Link'

export default {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  BackgroundImage,
  Button,
  Link
}
