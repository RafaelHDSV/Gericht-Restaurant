import SubHeading from '../SubHeading/SubHeading'
import baseStyles from '../../App.module.scss'
import styles from './Newsletter.module.scss'

export default function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <div className={styles.title}>
        <SubHeading>Newsletter</SubHeading>
        <h1 className={baseStyles.headtext__cormorant}>Subscribe To Our Newsletter</h1>
        <p className={baseStyles.p__opensans}>And Never Miss Latest Updates!</p>
      </div>

      <div className={`${styles.newsletterInput} ${baseStyles.flex__center}`}>
        <input type='email' placeholder='Enter your email address' />
        <button className={baseStyles.custom__button}>Subscribe</button>
      </div>
    </div>
  )
}
