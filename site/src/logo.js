import React from 'react'

const radius = 11
const rad = a => Math.PI * a / 180
const round = n => Math.round(n * 1000) / 1000
const rx = (r, a) => round(r * Math.cos(rad(a)))
const ry = (r, a) => round(r * Math.sin(rad(a)))
const num = n => (n < 0.0000001) ? 0 : n

const offset = 90
const getPoints = length => Array.from({ length })
  .map((n, i) => {
    const a = 360 / length * i - offset
    const x = rx(radius, a)
    const y = ry(radius, a)
    return { x, y }
  })

const points = getPoints(6)

const [ a, b, c, d, e, f ] = points

const line = ({ x, y }) => [ 'L', x, y ].join(' ')
const hex = [
  'M', a.x, a.y,
  line(b),
  line(c),
  line(d),
  line(e),
  line(f),
].join(' ')

const Logo = ({
  size = 256,
  color = 'currentcolor',
  styles // for scrs svg output
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='-12 -12 24 24'
    width={size}
    height={size}
    fill={color}>
    {styles}
    <path d={hex} />
  </svg>
)
const hole = (
  <circle
    cx='0'
    cy='0'
    r='5'
    fill='white'
  />
)

export default Logo
