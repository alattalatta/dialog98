import type { CSS } from '@stitches/react'
import { styled } from '@stitches/react'

import { fakeBorder } from './lib/fakeBorder'

const baseCSS: CSS = {
  border: '1px solid',
  padding: 1,
}

const insetCSS: CSS = {
  borderColor: '#7b7b7b',
  borderRightColor: '#fff',
  borderBottomColor: '#fff',
  boxShadow: fakeBorder('#000', '#c2c2c2'),
}

const outsetCSS: CSS = {
  borderColor: '#fff',
  borderRightColor: '#000',
  borderBottomColor: '#000',
  boxShadow: fakeBorder('#c2c2c2', '#7b7b7b'),
}

const Layer = styled('div', {
  ...baseCSS,
  variants: {
    depth: {
      inset: insetCSS,
      outset: outsetCSS,
    },
  },
  defaultVariants: {
    depth: 'outset',
  },
})

export { baseCSS, insetCSS, outsetCSS }
export default Layer
