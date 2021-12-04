import { Stage } from '@inlet/react-pixi'
import type { CSS } from '@stitches/react'
import { styled } from '@stitches/react'
import type { Application } from 'pixi.js'
import { useEffect, useRef, useState } from 'react'

const Host = styled('div', {
  '& > canvas': {
    display: 'block',
  },
})

const Renderer: React.FC<{ css?: CSS }> = ({ children, css }) => {
  const appRef = useRef<Application>()
  const hostRef = useRef<HTMLDivElement>(null)

  const [dim, setDim] = useState<{ height: number; width: number }>({ width: 0, height: 0 })
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    if (hostRef.current) {
      setDim({ width: hostRef.current.clientWidth, height: hostRef.current.clientHeight })
      setMounted(true)
    }
  }, [])

  useEffect(() => {
    const handler = (): void => void window.setTimeout(() => appRef.current?.render(), 10)

    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <Host ref={hostRef} css={css}>
      {mounted && (
        <Stage
          {...dim}
          options={{ backgroundAlpha: 0, resizeTo: hostRef.current || undefined }}
          raf={false}
          onMount={(app) => (appRef.current = app)}
        >
          {children}
        </Stage>
      )}
    </Host>
  )
}

export default Renderer
