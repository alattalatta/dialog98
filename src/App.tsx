import Button from './Button'
import Frame from './Frame'
import Input from './Input'

const App: React.VFC = () => {
  return (
    <Frame
      css={{ width: 800, margin: '300px auto 0' }}
      icon="https://win98icons.alexmeub.com/icons/png/recycle_bin_empty_cool-4.png"
      title="대화상자 98"
      type="dialog"
    >
      <div>
        <p>Hello, World!</p>
        <Input defaultValue="Hello, World!" type="text" />
        <Input defaultValue="Hello, World!" disabled type="text" />
        <Input defaultValue="Hello, World!" readOnly type="text" />
      </div>
      <Button>확인</Button>
      <Button disabled>취소</Button>
    </Frame>
  )
}

export default App
