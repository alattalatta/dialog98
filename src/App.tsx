import Button from './lib/98/Button'
import Frame from './lib/98/Frame'
import Input from './lib/98/Input'
import Layer from './lib/98/Layer'

const App: React.VFC = () => {
  return (
    <Frame
      css={{ width: 800, margin: '300px auto 0' }}
      icon="https://win98icons.alexmeub.com/icons/png/recycle_bin_empty_cool-4.png"
      title="대화상자 98"
      type="dialog"
    >
      <div style={{ margin: '8px 8px 0' }}>
        <Layer css={{ background: '#fff' }} depth="inset">
          <Input defaultValue="Hello, World!" type="text" />
          <Input defaultValue="Hello, World!" disabled type="text" />
          <Input defaultValue="Hello, World!" readOnly type="text" />
          <Layer css={{ marginTop: 8, padding: 12 }} depth="inset">
            <p>레이어~</p>
          </Layer>
        </Layer>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '12px 0' }}>
        <Button>확인</Button>
        <Button disabled>취소</Button>
      </div>
    </Frame>
  )
}

export default App
