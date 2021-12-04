import Button from './Button'
import Frame from './Frame'
import Input from './Input'
import Layer from './Layer'

const App: React.VFC = () => {
  return (
    <Frame
      css={{ width: 800, margin: '300px auto 0' }}
      icon="https://win98icons.alexmeub.com/icons/png/recycle_bin_empty_cool-4.png"
      title="대화상자 98"
      type="dialog"
    >
      <div style={{ margin: '8px 8px 0' }}>
        <p>Hello, World!</p>
        <Layer css={{ padding: 12 }}>
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
