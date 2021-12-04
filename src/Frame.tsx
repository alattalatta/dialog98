import type { CSS } from '@stitches/react'
import { styled } from '@stitches/react'

type Props = {
  active?: boolean
  as?: keyof JSX.IntrinsicElements
  css?: CSS
  icon?: string
  level?: 1 | 2 | 3
  title: string
  type: 'dialog' | 'window'
}

const FrameRoot = styled('article', {
  background: '#c2c2c2',
  border: '1px solid #c2c2c2',
  borderRightColor: '#000',
  borderBottomColor: '#000',
  userSelect: 'none',
})

const FrameContainer = styled('div', {
  border: '1px solid #fff',
  borderRightColor: '#7b7b7b',
  borderBottomColor: '#7b7b7b',
  variants: {
    type: {
      dialog: {
        padding: '1px',
      },
      window: {
        padding: '2px',
      },
    },
  },
})

const TitleBar = styled('header', {
  display: 'flex',
  padding: '1px 2px',
  variants: {
    active: {
      true: {
        background: '#00007b',
        color: '#fff',
      },
      false: {
        background: '#7b7b7b',
        color: '#c2c2c2',
      },
    },
  },
})

const Icon = styled('img', {
  width: 16,
  height: 16,
  imageRendering: 'pixelated',
  marginRight: 3,
})

const Title = styled('h1', {
  fontSize: '1rem',
  fontWeight: 400,
  margin: 0,
  padding: '2px 0',
})

const Frame: React.FC<Props> = ({ active = true, children, as, css, icon, level = 1, title, type }) => {
  return (
    <FrameRoot as={as} css={css}>
      <FrameContainer type={type}>
        <TitleBar active={active}>
          {icon && <Icon alt="" src={icon} />}
          <Title as={`h${level}`}>{title}</Title>
        </TitleBar>
        {children}
      </FrameContainer>
    </FrameRoot>
  )
}

export type { Props }
export default Frame
