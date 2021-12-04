import { Container, Sprite, Text } from '@inlet/react-pixi'
import { TextMetrics, TextStyle } from 'pixi.js'

const error = new URL('./error.png', import.meta.url)

type Props = {
  children: string
  x?: number
  y?: number
}

const style = new TextStyle({
  fill: '#000',
  fontFamily: 'Gulim, sans-serif',
  fontSize: 12,
  wordWrap: true,
  wordWrapWidth: 550,
})

const Body: React.VFC<Props> = ({ children, x = 0, y = 0 }) => {
  const { height } = TextMetrics.measureText(children, style)

  return (
    <Container x={x} y={y}>
      <Sprite image={error.href} roundPixels x={12} />
      <Text roundPixels style={style} text={children} x={61} y={3 + (height < 24 ? 6 : 0)} />
    </Container>
  )
}

export default Body
