import { styled } from '@stitches/react'

import Layer from './Layer'

const Input: React.FC<Omit<JSX.IntrinsicElements['input'], 'ref'>> = ({ className, ...props }) => {
  return (
    <Layer className={className} css={{ height: 21 }} depth="inset">
      <InputField {...props} />
    </Layer>
  )
}

export default Input

const InputField = styled('input', {
  width: '100%',
  height: '100%',
  background: '#fff',
  border: 'none',
  display: 'block',
  fontFamily: 'inherit',
  fontSize: '12px',
  lineHeight: 1,
  padding: '1px 1px 4px',
  '&:focus': {
    outline: 'none',
  },
  '&:disabled, &:read-only': {
    background: '#c2c2c2',
  },
  '&:disabled': {
    color: '#7b7b7b',
  },
})
