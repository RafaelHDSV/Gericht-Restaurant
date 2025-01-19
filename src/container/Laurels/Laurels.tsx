import images from '../../constants/images'
import data from '../../constants/data'
import SubHeading from '../../components/SubHeading/SubHeading'
import AwardCard from './components/AwardCard/AwardCard'
import styles from './Laurels.module.scss'

export default function Laurels() {
  return (
    <div id={'awards'} className={styles.laurels}>
      <div className={styles.info}>
        <SubHeading>Awards & Recognition</SubHeading>
        <h1>Our Laurels</h1>

        <div className={styles.awards}>
          {data.awards.map((award, index) => (
            <AwardCard key={index} award={award} />
          ))}
        </div>
      </div>

      <div className={styles.img}>
        <img src={images.laurels} alt='laurels' />
      </div>
    </div>
  )
}
