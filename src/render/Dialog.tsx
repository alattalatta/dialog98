import { Container } from '@inlet/react-pixi'
import { TextMetrics, TextStyle } from 'pixi.js'
import { useMemo } from 'react'

import Body from './Body'
import type { Props as ButtonProps_ } from './Button'
import Button from './Button'
import Buttons from './Buttons'
import Frame from './Frame'
import TitleBar from './TitleBar'

const internetConnection = new URL('./internet_connection.png', import.meta.url)

export type ButtonProps = Omit<ButtonProps_, 'children'> & { label: string }

type Props = {
  buttons: readonly ButtonProps[]
  children: string
  image: string
  title: string
}

const Dialog: React.VFC<Props> = ({ buttons, image, children, title }) => {
  const style = useMemo(
    () =>
      new TextStyle({
        fill: '#000',
        fontFamily: 'Gulim, sans-serif',
        fontSize: 12,
        wordWrap: true,
        wordWrapWidth: 550,
      }),
    [],
  )

  const { width: bodyWidth, height: bodyHeightRaw } = TextMetrics.measureText(children, style)
  const bodyHeight = Math.max(24, bodyHeightRaw)
  const fullWidth = 3 + 61 + bodyWidth + 12 + 3
  const fullHeight = bodyHeight + 36 + 55

  return (
    <Container x={8} y={8}>
      <Frame height={fullHeight} width={fullWidth} />
      <TitleBar closeButton="disabled" icon={internetConnection.href} width={fullWidth - 6} x={3} y={3}>
        {title}
      </TitleBar>
      <Body image={image} x={3} y={33}>
        {children}
      </Body>
      <Buttons x={fullWidth / 2} y={bodyHeight + 56}>
        {buttons.map((props, index) => (
          <Button key={index} {...props}>
            {props.label}
          </Button>
        ))}
      </Buttons>
    </Container>
  )
}

export default Dialog
