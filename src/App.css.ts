import { style } from '@vanilla-extract/css'

import { layering } from './lib/98/layering.css'

export const renderingArea = style({
  height: 180,
})

export const formSection = style([
  layering({ depth: 'shallow', padding: false }),
  {
    flexGrow: 1,
    margin: 0,
    padding: 12,
  },
])

export const buttonFields = style([
  layering({ depth: 'shallow', padding: false }),
  {
    margin: 0,
    padding: 12,
    selectors: {
      '& + &': {
        marginTop: 12,
      },
    },
  },
])

export const inputSet = style({
  selectors: {
    '& + &': {
      marginTop: 12,
    },
  },
})

export const legend = style({
  background: '#c2c2c2',
  padding: '0 3px',
})

export const input = style({
  marginTop: 8,
})
