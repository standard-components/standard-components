import styled from 'styled-components'
import tag from 'clean-tag'

import {
  active,
  color,
  focus,
  hover,
  space,
  pseudoStyle
} from 'styled-system'

const visited = pseudoStyle({
  prop: 'visited',
  pseudoClass: 'visited',
  keys: {
    color: 'colors',
    backgroundColor: 'colors',
    borderColor: 'colors'
  }
});

const Link = styled(tag.a)(
  [],
  active,
  color,
  focus,
  hover,
  space,
  visited
)

Link.displayName = 'Link'
Link.propTypes = {
  ...active.propTypes,
  ...color.propTypes,
  ...focus.propTypes,
  ...hover.propTypes,
  ...space.propTypes,
  ...visited.propTypes
}

export default Link
