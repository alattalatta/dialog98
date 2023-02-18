import clsx from 'clsx'
import { useId } from 'react'

import * as styles from './Checkbox.css'

type Props = Omit<JSX.IntrinsicElements['input'], 'ref' | 'type'> & { label: string }

const tick = new URL('./images/checkbox-tick.svg', import.meta.url).href

const Checkbox: React.FC<Props> = ({ className, id: idProp, label, style, ...props }) => {
  const uniqID = useId()
  const id = idProp ?? `checkbox-${uniqID}`

  return (
    // label role="none" => only for ticker click handling
    <label className={clsx(styles.root, className)} role="none" style={style}>
      <input className={styles.input} id={id} type="checkbox" {...props} />
      <span className={styles.ticker} />
      <img alt="" className={styles.tick} src={tick} />
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
    </label>
  )
}

export default Checkbox
