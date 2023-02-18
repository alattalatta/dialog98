import { style } from '@vanilla-extract/css'

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

export const renderingArea = style({
  height: 180,
})
