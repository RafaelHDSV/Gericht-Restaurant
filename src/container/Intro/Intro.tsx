import { useRef, useState } from 'react'
import meal from '../../assets/meal.mp4'
import baseStyles from '../../App.module.scss'
import styles from './Intro.module.scss'
import { Pause, Play } from '@phosphor-icons/react'

export default function Intro() {
  const [isControlsVisible, setIsControlsVisible] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideo = () => {
    setIsPlaying(prev => !prev)

    if (isPlaying) {
      videoRef.current?.pause()
    } else {
      videoRef.current?.play()
    }
  }

  const handleVisibility = (action: string) => {
    if (!isPlaying) return
    if (action === 'leave') setIsControlsVisible(false)
    if (action === 'enter') setIsControlsVisible(true)
  }

  return (
    <div className={styles.video} onMouseLeave={() => handleVisibility('leave')} onMouseEnter={() => handleVisibility('enter')}>
      <video src={meal} ref={videoRef} typeof='video/mp4' loop controls={false} muted />

      {isControlsVisible && (
        <div className={`${styles.overlay} ${baseStyles.flex__center}`} style={{ backgroundColor: isPlaying ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.65)' }}>
          <div className={`${styles.overlayCircle} ${baseStyles.flex__center}`} onClick={handleVideo}>
            {isPlaying ? <Pause color='#fff' size={82} /> : <Play color='#fff' size={82} />}
          </div>
        </div>
      )}
    </div>
  )
}
