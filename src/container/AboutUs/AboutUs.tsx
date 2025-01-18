import images from '../../constants/images'
import baseStyles from '../../App.module.scss'
import styles from './AboutUs.module.scss'

export default function AboutUs() {
  return (
    <div id='about' className={`${styles.aboutContainer} ${baseStyles.section__padding} ${baseStyles.flex__center} ${baseStyles.app__bg}`}>
      <div className={`${styles.aboutBackground} ${baseStyles.flex__center}`}>
        <img src={images.G} alt='g' />
      </div>

      <div className={`${styles.aboutContent} ${baseStyles.flex__center}`}>
        <div className={styles.aboutLeftContainer}>
          <h1 className={baseStyles.headtext__cormorant}>About Us</h1>
          <img className={baseStyles.spoon__img} src={images.spoon} alt='spoon' />
          <p className={baseStyles.p__opensans}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae impedit harum nam quas nemo, similique exercitationem, mollitia, vel doloribus vero
            sunt eos error ipsum nostrum. Corporis officia architecto harum! Qui.
          </p>
          <button className={baseStyles.custom__button}>Know More</button>
        </div>

        <div className={`${styles.knife} ${baseStyles.flex__center}`}>
          <img src={images.knife} alt='knife' />
        </div>

        <div className={styles.aboutRightContainer}>
          <h1 className={baseStyles.headtext__cormorant}>Our History</h1>
          <img className={baseStyles.spoon__img} src={images.spoon} alt='spoon ' />
          <p className={baseStyles.p__opensans}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae impedit harum nam quas nemo, similique exercitationem, mollitia, vel doloribus vero
            sunt eos error ipsum nostrum. Corporis officia architecto harum! Qui.
          </p>
          <button className={baseStyles.custom__button}>Know More</button>
        </div>
      </div>
    </div>
  )
}
