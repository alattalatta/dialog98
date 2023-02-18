import { Container, Sprite, Text } from '@pixi/react'
import { TextMetrics, TextStyle } from 'pixi.js'

import type { ButtonProps } from './Button'
import Button from './Button'
import Buttons from './Buttons'
import Frame from './Frame'
import TitleBar from './TitleBar'
import { BUTTON_GAP, BUTTON_WIDTH } from './constants'

type Props = {
  buttons: readonly ButtonProps[]
  children: string
  icon: string
  image: string
  title: string
}

const bodyTextStyle = new TextStyle({
  fill: '#000',
  fontFamily: 'Gulim, sans-serif',
  fontSize: 12,
  wordWrap: true,
  wordWrapWidth: 550,
})

const Dialog: React.FC<Props> = ({ buttons, icon, image, children: childrenProp, title }) => {
  const children = childrenProp.trim()

  const minWidthFromButtons = BUTTON_WIDTH * buttons.length + BUTTON_GAP * (buttons.length - 1) + 16
  const { width: textWidth, height: textHeight } = TextMetrics.measureText(children, bodyTextStyle)

  const bodyHeight = Math.max(24, textHeight)

  const fullWidth = Math.max(minWidthFromButtons, 3 + 61 + textWidth + 12 + 3)
  const fullHeight = bodyHeight + 36 + 55

  const buttonsPos = fullWidth > minWidthFromButtons ? (fullWidth - minWidthFromButtons) / 2 + 8 : 8

  return (
    <Frame height={fullHeight} width={fullWidth}>
      <TitleBar closeButton="disabled" icon={icon} width={fullWidth - 6} x={3} y={3}>
        {title}
      </TitleBar>
      <Container x={3} y={33}>
        <Sprite height={32} image={image} roundPixels width={32} x={12} />
        <Text roundPixels style={bodyTextStyle} text={children} x={61} y={3 + (textHeight < 24 ? 6 : 0)} />
      </Container>
      <Buttons x={buttonsPos} y={bodyHeight + 56}>
        {buttons.map((props, index) => (
          <Button key={index} {...props} />
        ))}
      </Buttons>
    </Frame>
  )
}

export default Dialog
export type { ButtonProps }
