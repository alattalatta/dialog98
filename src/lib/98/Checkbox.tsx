import type { CSS } from '@stitches/react'
import { styled } from '@stitches/react'

import { baseCSS, insetCSS } from './Layer'

type Props = Omit<JSX.IntrinsicElements['input'], 'ref' | 'type'> & { css?: CSS; label: string }

const tick = new URL('./images/checkbox-tick.svg', import.meta.url).href

const Root = styled('label', {
  display: 'inline-block',
  position: 'relative',
  '&::before': {
    ...baseCSS,
    ...insetCSS,
    content: '""',
    width: 13,
    height: 13,
    background: '#fff',
    boxSizing: 'border-box',
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
  width: 9,
  height: 9,
  display: 'block',
  visibility: 'hidden',
  position: 'absolute',
  top: 2,
  left: 2,
  ':checked + &': {
    visibility: 'visible',
  },
})

const Label = styled('label', {
  marginLeft: 17,
  ':focus ~ &': {
    outline: '1px dotted #000',
  },
})

const Checkbox: React.VFC<Props> = ({ className, css, id, label, ...props }) => {
  return (
    <Root className={className} css={css} role="none">
      <Input id={id} type="checkbox" {...props} />
      <Tick alt="" src={tick} />
      {label && <Label htmlFor={id}>{label}</Label>}
    </Root>
  )
}

export default Checkbox
