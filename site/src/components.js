import React from 'react'
import { BaseTheme } from 'mdx-themes'

const theme = {
  maxWidth: 'none',
  color: 'white',
  background: 'black',
  link: 'magenta'
}

export const Root = ({ children }) =>
  <BaseTheme theme={theme}>
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 128,
      textAlign: 'center'
    }}>
      {children}
    </div>
  </BaseTheme>
