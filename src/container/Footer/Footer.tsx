import images from '../../constants/images'
import { FacebookLogo, XLogo, InstagramLogo } from '@phosphor-icons/react'
import FooterOverlay from '../../components/Footer/FooterOverlay'
import Newsletter from '../../components/Footer/Newsletter'
import baseStyles from '../../App.module.scss'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={`${styles.footer} ${baseStyles.section__padding}`}>
      <FooterOverlay />
      <Newsletter />

      <div className={styles.footerLinks}>
        <div className={styles.contact}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={baseStyles.p__opensans}>9 W 53rd St, New York, NY 10019, USA</p>
          <p className={baseStyles.p__opensans}>+1 212-344-1230</p>
          <p className={baseStyles.p__opensans}>+1 212-555-1230</p>
        </div>

        <div className={styles.logo}>
          <img src={images.gericht} alt='gericht' />
          <p className={baseStyles.p__opensans}>"The best way to find yourself is to lose yourself in the service of others."</p>
          <img src={images.spoon} alt='spoon' style={{ marginTop: '15px' }} />

          <div className={styles.social}>
            <FacebookLogo />
            <XLogo />
            <InstagramLogo />
          </div>
        </div>

        <div className={styles.workingHours}>
          <h1 className={styles.title}>Working Hours</h1>
          <p className={baseStyles.p__opensans}>Monday - Friday:</p>
          <p className={baseStyles.p__opensans}>08:00 am - 12:00 am</p>
          <p className={baseStyles.p__opensans}>Saturday - Sunday:</p>
          <p className={baseStyles.p__opensans}>07:00 am - 11:00 am</p>
        </div>
      </div>

      <div className={styles.copyright}>
        <p className={baseStyles.p__opensans}>2025 Gerícht. All Rights Reserved.</p>
      </div>
    </div>
  )
}
