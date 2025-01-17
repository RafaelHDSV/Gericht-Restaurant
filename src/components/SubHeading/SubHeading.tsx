import { images } from '../../constants'
import baseStyles from '../../App.module.scss'
import styles from './SubHeading.module.scss'

export default function SubHeading({ children }: { children: string }) {
  return (
    <div className={styles.container}>
      <p className={baseStyles.p__cormorant}>{children}</p>
      <img className={baseStyles.spoon__img} src={images.spoon} alt='spoon' />
    </div>
  )
}
