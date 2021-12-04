import { Container, Sprite } from '@inlet/react-pixi'
import { useState } from 'react'

import Body from './Body'
import Button from './Button'
import Buttons from './Buttons'
import Frame from './Frame'
import TitleBar from './TitleBar'

const ErrorIcon = new URL('../msg_error-0.png', import.meta.url)

const Dialog: React.VFC = () => {
  const [dim, setDim] = useState<{ height: number; width: number }>({ height: 0, width: 0 })

  return (
    <Container x={8} y={8}>
      <Frame {...dim} />
      <TitleBar width={dim.width - 6} x={3} y={3}>
        프린터 설정 오류
      </TitleBar>
      <Sprite image={ErrorIcon.href} x={17} y={33} />
      <Body
        maxWidth={550}
        onMount={setDim}
      >{`문서를 인쇄하기 전 프린터를 설치해 주십시오.\n프린터를 설치하려면 [시작] 메뉴의 [설정]에서 [프린터]를 선택한 후 [프린터 추가] 아이콘을 두 번 클릭해 주십시오.`}</Body>
      <Buttons x={dim.width / 2} y={dim.height + 56}>
        <Button shortcut="Y">예</Button>
        <Button shortcut="N">아니오</Button>
      </Buttons>
    </Container>
  )
}

export default Dialog
