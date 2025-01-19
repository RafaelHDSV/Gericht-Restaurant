import styles from './AwardsCard.module.scss'

interface IAwardCardProps {
  award: {
    imgUrl: string
    title: string
    subtitle: string
  }
}

export default function AwardCard({ award }: IAwardCardProps) {
  return (
    <div className={styles.awardCard}>
      <img src={award.imgUrl} alt='award.imgUrl' />

      <div className={styles.content}>
        <p style={{ color: '#DCCA87' }}>{award.title}</p>
        <p>{award.subtitle}</p>
      </div>
    </div>
  )
}
