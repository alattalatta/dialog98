import { Container, Graphics, Sprite } from '@pixi/react'
import type { Graphics as GraphicsPixi } from 'pixi.js'
import { useCallback } from 'react'

import Label from './Label'
import { BUTTON_HEIGHT, BUTTON_WIDTH } from '../constants'

const focusOverlay = new URL('../focus-overlay.png', import.meta.url)

export type ButtonProps = {
  children: string
  disabled?: boolean
  focused?: boolean
  shortcut?: string
  x?: number
  y?: number
}

const Button: React.FC<ButtonProps> = ({ children, shortcut, x = 0, y = 0, ...state }) => {
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
      {!state.disabled && state.focused && <Sprite image={focusOverlay.href} roundPixels />}
    </Container>
  )
}

export default Button
