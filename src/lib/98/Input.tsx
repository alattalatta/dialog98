import clsx from 'clsx'

import * as styles from './Input.css'
import * as layerStyles from './Layer.css'

const Input: React.FC<Omit<JSX.IntrinsicElements['input'], 'ref'>> = ({ className, ...props }) => {
  return (
    <div className={clsx(layerStyles.layer({ depth: 'inset' }), styles.root, className)}>
      <input className={styles.input} {...props} />
    </div>
  )
}

export default Input
