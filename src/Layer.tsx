import { styled } from '@stitches/react'

const Layer = styled('div', {
  border: '1px solid',
  padding: 1,
  variants: {
    depth: {
      inset: {
        borderColor: '#7b7b7b',
        borderRightColor: '#fff',
        borderBottomColor: '#fff',
        boxShadow: 'inset 1px 1px #000, inset -1px -1px #c2c2c2',
      },
      outset: {
        borderColor: '#fff',
        borderRightColor: '#000',
        borderBottomColor: '#000',
        boxShadow: 'inset 1px 1px #c2c2c2, inset -1px -1px #7b7b7b',
      },
    },
  },
  defaultVariants: {
    depth: 'outset',
  },
})

export default Layer
