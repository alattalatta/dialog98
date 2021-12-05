import { Container, Sprite, Text } from '@inlet/react-pixi'
import { TextMetrics, TextStyle } from 'pixi.js'

type Props = {
  children: string
  image: string
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

const Body: React.VFC<Props> = ({ children, image, x = 0, y = 0 }) => {
  const { height } = TextMetrics.measureText(children, style)

  return (
    <Container x={x} y={y}>
      <Sprite height={32} image={image} roundPixels width={32} x={12} />
      <Text roundPixels style={style} text={children} x={61} y={3 + (height < 24 ? 6 : 0)} />
    </Container>
  )
}

export default Body
