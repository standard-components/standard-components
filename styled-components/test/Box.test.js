import React from 'react'
import { create as render } from 'react-test-renderer'
import 'jest-styled-components'

import { Box } from '../src'

test('renders a paragraph', () => {
  const result = render(<Box>Hello, world</Box>).toJSON()

  expect(result.type).toBe('div')
})

test('accepts props for styling', () => {
  const result = render(
    <Box is="main" p={20} />
  ).toJSON()

  expect(result.type).toBe('main')
  expect(result).toHaveStyleRule('padding', '20px')
})
