import images from '../../constants/images'
import styles from './AboutUs.module.scss'

export default function AboutUs() {
  return (
    <div id='about' className={styles.aboutContainer}>
      <div className={styles.aboutBackground}>
        <img src={images.G} alt='g' />
      </div>

      <div className={styles.aboutContent}>
        <div className={styles.aboutLeftContainer}>
          <h1>About Us</h1>
          <img src={images.spoon} alt='spoon' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae impedit harum nam quas nemo, similique exercitationem, mollitia, vel doloribus vero
            sunt eos error ipsum nostrum. Corporis officia architecto harum! Qui.
          </p>
          <button>Know More</button>
        </div>

        <div className={styles.knife}>
          <img src={images.knife} alt='knife' />
        </div>

        <div className={styles.aboutRightContainer}>
          <h1>Our History</h1>
          <img src={images.spoon} alt='spoon ' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae impedit harum nam quas nemo, similique exercitationem, mollitia, vel doloribus vero
            sunt eos error ipsum nostrum. Corporis officia architecto harum! Qui.
          </p>
          <button>Know More</button>
        </div>
      </div>
    </div>
  )
}
