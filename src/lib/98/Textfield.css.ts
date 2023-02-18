import { style } from '@vanilla-extract/css'

export const textarea = style({
  width: '100%',
  height: '100%',
  background: '#fff',
  border: 'none',
  display: 'block',
  fontFamily: 'inherit',
  fontSize: '12px',
  lineHeight: 1,
  margin: 0,
  overflow: 'hidden',
  padding: '1px 1px 4px',
  resize: 'none',
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
