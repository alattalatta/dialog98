import { Container, Graphics, Sprite, Text, withFilters } from '@inlet/react-pixi'
import type { Graphics as GraphicsPixi } from 'pixi.js'
import { TextMetrics } from 'pixi.js'
import { TextStyle } from 'pixi.js'
import { useCallback, useMemo } from 'react'

import { BUTTON_HEIGHT, BUTTON_WIDTH } from './constants'

const focusOverlay = new URL('./focus-overlay.png', import.meta.url)

type Props = {
  children: string
  shortcut?: string
  x?: number
  y?: number
} & (
  | {
      disabled?: never
      focused?: never
    }
  | {
      disabled?: never
      focused: boolean
    }
  | {
      disabled: boolean
      focused?: never
    }
)

type LabelProps = {
  children: string
  fill: number
  shortcut?: string
  x?: number
  y?: number
}

const Label: React.VFC<LabelProps> = ({ children, fill, shortcut, x = 0, y = 0 }) => {
  const style = useMemo(
    () =>
      new TextStyle({
        fill,
        fontFamily: 'Gulim, sans-serif',
        fontSize: 12,
      }),
    [fill],
  )

  const labelWidth = TextMetrics.measureText(children, style).width
  const parenWidth = shortcut ? TextMetrics.measureText('(', style).width : 0
  const { width: shortcutWidth, height: shortcutHeight } = shortcut
    ? TextMetrics.measureText(shortcut, style)
    : { width: 0, height: 0 }
  const fullWidth = labelWidth + parenWidth * 2 + shortcutWidth

  const labelX = -fullWidth / 2
  const shortcutX = labelX + labelWidth

  const underline = useCallback(
    (ctx: GraphicsPixi) => {
      ctx
        .clear()
        .lineStyle(1, fill, 1, 1)
        .moveTo(parenWidth, shortcutHeight)
        .lineTo(parenWidth + shortcutWidth, shortcutHeight)
    },
    [parenWidth, shortcutWidth, shortcutHeight],
  )

  return (
    <Container x={x} y={y}>
      <Text roundPixels style={style} text={children} x={labelX} />
      {shortcut && (
        <Container x={shortcutX}>
          <Text roundPixels style={style} text={`(${shortcut})`} />
          <Graphics draw={underline} />
        </Container>
      )}
    </Container>
  )
}

const Button: React.VFC<Props> = ({ children, shortcut, x = 0, y = 0, ...state }) => {
  const draw = useCallback(
    (ctx: GraphicsPixi) => {
      const width = BUTTON_WIDTH
      const height = BUTTON_HEIGHT

      ctx.clear()

      // background
      ctx
        .beginFill(0xc2c2c2)
        .moveTo(0, 0)
        .lineTo(width, 0)
        .lineTo(width, height)
        .lineTo(0, height)
        .lineTo(0, 0)
        .endFill()

      if (state.focused) {
        ctx
          .lineStyle(1, 0, 1, 1)
          .moveTo(0, height)
          .lineTo(0, 0)
          .lineTo(width, 0)
          .lineTo(width, height)
          .lineTo(-1, height)
          .moveTo(0, height)
          .lineTo(width, height)
          .lineTo(width, 0)
        ctx
          .lineStyle(1, 0xffffff, 1, 1)
          .moveTo(1, height - 2)
          .lineTo(1, 1)
          .lineTo(width - 2, 1)
        ctx
          .lineStyle(1, 0x7b7b7b, 1, 1)
          .moveTo(width - 2, 1)
          .lineTo(width - 2, height - 2)
          .lineTo(1, height - 2)
      } else {
        ctx.lineStyle(1, 0xffffff, 1, 1).moveTo(0, height).lineTo(0, 0).lineTo(width, 0)
        ctx.lineStyle(1, 0, 1, 1).moveTo(width, 0).lineTo(width, height).lineTo(0, height)
        ctx
          .lineStyle(1, 0x7b7b7b, 1, 1)
          .moveTo(width - 1, 1)
          .lineTo(width - 1, height - 1)
          .lineTo(1, height - 1)
      }
    },
    [state.focused],
  )

  return (
    <Container x={x} y={y}>
      <Graphics draw={draw} />
      <Container x={BUTTON_WIDTH / 2} y={4}>
        {state.disabled && (
          <Label fill={0xffffff} shortcut={shortcut} x={1} y={1}>
            {children}
          </Label>
        )}
        <Label fill={state.disabled ? 0x7b7b7b : 0} shortcut={shortcut}>
          {children}
        </Label>
      </Container>
      {state.focused && <Sprite image={focusOverlay.href} roundPixels />}
    </Container>
  )
}

export default Button

withFilters
