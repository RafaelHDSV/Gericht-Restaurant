import images from '../../constants/images'
import data from '../../constants/data'
import SubHeading from '../../components/SubHeading/SubHeading'
import AwardCard from './components/AwardCard/AwardCard'
import baseStyles from '../../App.module.scss'
import styles from './Laurels.module.scss'

export default function Laurels() {
  return (
    <div id={'awards'} className={`${baseStyles.app__bg} ${baseStyles.app__wrapper} ${baseStyles.section__padding}`}>
      <div className={baseStyles.app__wrapper_info}>
        <SubHeading>Awards & Recognition</SubHeading>
        <h1 className={baseStyles.headtext__cormorant}>Our Laurels</h1>

        <div className={styles.awards}>
          {data.awards.map((award, index) => (
            <AwardCard key={index} award={award} />
          ))}
        </div>
      </div>

      <div className={baseStyles.app__wrapper_img}>
        <img src={images.laurels} alt='laurels' />
      </div>
    </div>
  )
}
