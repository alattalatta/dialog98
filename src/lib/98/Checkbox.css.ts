import { style } from '@vanilla-extract/css'

import { layering } from './layering.css'

export const root = style({
  display: 'inline-block',
  position: 'relative',
})

export const ticker = style([
  layering({ depth: 'inset' }),
  {
    content: '""',
    width: 13,
    height: 13,
    background: '#fff',
    boxSizing: 'border-box',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    selectors: {
      [`${root}:active > :not(:disabled) ~ &`]: {
        background: '#c2c2c2',
      },
    },
  },
])

export const input = style({
  width: 0,
  height: 0,
  background: 'none',
  border: 0,
  margin: 0,
  opacity: 0,
  position: 'fixed',
  top: 0,
})

export const tick = style({
  width: 9,
  height: 9,
  display: 'block',
  visibility: 'hidden',
  position: 'absolute',
  top: 2,
  left: 2,
  selectors: {
    ':checked ~ &': {
      visibility: 'visible',
    },
  },
})

export const label = style({
  marginLeft: 17,
  selectors: {
    ':focus ~ &': {
      outline: '1px dotted #000',
    },
  },
})
