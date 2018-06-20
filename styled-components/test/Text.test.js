import React from 'react'
import { create as render } from 'react-test-renderer'
import 'jest-styled-components'

import { Text } from '../src'

test('renders a paragraph', () => {
  const result = render(<Text>Hello, world</Text>).toJSON()

  expect(result.type).toBe('p')
})

test('accepts props for styling', () => {
  const result = render(
    <Text is="span" color="tomato" fontSize={28} />
  ).toJSON()

  expect(result.type).toBe('span')
  expect(result).toHaveStyleRule('color', 'tomato')
  expect(result).toHaveStyleRule('font-size', '28px')
})
