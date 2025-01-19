import images from '../../constants/images'
import data from '../../constants/data'
import SubHeading from '../../components/SubHeading/SubHeading'
import MenuItem from '../../components/Menuitem/MenuItem'
import styles from './SpecialMenu.module.scss'

export default function SpecialMenu() {
  return (
    <div id='menu' className={styles.specialMenu}>
      <div className={styles.title}>
        <SubHeading>Menu that fits you pallate</SubHeading>
        <h1>Today's Special</h1>
      </div>

      <div className={styles.menu}>
        <div className={styles.winesAndBeers}>
          <p className={styles.menuTitle}>Wine & Beer</p>
          <div className={styles.menuItem}>
            {data.wines.map((wineAndBeer, index) => (
              <MenuItem key={index} title={wineAndBeer.title} tags={wineAndBeer.tags} price={wineAndBeer.price} />
            ))}
          </div>
        </div>

        <div className={styles.image}>
          <img src={images.menu} alt='menu' />
        </div>

        <div className={styles.cocktails}>
          <p className={styles.menuTitle}>Cocktails</p>
          <div className={styles.menuItem}>
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={index} title={cocktail.title} tags={cocktail.tags} price={cocktail.price} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <button>View More</button>
      </div>
    </div>
  )
}
