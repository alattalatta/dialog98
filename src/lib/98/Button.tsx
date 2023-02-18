import clsx from 'clsx'

import * as styles from './Button.css'

type Props = Omit<JSX.IntrinsicElements['button'], 'ref'> & { children?: React.ReactNode }

const Button: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <button className={clsx(styles.root, className)} {...props}>
      <span className={styles.label}>{children}</span>
    </button>
  )
}

export default Button
