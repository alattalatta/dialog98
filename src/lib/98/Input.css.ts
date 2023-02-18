import { style } from '@vanilla-extract/css'

export const root = style({
  height: 21,
})

export const input = style({
  width: '100%',
  height: '100%',
  background: '#fff',
  border: 'none',
  display: 'block',
  fontFamily: 'inherit',
  fontSize: '12px',
  lineHeight: 1,
  padding: '1px 1px 4px',
  selectors: {
    '&:focus': {
      outline: 'none',
    },
    '&:disabled, &:read-only': {
      background: '#c2c2c2',
    },
    '&:disabled': {
      color: '#7b7b7b',
    },
  },
})
