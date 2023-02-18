import clsx from 'clsx'

import * as styles from './Frame.css'

type Props = {
  active?: boolean
  as?: keyof JSX.IntrinsicElements
  children?: React.ReactNode
  className?: string
  icon?: string
  level?: 1 | 2 | 3
  style?: React.CSSProperties
  title: string
  type: 'dialog' | 'window'
}

const Frame: React.FC<Props> = ({
  active = true,
  as: Root = 'article',
  children,
  className,
  icon,
  level = 1,
  style,
  title,
  type,
}) => {
  const Heading = `h${level}` as const

  return (
    <Root className={clsx(styles.root({ type }), className)} style={style}>
      <header className={styles.titleBar({ active })}>
        {icon && <img alt="" className={styles.icon} src={icon} />}
        <Heading className={styles.title}>{title}</Heading>
      </header>
      {children}
    </Root>
  )
}

export type { Props as FrameProps }
export default Frame
