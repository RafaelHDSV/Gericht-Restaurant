import SubHeading from '../../components/SubHeading/SubHeading'
import images from '../../constants/images'
import baseStyles from '../../App.module.scss'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <div className={`${baseStyles.app__wrapper} ${baseStyles.section__padding} ${styles.header}`}>
      <div className={baseStyles.app__wrapper_info}>
        <SubHeading>Chase the new flavor</SubHeading>
        <h1 className={styles.h1}>The key to fine dining</h1>
        <p className={baseStyles.p__opensans} style={{ margin: '2rem 0' }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facillisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
        </p>
        <button className={baseStyles.custom__button}>Explore Menu</button>
      </div>

      <div className={baseStyles.app__wrapper_img}>
        <img src={images.welcome} alt='welcome' />
      </div>
    </div>
  )
}
