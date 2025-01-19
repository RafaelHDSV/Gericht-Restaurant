import images from '../../constants/images'
import SubHeading from '../../components/SubHeading/SubHeading'
import styles from './Chef.module.scss'

export default function Chef() {
  return (
    <div className={styles.chef}>
      <div className={styles.chefImage}>
        <img src={images.chef} alt='chef' />
      </div>

      <div className={styles.info}>
        <SubHeading>Chef's Word</SubHeading>
        <h1>What We Believe In</h1>

        <div className={styles.content}>
          <div className={styles.quote}>
            <img src={images.quote} alt='quote' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <p>
            Ex iure ea laudantium, autem pariatur veniam at soluta aliquid velit quasi ratione voluptate magnam eligendi distinctio est voluptatibus magni
            laboriosam possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugiat illo quae quas possimus eos
          </p>
        </div>

        <div className={styles.sign}>
          <p>Kevin Luo</p>
          <p>Chef & Founder</p>
          <img src={images.sign} alt='sign' />
        </div>
      </div>
    </div>
  )
}
