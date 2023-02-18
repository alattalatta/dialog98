import clsx from 'clsx'

import * as styles from './Input.css'
import { layering } from './layering.css'

const Input: React.FC<Omit<JSX.IntrinsicElements['input'], 'ref'>> = ({ className, ...props }) => {
  return (
    <div className={clsx(layering({ depth: 'inset' }), styles.root, className)}>
      <input className={styles.input} {...props} />
    </div>
  )
}

export default Input
