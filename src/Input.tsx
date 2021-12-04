import { styled } from '@stitches/react'

const InputRoot = styled('div', {
  height: 21,
  border: '1px solid #7b7b7b',
  borderRightColor: '#fff',
  borderBottomColor: '#fff',
})

const InputField = styled('input', {
  width: '100%',
  height: '100%',
  border: '1px solid #000',
  borderRightColor: '#c2c2c2',
  borderBottomColor: '#c2c2c2',
  display: 'block',
  fontFamily: 'inherit',
  fontSize: '12px',
  lineHeight: 1,
  padding: '1px 1px 4px',
  '&:focus': {
    outline: 'none',
  },
})

const Input: React.VFC<Omit<JSX.IntrinsicElements['input'], 'ref'>> = (props) => {
  return (
    <InputRoot>
      <InputField {...props} />
    </InputRoot>
  )
}

export default Input
