import type { CSS } from '@stitches/react'
import { styled } from '@stitches/react'

const ButtonRoot = styled('button', {
  minWidth: 88,
  height: 21,
  background: '#c2c2c2',
  border: '1px solid #fff',
  borderRightColor: '#000',
  borderBottomColor: '#000',
  color: '#000',
  fontFamily: 'inherit',
  fontSize: '1em',
  padding: 0,
  position: 'relative',
  verticalAlign: 'bottom',
  '&:not(:disabled):active, &:focus': {
    borderColor: '#000',
  },
  '&:focus': {
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
  '&:disabled': {
    color: '#7b7b7b',
    textShadow: '1px 1px #fff',
  },
})

const ButtonContainer = styled('span', {
  height: '100%',
  border: '1px solid #c2c2c2',
  borderRightColor: '#7b7b7b',
  borderBottomColor: '#7b7b7b',
  display: 'block',
  lineHeight: 1,
  padding: '2px 0 5px',
  ':focus > &': {
    borderColor: '#fff',
    borderBottomColor: '#000',
    borderRightColor: '#000',
    boxShadow: 'inset -1px -1px #7b7b7b',
  },
  ':not(:disabled):active > &': {
    borderColor: '#7b7b7b',
    boxShadow: 'none',
    padding: '3px 0 4px',
  },
})

const Button: React.FC<Omit<JSX.IntrinsicElements['button'], 'ref'> & { css?: CSS }> = ({ children, ...props }) => {
  return (
    <ButtonRoot {...props}>
      <ButtonContainer>{children}</ButtonContainer>
    </ButtonRoot>
  )
}

export default Button
