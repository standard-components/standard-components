import React from 'react'
import { create as render } from 'react-test-renderer'
import 'jest-styled-components'

import { BackgroundImage } from '../src'

test('accepts props for background image styles', () => {
  const result = render(
    <BackgroundImage backgroundImage="foo.bar" backgroundRepeat="no-repeat" />
  ).toJSON()

  expect(result.type).toBe('div')
  expect(result).toHaveStyleRule('background-image', 'url(foo.bar)')
  expect(result).toHaveStyleRule('background-repeat', 'no-repeat')
})
