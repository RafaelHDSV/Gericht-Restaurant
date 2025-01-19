import SubHeading from '../../components/SubHeading/SubHeading'
import images from '../../constants/images'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.info}>
        <SubHeading>Chase the new flavor</SubHeading>
        <h1>The key to fine dining</h1>
        <p>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facillisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
        </p>
        <button>Explore Menu</button>
      </div>

      <div className={styles.img}>
        <img src={images.welcome} alt='welcome' />
      </div>
    </div>
  )
}
