import SubHeading from '../../components/SubHeading/SubHeading'
import images from '../../constants/images'
import baseStyles from '../../App.module.scss'

export default function FindUs() {
  return (
    <div id='contact' className={`${baseStyles.app__bg} ${baseStyles.app__wrapper} ${baseStyles.section__padding} `}>
      <div className={baseStyles.app__wrapper_info}>
        <SubHeading>Contact</SubHeading>
        <h1 className={baseStyles.headtext__cormorant} style={{ marginBottom: '3rem' }}>
          Find Us
        </h1>

        <div className={baseStyles.app__wrapper_info}>
          <p className={baseStyles.p__opensans}>Lane Ends Bungalow, Whatcroft Hall Lane, RUdheath, CW9 7SG</p>
          <p className={baseStyles.p__cormorant} style={{ color: '#DCCA87', margin: '2rem 0' }}>
            Opening Hours
          </p>
          <p className={baseStyles.p__opensans}>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className={baseStyles.p__opensans}>Sat - Sun: 10:00 am - 03:00 am</p>
        </div>

        <button className={baseStyles.custom__button} style={{ marginTop: '2rem' }}>
          Visit Us
        </button>
      </div>

      <div className={baseStyles.app__wrapper_img}>
        <img src={images.findus} alt='findus' />
      </div>
    </div>
  )
}
