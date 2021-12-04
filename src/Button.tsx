import type { CSS } from '@stitches/react'
import { styled } from '@stitches/react'

import { baseCSS, outsetCSS } from './Layer'
import { fakeBorder } from './lib/fakeBorder'

const ButtonRoot = styled('button', {
  ...baseCSS,
  ...outsetCSS,
  minWidth: 88,
  height: 21,
  background: '#c2c2c2',
  color: '#000',
  fontFamily: 'inherit',
  fontSize: '1em',
  lineHeight: 1,
  padding: '3px 8px 6px',
  position: 'relative',
  verticalAlign: 'bottom',
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
})

const ButtonLabel = styled('span', {
  display: 'block',
  ':not(:disabled):active > &': {
    transform: 'translateY(1px)',
  },
})

const Button: React.FC<Omit<JSX.IntrinsicElements['button'], 'ref'> & { css?: CSS }> = ({ children, ...props }) => {
  return (
    <ButtonRoot {...props}>
      <ButtonLabel>{children}</ButtonLabel>
    </ButtonRoot>
  )
}

export default Button
