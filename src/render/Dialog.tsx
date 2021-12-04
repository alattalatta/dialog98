import { Container } from '@inlet/react-pixi'
import { TextMetrics, TextStyle } from 'pixi.js'
import { useMemo } from 'react'

import Body from './Body'
import Button from './Button'
import Buttons from './Buttons'
import Frame from './Frame'
import TitleBar from './TitleBar'

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
  const fullWidth = 3 + 61 + bodyWidth + 12 + 3
  const fullHeight = bodyHeight + 36 + 55

  return (
    <Container x={8} y={8}>
      <Frame height={fullHeight} width={fullWidth} />
      <TitleBar closeButton="disabled" icon={internetConnection.href} width={fullWidth - 6} x={3} y={3}>
        {title}
      </TitleBar>
      <Body x={3} y={33}>
        {children}
      </Body>
      <Buttons x={fullWidth / 2} y={bodyHeight + 56}>
        <Button shortcut="Y">예</Button>
        <Button shortcut="N">아니오</Button>
      </Buttons>
    </Container>
  )
}

export default Dialog
