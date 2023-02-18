import { Container } from '@pixi/react'
import { Children } from 'react'

import { BUTTON_GAP, BUTTON_WIDTH } from './constants'

type Props = {
  children?: React.ReactNode
  x: number
  y: number
}

const Buttons: React.FC<Props> = ({ children, x, y }) => {
  const buttonCount = Children.count(children)
  const totalWidth = BUTTON_WIDTH * buttonCount + BUTTON_GAP * (buttonCount - 1)

  return (
    <Container x={x - totalWidth / 2} y={y}>
      {Children.map(children, (child, index) => (
        <Container x={BUTTON_WIDTH * index + BUTTON_GAP * index}>{child}</Container>
      ))}
    </Container>
  )
}

export default Buttons
