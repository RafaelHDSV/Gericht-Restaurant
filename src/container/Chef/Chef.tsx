import images from '../../constants/images'
import SubHeading from '../../components/SubHeading/SubHeading'
import baseStyles from '../../App.module.scss'
import styles from './Chef.module.scss'

export default function Chef() {
  return (
    <div className={`${baseStyles.app__bg} ${baseStyles.app__wrapper} ${baseStyles.section__padding}`}>
      <div className={`${baseStyles.app__wrapper_img} ${baseStyles.app__wrapper_img_reverse}`}>
        <img src={images.chef} alt='chef' />
      </div>

      <div className={baseStyles.app__wrapper_info}>
        <SubHeading>Chef's Word</SubHeading>
        <h1 className={baseStyles.headtext__cormorant}>What We Believe In</h1>

        <div className={styles.content}>
          <div className={styles.quote}>
            <img src={images.quote} alt='quote' />
            <p className={baseStyles.p__opensans}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <p className={baseStyles.p__opensans}>
            Ex iure ea laudantium, autem pariatur veniam at soluta aliquid velit quasi ratione voluptate magnam eligendi distinctio est voluptatibus magni
            laboriosam possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugiat illo quae quas possimus eos
          </p>
        </div>

        <div className={styles.sign}>
          <p>Kevin Luo</p>
          <p className={baseStyles.p__opensans}>Chef & Founder</p>
          <img src={images.sign} alt='sign' />
        </div>
      </div>
    </div>
  )
}
