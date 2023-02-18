import { Container, Graphics, Text } from '@pixi/react'
import type { Graphics as GraphicsPixi } from 'pixi.js'
import { TextMetrics, TextStyle } from 'pixi.js'
import { useCallback, useMemo } from 'react'

import { BUTTON_WIDTH } from '../constants'

type Props = {
  children: string
  fill: number
  shortcut?: string
  x?: number
  y?: number
}

const labelBaseStyle = new TextStyle({
  fontFamily: 'Gulim, sans-serif',
  fontSize: 12,
})
const ELLIPSIS_WIDTH = TextMetrics.measureText('...', labelBaseStyle).width
const PAREN_WIDTH = TextMetrics.measureText('(', labelBaseStyle).width
const OVERFLOW_THRESHOLD = BUTTON_WIDTH - 16

const binsearch = (max: number, getValue: (current: number) => number, needle: number): number => {
  let min = 0

  while (min <= max) {
    const guess = Math.floor((min + max) / 2)
    const compareVal = getValue(guess)

    if (compareVal === needle) {
      return guess
    }

    if (compareVal < needle) {
      min = guess + 1
    } else {
      max = guess - 1
    }
  }

  return max
}

const Label: React.FC<Props> = ({ children: childrenProp, fill, shortcut, x = 0, y = 0 }) => {
  const style = useMemo(
    () =>
      new TextStyle({
        fill,
        fontFamily: labelBaseStyle.fontFamily,
        fontSize: labelBaseStyle.fontSize,
      }),
    [fill],
  )

  const parenWidth = shortcut ? PAREN_WIDTH : 0
  const { width: shortcutWidth, height: shortcutHeight } = shortcut
    ? TextMetrics.measureText(shortcut, style)
    : { width: 0, height: 0 }

  const [children, labelWidth] = (() => {
    const fullTextWidth = TextMetrics.measureText(childrenProp, labelBaseStyle).width
    if (fullTextWidth + shortcutWidth <= OVERFLOW_THRESHOLD) {
      return [childrenProp, fullTextWidth]
    }

    const sliceIndex = binsearch(
      childrenProp.length,
      (i) => TextMetrics.measureText(childrenProp.slice(0, i), labelBaseStyle).width + shortcutWidth,
      OVERFLOW_THRESHOLD - ELLIPSIS_WIDTH,
    )
    const slicedChildren = `${childrenProp.slice(0, sliceIndex)}...`

    return [slicedChildren, TextMetrics.measureText(slicedChildren, labelBaseStyle).width]
  })()

  const combinedWidth = labelWidth + parenWidth * 2 + shortcutWidth

  const labelX = -combinedWidth / 2
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
      {!!shortcut && (
        <Container x={shortcutX}>
          <Text roundPixels style={style} text={`(${shortcut})`} />
          <Graphics draw={underline} />
        </Container>
      )}
    </Container>
  )
}

export default Label
