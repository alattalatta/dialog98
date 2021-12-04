import { Container, Graphics, Text } from '@inlet/react-pixi'
import type { Graphics as GraphicsPixi } from 'pixi.js'
import { TextMetrics } from 'pixi.js'
import { TextStyle } from 'pixi.js'
import { useCallback } from 'react'

import { BUTTON_HEIGHT, BUTTON_WIDTH } from './constants'

type Props = {
  children: string
  shortcut?: string
  x?: number
  y?: number
}

const style = new TextStyle({
  fill: '#000',
  fontFamily: 'Gulim, sans-serif',
  fontSize: 12,
})

const Button: React.VFC<Props> = ({ children, shortcut, x = 0, y = 0 }) => {
  const draw = useCallback((ctx: GraphicsPixi) => {
    const width = BUTTON_WIDTH
    const height = BUTTON_HEIGHT

    ctx.clear()

    ctx.beginFill(0xc2c2c2).moveTo(0, 0).lineTo(width, 0).lineTo(width, height).lineTo(0, height).lineTo(0, 0).endFill()

    ctx.lineStyle(1, 0xffffff, 1, 1).moveTo(0, height).lineTo(0, 0).lineTo(width, 0)

    ctx.lineStyle(1, 0, 1, 1).moveTo(width, 0).lineTo(width, height).lineTo(0, height)

    ctx
      .lineStyle(1, 0x7b7b7b, 1, 1)
      .moveTo(width - 1, 1)
      .lineTo(width - 1, height - 1)
      .lineTo(1, height - 1)
  }, [])

  const labelWidth = TextMetrics.measureText(children, style).width
  const parenWidth = shortcut ? TextMetrics.measureText('(', style).width : 0
  const { width: shortcutWidth, height: shortcutHeight } = shortcut
    ? TextMetrics.measureText(shortcut, style)
    : { width: 0, height: 0 }
  const fullWidth = labelWidth + parenWidth * 2 + shortcutWidth

  const underline = useCallback(
    (ctx: GraphicsPixi) => {
      ctx
        .clear()
        .lineStyle(1, 0, 1, 1)
        .moveTo(parenWidth, shortcutHeight)
        .lineTo(parenWidth + shortcutWidth, shortcutHeight)
    },
    [parenWidth, shortcutWidth, shortcutHeight],
  )

  const labelX = -fullWidth / 2
  const shortcutX = labelX + labelWidth

  return (
    <Container x={x} y={y}>
      <Graphics draw={draw} />
      <Container x={BUTTON_WIDTH / 2} y={4}>
        <Text roundPixels style={style} text={children} x={labelX} />
        {shortcut && (
          <Container x={shortcutX}>
            <Text roundPixels style={style} text={`(${shortcut})`} />
            <Graphics draw={underline} />
          </Container>
        )}
      </Container>
    </Container>
  )
}

export default Button
