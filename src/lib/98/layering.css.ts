import { recipe } from '@vanilla-extract/recipes'

import { fakeBorder } from './fakeBorder.css'

export const layering = recipe({
  base: {
    border: '1px solid',
  },
  variants: {
    depth: {
      inset: {
        borderColor: '#7b7b7b',
        borderRightColor: '#fff',
        borderBottomColor: '#fff',
        boxShadow: fakeBorder('#000', '#c2c2c2'),
      },
      outset: {
        borderColor: '#fff',
        borderRightColor: '#000',
        borderBottomColor: '#000',
        boxShadow: fakeBorder('#c2c2c2', '#7b7b7b'),
      },
      shallow: {
        borderColor: '#7b7b7b',
        borderRightColor: '#fff',
        borderBottomColor: '#fff',
        boxShadow: fakeBorder('#fff', '#7b7b7b'),
      },
    },
    padding: {
      true: {
        padding: 1,
      },
    },
  },
  defaultVariants: {
    depth: 'outset',
    padding: true,
  },
})
