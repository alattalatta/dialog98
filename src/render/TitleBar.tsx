import { Container, Graphics, Sprite, Text } from '@inlet/react-pixi'
import type { Graphics as GraphicsPixi } from 'pixi.js'
import { TextStyle } from 'pixi.js'
import { useCallback } from 'react'

const closeButtonImage = new URL('../lib/98/images/close.png', import.meta.url).href
const closeButtonDisabledImage = new URL('../lib/98/images/close-disabled.png', import.meta.url).href

type Props = {
  children: string
  closeButton?: boolean | 'disabled'
  icon?: string
  width: number
  x: number
  y: number
}

const style = new TextStyle({
  fill: '#fff',
  fontFamily: 'Gulim, sans-serif',
  fontSize: 12,
})

const TitleBar: React.VFC<Props> = ({ children, closeButton, icon, width, ...props }) => {
  const draw = useCallback(
    (ctx: GraphicsPixi) => {
      ctx
        .clear()
        .beginFill(0x000081)
        .moveTo(0, 0)
        .lineTo(width, 0)
        .lineTo(width, 18)
        .lineTo(0, 18)
        .lineTo(0, 0)
        .endFill()
    },
    [width],
  )

  return (
    <Container {...props}>
      <Graphics draw={draw} />
      {icon && <Sprite image={icon} x={2} y={1} />}
      <Text style={style} text={children} x={icon ? 21 : 2} y={3} />
      {closeButton && (
        <Sprite image={closeButton === true ? closeButtonImage : closeButtonDisabledImage} x={width - 16 - 2} y={2} />
      )}
    </Container>
  )
}

export default TitleBar
