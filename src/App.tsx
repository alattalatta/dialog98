import Button from './Button'
import Frame from './Frame'
import Input from './Input'

const App: React.VFC = () => {
  return (
    <Frame css={{ width: 800, margin: '300px auto 0' }}>
      <div>
        <p>Hello, World!</p>
        <Input defaultValue="Hello, World!" type="text" />
      </div>
      <Button>확인</Button>
      <Button disabled>취소</Button>
    </Frame>
  )
}

export default App
