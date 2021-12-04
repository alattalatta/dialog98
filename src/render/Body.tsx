import { Text } from '@inlet/react-pixi'
import type { Text as PixiText } from 'pixi.js'
import { TextStyle } from 'pixi.js'
import { useEffect, useMemo, useRef, useState } from 'react'

type Props = {
  children: string
  maxWidth: number
  onMount: (dim: { readonly height: number; readonly width: number }) => void
}

const Body: React.VFC<Props> = ({ children, maxWidth, onMount }) => {
  const ref = useRef<PixiText>(null)
  const [lines, setLines] = useState(1)
  const style = useMemo(
    () =>
      new TextStyle({
        fill: '#000',
        fontFamily: 'Gulim, sans-serif',
        fontSize: 12,
        wordWrap: true,
        wordWrapWidth: maxWidth,
      }),
    [maxWidth],
  )

  useEffect(() => {
    if (ref.current) {
      const l = Math.round(ref.current.height / 12)
      setLines(l)
      // minimum height of 24
      onMount({ height: Math.max(24, ref.current.height), width: ref.current.width })
    }
  }, [children, onMount])

  return <Text ref={ref} roundPixels style={style} text={children} x={64} y={36 + (lines === 1 ? 6 : 0)} />
}

export default Body
