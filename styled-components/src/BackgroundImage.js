import styled from 'styled-components'
import {
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat
} from 'styled-system'

import Box from './Box'

const BackgroundImage = styled(Box)(
  [],
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat
)

BackgroundImage.displayName = 'BackgroundImage'
BackgroundImage.propTypes = {
  ...backgroundImage.propTypes,
  ...backgroundSize.propTypes,
  ...backgroundPosition.propTypes,
  ...backgroundRepeat.propTypes
}

export default BackgroundImage
