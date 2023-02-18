import type { CSSProperties } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { fakeBorder } from '../fakeBorder'

const baseCSS: CSSProperties = {
  border: '1px solid',
  padding: 1,
}

const insetCSS: CSSProperties = {
  borderColor: '#7b7b7b',
  borderRightColor: '#fff',
  borderBottomColor: '#fff',
  boxShadow: fakeBorder('#000', '#c2c2c2'),
}

const outsetCSS: CSSProperties = {
  borderColor: '#fff',
  borderRightColor: '#000',
  borderBottomColor: '#000',
  boxShadow: fakeBorder('#c2c2c2', '#7b7b7b'),
}

const shallowCSS: CSSProperties = {
  borderColor: '#7b7b7b',
  borderRightColor: '#fff',
  borderBottomColor: '#fff',
  boxShadow: fakeBorder('#fff', '#7b7b7b'),
}

const layer = recipe({
  base: {
    ...baseCSS,
  },
  variants: {
    depth: {
      inset: insetCSS,
      outset: outsetCSS,
      shallow: shallowCSS,
    },
  },
  defaultVariants: {
    depth: 'outset',
  },
})

export { baseCSS, insetCSS, outsetCSS, shallowCSS, layer }
