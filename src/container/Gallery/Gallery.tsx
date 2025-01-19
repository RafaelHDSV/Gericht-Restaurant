import { useRef } from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import images from '../../constants/images'
import styles from './Gallery.module.scss'
import { ArrowLeft, ArrowRight, InstagramLogo } from '@phosphor-icons/react'

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const scroll = (direction: 'left' | 'right') => {
    const { current } = scrollRef

    if (current) {
      if (direction === 'left') {
        current.scrollLeft -= 300
      } else {
        current.scrollLeft += 300
      }
    }
  }

  const imagesArray = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

  return (
    <div className={styles.gallery}>
      <div className={styles.content}>
        <SubHeading>Instagram</SubHeading>
        <h1>Photo Gallery</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo laudantium, ex asperiores nostrum cupiditate temporibus quasi accusantium aperiam</p>
        <button>View More</button>
      </div>

      <div className={styles.galleryImages}>
        <div className={styles.container} ref={scrollRef}>
          {imagesArray.map((image, index) => (
            <div key={index} className={styles.imagesCard}>
              <img src={image} alt={`image${index}`} />
              <InstagramLogo className={styles.instagramIcon} />
            </div>
          ))}
        </div>

        <div className={styles.imagesArrow}>
          <ArrowLeft className={styles.arrowIcon} onClick={() => scroll('left')} />
          <ArrowRight className={styles.arrowIcon} onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
}
