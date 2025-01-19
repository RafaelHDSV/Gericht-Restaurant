import SubHeading from '../SubHeading/SubHeading'
import styles from './Newsletter.module.scss'

export default function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <div className={styles.title}>
        <SubHeading>Newsletter</SubHeading>
        <h1>Subscribe To Our Newsletter</h1>
        <p>And Never Miss Latest Updates!</p>
      </div>

      <div className={styles.newsletterInput}>
        <input type='email' placeholder='Enter your email address' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}
