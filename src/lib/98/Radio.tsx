import type { CSS } from '@stitches/react'
import { styled } from '@stitches/react'

type Props = Omit<JSX.IntrinsicElements['input'], 'ref' | 'type'> & { css?: CSS; label: string }

const shape = new URL('./images/radio.svg', import.meta.url).href
const tick = new URL('./images/radio-tick.svg', import.meta.url).href

const Checkbox: React.VFC<Props> = ({ className, css, id, label, ...props }) => {
  return (
    <Root className={className} css={css} role="none">
      <Input id={id} type="radio" {...props} />
      <Tick alt="" src={tick} />
      {label && <Label htmlFor={id}>{label}</Label>}
    </Root>
  )
}

export default Checkbox

const Root = styled('label', {
  display: 'inline-block',
  position: 'relative',
  '&::before': {
    content: '""',
    width: 8,
    height: 8,
    background: '#fff',
    display: 'block',
    position: 'absolute',
    top: 2,
    left: 2,
  },
  '&::after': {
    content: '""',
    width: 12,
    height: 12,
    background: `url(${shape})`,
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  '&:not(:disabled):active::before': {
    background: '#c2c2c2',
  },
})

const Input = styled('input', {
  width: 0,
  height: 0,
  background: 'none',
  border: 0,
  margin: 0,
  opacity: 0,
  position: 'fixed',
  top: 0,
})

const Tick = styled('img', {
  width: 4,
  height: 4,
  display: 'block',
  visibility: 'hidden',
  position: 'absolute',
  top: 4,
  left: 4,
  ':checked + &': {
    visibility: 'visible',
  },
})

const Label = styled('label', {
  marginLeft: 16,
  ':focus ~ &': {
    outline: '1px dotted #000',
  },
})
