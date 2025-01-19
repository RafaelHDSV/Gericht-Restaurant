import images from '../../constants/images'
import styles from './SubHeading.module.scss'

export default function SubHeading({ children }: { children: string }) {
  return (
    <div className={styles.container}>
      <p>{children}</p>
      <img src={images.spoon} alt='spoon' />
    </div>
  )
}
