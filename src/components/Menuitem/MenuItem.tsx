import baseStyles from '../../App.module.scss'
import styles from './MenuItem.module.scss'

interface IMenuItemProps {
  title: string
  tags: string
  price: string
}

export default function MenuItem({ title, tags, price }: IMenuItemProps) {
  return (
    <div className={styles.menuItem}>
      <div className={styles.header}>
        <div className={styles.name}>
          <p className={baseStyles.p__cormorant} style={{ color: '#DCCA87' }}>
            {title}
          </p>
        </div>

        <div className={styles.dash} />

        <div className={styles.price}>
          <p className={baseStyles.p__cormorant}>{price}</p>
        </div>
      </div>

      <div className={styles.subInfo}>
        <p className={baseStyles.p__opensans} style={{ color: '#AAA' }}>
          {tags}
        </p>
      </div>
    </div>
  )
}
