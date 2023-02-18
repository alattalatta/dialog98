import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { fakeBorder } from '../fakeBorder'

export const root = recipe({
  base: {
    background: '#c2c2c2',
    border: '1px solid #c2c2c2',
    borderRightColor: '#000',
    borderBottomColor: '#000',
    boxShadow: fakeBorder('#fff', '#7b7b7b'),
    userSelect: 'none',
  },
  variants: {
    type: {
      dialog: {
        padding: 2,
      },
      window: {
        padding: 3,
      },
    },
  },
})

export const titleBar = recipe({
  base: {
    display: 'flex',
    padding: '1px 2px',
  },
  variants: {
    active: {
      true: {
        background: '#00007b',
        color: '#fff',
      },
      false: {
        background: '#7b7b7b',
        color: '#c2c2c2',
      },
    },
  },
})

export const icon = style({
  width: 16,
  height: 16,
  imageRendering: 'pixelated',
  marginRight: 3,
})

export const title = style({
  fontSize: '1rem',
  fontWeight: 400,
  margin: 0,
  padding: '2px 0',
})
