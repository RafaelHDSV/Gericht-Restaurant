import SubHeading from '../../components/SubHeading/SubHeading'
import images from '../../constants/images'
import styles from './FindUs.module.scss'

export default function FindUs() {
  return (
    <div id='contact' className={styles.contact}>
      <div className={styles.info}>
        <SubHeading>Contact</SubHeading>
        <h1>Find Us</h1>

        <div className={styles.info}>
          <p>Lane Ends Bungalow, Whatcroft Hall Lane, RUdheath, CW9 7SG</p>
          <p>Opening Hours</p>
          <p>Mon - Fri: 10:00 am - 02:00 am</p>
          <p>Sat - Sun: 10:00 am - 03:00 am</p>
        </div>

        <button>Visit Us</button>
      </div>

      <div className={styles.img}>
        <img src={images.findus} alt='findus' />
      </div>
    </div>
  )
}
