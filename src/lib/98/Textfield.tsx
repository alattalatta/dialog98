import clsx from 'clsx'

import * as layerStyles from './Layer.css'
import * as styles from './Textfield.css'

const Textfield: React.FC<Omit<JSX.IntrinsicElements['textarea'], 'ref'>> = ({ className, style, ...props }) => {
  return (
    <div className={clsx(layerStyles.layer({ depth: 'inset' }), className)} style={style}>
      <textarea className={styles.textarea} {...props} />
    </div>
  )
}

export default Textfield
