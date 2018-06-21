import React from 'react'
import { create as render } from 'react-test-renderer'
import 'jest-styled-components'

import { Button, ThemeProvider } from '../src'

const theme = {
  buttons: {
    danger: {
      backgroundColor: 'tomato',
      color: 'white'
    }
  }
}

test('accepts renders a button with complex styles', () => {
  const result = render(
    <ThemeProvider theme={theme}>
      <Button variant="danger">Beep</Button>
    </ThemeProvider>
  ).toJSON()

  expect(result.type).toBe('button')
  expect(result).toHaveStyleRule('background-color', 'tomato')
  expect(result).toHaveStyleRule('color', 'white')
})
