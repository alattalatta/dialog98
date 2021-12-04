import type { CSS } from '@stitches/react'
import { styled } from '@stitches/react'

const FrameRoot = styled('article', {
  background: '#c2c2c2',
  border: '1px solid #c2c2c2',
  borderRightColor: '#000',
  borderBottomColor: '#000',
})

const FrameContainer = styled('div', {
  border: '1px solid #fff',
  borderRightColor: '#7b7b7b',
  borderBottomColor: '#7b7b7b',
  padding: '1px 1px 12px',
})

const Frame: React.FC<{ as?: keyof JSX.IntrinsicElements; css?: CSS }> = ({ children, as, css }) => {
  return (
    <FrameRoot as={as} css={css}>
      <FrameContainer>{children}</FrameContainer>
    </FrameRoot>
  )
}

export default Frame
