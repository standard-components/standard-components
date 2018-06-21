import React from 'react'
import { create as render } from 'react-test-renderer'
import 'jest-styled-components'

import { Image } from '../src'

test('renders an image', () => {
  const result = render(<Image src="foo.png" />).toJSON()

  expect(result.type).toBe('img')
})

test('accepts props for styling', () => {
  const result = render(<Image src="foo.png" mt={20} />).toJSON()

  expect(result.type).toBe('img')
  expect(result).toHaveStyleRule('margin-top', '20px')
})
