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
  boxShadow: 'inset 1px 1px #fff, inset -1px -1px #7b7b7b',
  userSelect: 'none',
  variants: {
    type: {
      dialog: {
        padding: '2px',
      },
      window: {
        padding: '3px',
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
    <FrameRoot as={as} css={css} type={type}>
      <TitleBar active={active}>
        {icon && <Icon alt="" src={icon} />}
        <Title as={`h${level}`}>{title}</Title>
      </TitleBar>
      {children}
    </FrameRoot>
  )
}

export type { Props }
export default Frame
