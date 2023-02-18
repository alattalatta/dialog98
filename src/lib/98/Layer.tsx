import clsx from 'clsx'

import * as styles from './Layer.css'

type Props = {
  as?: keyof JSX.IntrinsicElements
  children: React.ReactNode
  className?: string
  depth: 'inset' | 'outset' | 'shallow'
  style: React.CSSProperties
}

const Layer: React.FC<Props> = ({ as: Root = 'div', className, depth, ...props }) => {
  return <Root className={clsx(styles.layer({ depth }), className)} {...props} />
}

export default Layer
