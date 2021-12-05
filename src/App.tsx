import { styled } from '@stitches/react'
import { useState } from 'react'

import Renderer from './Renderer'
import Button from './lib/98/Button'
import Checkbox from './lib/98/Checkbox'
import Frame from './lib/98/Frame'
import Input_ from './lib/98/Input'
import Layer from './lib/98/Layer'
import Radio from './lib/98/Radio'
import Textfield from './lib/98/Textfield'
import type { ButtonProps } from './render/Dialog'
import Dialog from './render/Dialog'

const InputSet = styled('div', {
  '& + &': {
    marginTop: 12,
  },
})

const Legend = styled('legend', {
  background: '#c2c2c2',
  padding: '0 3px',
})

const Input = styled(Input_, {
  marginTop: 8,
})

const App: React.VFC = () => {
  const [title, setTitle] = useState('프린터 설정 오류')
  const [content, setContent] = useState('갑수갑수김상수박박쓰')
  const [image, setImage] = useState(new URL('./render/error.png', import.meta.url).href)
  const [buttons, setButtons] = useState<ButtonProps[]>([
    {
      label: '확인',
      shortcut: 'Y',
      disabled: false,
      focused: true,
    },
  ])

  const addButton = (): void => {
    setButtons([...buttons, { label: '', shortcut: '', disabled: false, focused: false }])
    window.setTimeout(() => {
      const buttonCount = buttons.length
      document.getElementById(`label-${buttonCount}`)?.focus()
    })
  }

  return (
    <Frame
      css={{ maxWidth: 800, margin: '16px auto 0' }}
      icon="https://win98icons.alexmeub.com/icons/png/recycle_bin_empty_cool-4.png"
      title="대화상자 98"
      type="dialog"
    >
      <div style={{ margin: '8px 8px 12px' }}>
        <Layer css={{ background: '#fff' }} depth="inset">
          <Renderer css={{ height: 300 }}>
            <Dialog buttons={buttons} image={image} title={title}>
              {content}
            </Dialog>
          </Renderer>
        </Layer>
        <Layer as="form" css={{ display: 'flex', columnGap: 12, marginTop: 12, padding: 12 }} depth="outset">
          <Layer as="fieldset" css={{ flexGrow: 1, padding: 12 }} depth="shallow">
            <Legend>텍스트</Legend>
            <InputSet>
              <label htmlFor="title">대화상자 제목</label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </InputSet>
            <InputSet>
              <label htmlFor="content">내용</label>
              <Textfield
                css={{ height: 128, marginTop: 8 }}
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </InputSet>
            <InputSet>
              <label htmlFor="image">이미지 (32×32)</label>
              <Input id="image" value={image} onChange={(e) => setImage(e.target.value)} />
            </InputSet>
          </Layer>
          <Layer as="fieldset" css={{ flexGrow: 1, margin: 0, padding: 12 }} depth="shallow">
            <Legend>버튼</Legend>
            {buttons.map((button, index) => (
              <Layer key={index} as="fieldset" css={{ margin: '8px 0 0', padding: 8 }} depth="shallow">
                <Legend>{button.label || `${index + 1}번`}</Legend>
                <InputSet>
                  <label htmlFor={`label-${index}`}>레이블</label>
                  <Input
                    id={`label-${index}`}
                    value={button.label}
                    onChange={(e) =>
                      setButtons(buttons.map((b, i) => (i === index ? { ...b, label: e.target.value } : b)))
                    }
                  />
                </InputSet>
                <InputSet>
                  <label htmlFor={`shortcut-${index}`}>단축키</label>
                  <Input
                    id={`shortcut-${index}`}
                    value={button.shortcut}
                    onChange={(e) =>
                      setButtons(buttons.map((b, i) => (i === index ? { ...b, shortcut: e.target.value[0] || '' } : b)))
                    }
                  />
                </InputSet>
                <InputSet>
                  <Checkbox
                    checked={button.disabled}
                    id={`disabled-${index}`}
                    label="비활성"
                    onChange={(e) =>
                      setButtons(buttons.map((b, i) => (i === index ? { ...b, disabled: e.target.checked } : b)))
                    }
                  />
                </InputSet>
                <Button
                  css={{ marginTop: 8 }}
                  disabled={buttons.length === 1}
                  type="button"
                  onClick={() => setButtons(buttons.filter((_, i) => i !== index))}
                >
                  {button.label || `${index + 1}번`} 버튼 삭제
                </Button>
              </Layer>
            ))}
            <Button css={{ marginTop: 8 }} type="button" onClick={addButton}>
              추가
            </Button>
          </Layer>
        </Layer>
      </div>
    </Frame>
  )
}

export default App
