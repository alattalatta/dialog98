import { style } from '@vanilla-extract/css'

const shape = new URL('./images/radio.svg', import.meta.url).href

export const root = style({
  display: 'inline-block',
  position: 'relative',
  selectors: {
    '&::before': {
      content: '""',
      width: 8,
      height: 8,
      background: '#fff',
      display: 'block',
      position: 'absolute',
      top: 2,
      left: 2,
    },
    '&::after': {
      content: '""',
      width: 12,
      height: 12,
      background: `url(${shape})`,
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    '&:not(:disabled):active::before': {
      background: '#c2c2c2',
    },
  },
})

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
  width: 4,
  height: 4,
  display: 'block',
  visibility: 'hidden',
  position: 'absolute',
  top: 4,
  left: 4,
  selectors: {
    ':checked + &': {
      visibility: 'visible',
    },
  },
})

export const label = style({
  marginLeft: 16,
  selectors: {
    ':focus ~ &': {
      outline: '1px dotted #000',
    },
  },
})
