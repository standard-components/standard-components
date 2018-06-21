import React from 'react'
import { create as render } from 'react-test-renderer'
import 'jest-styled-components'

import { Flex } from '../src'

test('renders a div with display flex', () => {
  const result = render(<Flex>Hello, world</Flex>).toJSON()

  expect(result.type).toBe('div')
  expect(result).toHaveStyleRule('display', 'flex')
})

test('accepts props for styling', () => {
  const result = render(
    <Flex is="main" justifyContent="space-between" />
  ).toJSON()

  expect(result.type).toBe('main')
  expect(result).toHaveStyleRule('justify-content', 'space-between')
})
