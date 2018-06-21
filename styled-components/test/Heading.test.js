import React from 'react'
import { create as render } from 'react-test-renderer'
import 'jest-styled-components'

import { Heading } from '../src'

test('renders an h3 with no margin', () => {
  const result = render(<Heading>Hello, world</Heading>).toJSON()

  expect(result.type).toBe('h3')
  expect(result).toHaveStyleRule('margin', '0px')
})

test('accepts props for styling', () => {
  const result = render(
    <Heading is="h1" color="tomato" fontSize={28} />
  ).toJSON()

  expect(result.type).toBe('h1')
  expect(result).toHaveStyleRule('color', 'tomato')
  expect(result).toHaveStyleRule('font-size', '28px')
})
