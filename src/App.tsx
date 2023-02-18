import { useState } from 'react'

import * as styles from './App.css'
import Renderer from './Renderer'
import Button from './lib/98/Button'
import Checkbox from './lib/98/Checkbox'
import Frame from './lib/98/Frame'
import Input from './lib/98/Input'
import Layer from './lib/98/Layer'
import Textfield from './lib/98/Textfield'
import type { ButtonProps } from './render/Dialog'
import Dialog from './render/Dialog'

const App: React.FC = () => {
  const [title, setTitle] = useState('프린터 설정 오류')
  const [icon, setIcon] = useState(new URL('./render/internet_connection.png', import.meta.url).href)
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
      style={{ maxWidth: 800, margin: '16px auto 0' }}
      icon="https://win98icons.alexmeub.com/icons/png/recycle_bin_empty_cool-4.png"
      title="대화상자 98"
      type="dialog"
    >
      <div style={{ margin: '8px 8px 12px' }}>
        <Layer style={{ background: '#fff' }} depth="inset">
          <Renderer className={styles.renderingArea}>
            <Dialog buttons={buttons} icon={icon} image={image} title={title}>
              {content}
            </Dialog>
          </Renderer>
        </Layer>
        <Layer as="form" style={{ display: 'flex', columnGap: 12, marginTop: 12, padding: 12 }} depth="outset">
          <Layer as="fieldset" style={{ flexGrow: 1, padding: 12 }} depth="shallow">
            <legend className={styles.legend}>텍스트</legend>
            <div className={styles.inputSet}>
              <label htmlFor="title">제목</label>
              <Input className={styles.input} id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className={styles.inputSet}>
              <label htmlFor="icon">아이콘 (16×16)</label>
              <Input className={styles.input} id="icon" value={icon} onChange={(e) => setIcon(e.target.value)} />
            </div>
            <div className={styles.inputSet}>
              <label htmlFor="content">내용</label>
              <Textfield
                id="content"
                style={{ height: 128, marginTop: 8 }}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className={styles.inputSet}>
              <label htmlFor="image">이미지 (32×32)</label>
              <Input className={styles.input} id="image" value={image} onChange={(e) => setImage(e.target.value)} />
            </div>
          </Layer>
          <Layer as="fieldset" style={{ flexGrow: 1, margin: 0, padding: 12 }} depth="shallow">
            <legend className={styles.legend}>버튼</legend>
            {buttons.map((button, index) => (
              <Layer key={index} as="fieldset" style={{ margin: '8px 0 0', padding: 12 }} depth="shallow">
                <legend className={styles.legend}>{button.label || `${index + 1}번`}</legend>
                <div className={styles.inputSet}>
                  <label htmlFor={`label-${index}`}>레이블</label>
                  <Input
                    id={`label-${index}`}
                    value={button.label}
                    onChange={(e) =>
                      setButtons(buttons.map((b, i) => (i === index ? { ...b, label: e.target.value } : b)))
                    }
                  />
                </div>
                <div className={styles.inputSet}>
                  <label htmlFor={`shortcut-${index}`}>단축키</label>
                  <Input
                    id={`shortcut-${index}`}
                    value={button.shortcut}
                    onChange={(e) =>
                      setButtons(buttons.map((b, i) => (i === index ? { ...b, shortcut: e.target.value[0] || '' } : b)))
                    }
                  />
                </div>
                <div className={styles.inputSet}>
                  <Checkbox
                    checked={button.disabled}
                    id={`disabled-${index}`}
                    label="비활성"
                    onChange={(e) =>
                      setButtons(buttons.map((b, i) => (i === index ? { ...b, disabled: e.target.checked } : b)))
                    }
                  />
                </div>
                <Button
                  disabled={buttons.length === 1}
                  style={{ marginTop: 12 }}
                  type="button"
                  onClick={() => setButtons(buttons.filter((_, i) => i !== index))}
                >
                  {button.label || `${index + 1}번`} 버튼 삭제
                </Button>
              </Layer>
            ))}
            <div style={{ marginTop: 12 }}>
              <label htmlFor="focus" style={{ display: 'block' }}>
                포커스
              </label>
              <select
                id="focus"
                style={{ width: '50%', marginTop: 8 }}
                value={buttons.findIndex(({ disabled, focused }) => focused && !disabled)}
                onChange={(e) => setButtons(buttons.map((b, i) => ({ ...b, focused: parseInt(e.target.value) === i })))}
              >
                <option key={-1} value={-1}>
                  (없음)
                </option>
                {buttons.map(({ disabled, label }, index) => (
                  <option key={index} disabled={disabled} value={index}>
                    {label || `${index + 1}번`}
                  </option>
                ))}
              </select>
            </div>
            <Button style={{ marginTop: 12 }} type="button" onClick={addButton}>
              버튼 추가
            </Button>
          </Layer>
        </Layer>
      </div>
    </Frame>
  )
}

export default App
