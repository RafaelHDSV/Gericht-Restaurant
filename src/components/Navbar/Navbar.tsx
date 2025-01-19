import { useState } from 'react'
import { ForkKnife, List } from '@phosphor-icons/react'
import images from '../../constants/images'
import styles from './Navbar.module.scss'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)

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

      <div className={styles.navbarSmallScreens} onClick={() => console.log('clicked')}>
        <List onClick={() => setToggleMenu(prev => !prev)} size={26} />

        {toggleMenu && (
          <div className={styles.navbarSmallScreensContent}>
            <ForkKnife onClick={() => setToggleMenu(prev => !prev)} size={26} className={styles.navbarSmallScreensClose} />
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
          </div>
        )}
      </div>
    </nav>
  )
}
