import baseStyles from '../../App.module.scss'
import styles from './FooterOverlay.module.scss'

export default function FooterOverlay() {
  return (
    <div className={styles.footerOverlay}>
      <div className={styles.overlayBlack} />
      <div className={`${styles.overlayImage} ${baseStyles.app__bg}`}></div>
    </div>
  )
}
