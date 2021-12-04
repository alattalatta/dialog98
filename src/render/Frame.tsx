import { Graphics } from '@inlet/react-pixi'
import type { Graphics as GraphicsPixi } from 'pixi.js'
import { useCallback } from 'react'

type Props = {
  height: number
  width: number
}

const Frame: React.VFC<Props> = ({ height, width }) => {
  const draw = useCallback(
    (ctx: GraphicsPixi) => {
      ctx.clear()

      // base
      ctx
        .beginFill(0xc2c2c2)
        .moveTo(0, 0)
        .lineTo(width, 0)
        .lineTo(width, height)
        .lineTo(0, height)
        .lineTo(0, 0)
        .endFill()

      // 1: bottom-right black
      ctx.lineStyle(1, 0x000, 1, 0).moveTo(0, height).lineTo(width, height).lineTo(width, 0)

      // 2: top-left white
      ctx
        .lineStyle(1, 0xffffff, 1, 0)
        .moveTo(1, height - 1)
        .lineTo(1, 1)
        .lineTo(width - 1, 1)

      // 2: bottom-right gray
      ctx
        .lineStyle(1, 0x7b7b7b, 1, 0)
        .moveTo(1, height - 1)
        .lineTo(width - 1, height - 1)
        .lineTo(width - 1, 1)
    },
    [height, width],
  )

  return <Graphics draw={draw} />
}

export default Frame
