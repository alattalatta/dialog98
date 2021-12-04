import { Container, Graphics, Text } from '@inlet/react-pixi'
import type { Graphics as GraphicsPixi } from 'pixi.js'
import { TextStyle } from 'pixi.js'
import { useCallback } from 'react'

type Props = {
  children: string
  width: number
  x: number
  y: number
}

const style = new TextStyle({
  fill: '#fff',
  fontFamily: 'Gulim, sans-serif',
  fontSize: 12,
})

const TitleBar: React.VFC<Props> = ({ children, width: w, ...props }) => {
  const draw = useCallback(
    (ctx: GraphicsPixi) => {
      const width = w + 64 + 16

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
    [w],
  )

  return (
    <Container {...props}>
      <Graphics draw={draw} />
      <Text style={style} text={children} x={2} y={3} />
    </Container>
  )
}

export default TitleBar
