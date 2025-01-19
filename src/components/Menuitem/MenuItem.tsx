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
          <p>{title}</p>
        </div>

        <div className={styles.dash} />

        <div className={styles.price}>
          <p>{price}</p>
        </div>
      </div>

      <div className={styles.subInfo}>
        <p>{tags}</p>
      </div>
    </div>
  )
}
