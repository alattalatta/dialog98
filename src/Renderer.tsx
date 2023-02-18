import { Stage } from '@pixi/react'
import clsx from 'clsx'
import type { Application } from 'pixi.js'
import { useEffect, useRef, useState } from 'react'

import * as styles from './Renderer.css'

type Props = {
  children?: React.ReactNode
  className?: string
}

const Renderer: React.FC<Props> = ({ children, className }) => {
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
    <div className={clsx(styles.root, className)}>
      <div ref={hostRef} className={styles.host}>
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
      </div>
    </div>
  )
}

export default Renderer
