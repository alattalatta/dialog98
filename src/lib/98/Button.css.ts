import { style } from '@vanilla-extract/css'

import { fakeBorder } from './fakeBorder.css'
import { layering } from './layering.css'

export const root = style([
  layering({ depth: 'outset', padding: false }),
  {
    minWidth: 88,
    height: 24,
    background: '#c2c2c2',
    color: '#000',
    fontFamily: 'inherit',
    fontSize: '1em',
    lineHeight: 1,
    padding: '3px 16px 6px',
    position: 'relative',
    verticalAlign: 'bottom',
    selectors: {
      '&:not(:disabled):active, &:focus': {
        borderColor: '#000',
      },
      '&:focus': {
        boxShadow: `${fakeBorder('#fff', '#000')}, inset -2px -2px #7b7b7b`,
        outline: 'none',
      },
      '&:focus::after': {
        content: '""',
        display: 'block',
        border: '1px dotted #000',
        pointerEvents: 'none',
        position: 'absolute',
        inset: 3,
      },
      '&:not(:disabled):active': {
        boxShadow: fakeBorder('#7b7b7b', '#7b7b7b'),
      },
      '&:disabled': {
        color: '#7b7b7b',
        textShadow: '1px 1px #fff',
      },
    },
  },
])

export const label = style({
  display: 'block',
  selectors: {
    ':not(:disabled):active > &': {
      transform: 'translateY(1px)',
    },
  },
})
