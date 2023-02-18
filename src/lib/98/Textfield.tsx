import clsx from 'clsx'

import * as styles from './Textfield.css'
import { layering } from './layering.css'

const Textfield: React.FC<Omit<JSX.IntrinsicElements['textarea'], 'ref'>> = ({ className, style, ...props }) => {
  return (
    <div className={clsx(layering({ depth: 'inset' }), className)} style={style}>
      <textarea className={styles.textarea} {...props} />
    </div>
  )
}

export default Textfield
