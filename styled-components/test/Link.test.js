import React from 'react'
import { create as render } from 'react-test-renderer'
import 'jest-styled-components'

import { Link } from '../src'

test('renders a link', () => {
  const result = render(<Link>Hello, world!</Link>).toJSON()

  expect(result.type).toBe('a')
})

test('accepts props for style', () => {
  const result = render(
    <Link color="tomato">Hello, world!</Link>
  ).toJSON()

  expect(result).toHaveStyleRule('color', 'tomato')
})
