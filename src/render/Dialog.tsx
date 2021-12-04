import { Container, Sprite, Text } from '@inlet/react-pixi'
import { TextStyle, TextMetrics } from 'pixi.js'
import { useMemo } from 'react'

import Button from './Button'
import Buttons from './Buttons'
import Frame from './Frame'
import TitleBar from './TitleBar'

const error = new URL('./error.png', import.meta.url)
const internetConnection = new URL('./internet_connection.png', import.meta.url)

type Props = {
  children: string
  title: string
}

const Dialog: React.VFC<Props> = ({ children, title }) => {
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
  const fullWidth = bodyWidth + 64 + 16
  const fullHeight = bodyHeight + 36 + 55

  return (
    <Container x={8} y={8}>
      <Frame height={fullHeight} width={fullWidth} />
      <TitleBar closeButton="disabled" icon={internetConnection.href} width={fullWidth - 6} x={3} y={3}>
        {title}
      </TitleBar>
      <Sprite image={error.href} roundPixels x={17} y={33} />
      <Text roundPixels style={style} text={children} x={64} y={36 + (bodyHeightRaw < 24 ? 6 : 0)} />
      <Buttons x={fullWidth / 2} y={bodyHeight + 56}>
        <Button shortcut="Y">예</Button>
        <Button shortcut="N">아니오</Button>
      </Buttons>
    </Container>
  )
}

export default Dialog
