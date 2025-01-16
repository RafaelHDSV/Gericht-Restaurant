import { ForkKnife, List } from '@phosphor-icons/react'
import images from '../../constants/images'
import styles from './Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={images.gericht} alt='images.gericht' />
      </div>

      <ul className={styles.links}>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#menu'>Menu</a>
        </li>
        <li>
          <a href='#awards'>Awards</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className={styles.actions}>
        <a href='#login'>Log In / Register</a>
        <div className={styles.divider}></div>
        <a href='/'>Book Table</a>
      </div>

      <button className={styles.navbarSmallScreens} onClick={() => console.log('clicked')}>
        <List size={26} />
        <ForkKnife size={26} />

        <ul className={styles.linksSmallScreens}>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#menu'>Menu</a>
          </li>
          <li>
            <a href='#awards'>Awards</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </button>
    </nav>
  )
}
