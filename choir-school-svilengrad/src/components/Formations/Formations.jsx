import styles from './Formations.module.css'
import littleOnes from '../../assets/littleOnes.jpg'
import childrens from '../../assets/childrens.jpg'
import burdenis from '../../assets/burdenis.jpg'


export const Formations = () => {



return (
    <div className={styles.container}>
    <div className={styles.formationCard}>
      <img className={styles.choirImage} src={littleOnes} alt="Choir" />
      <h2 className={styles.formationName}>Choir of little ones</h2>
      <p>The Choir of little ones was established in 2018 by students from First to Fourth grade from schools in Svilengrad. The formation quickly gained momentum.</p>
      <div className={styles.links}>
        <a href="/conductor">Conductor</a>
        <a href="/choristers">Choristers</a>
        <a href="/gallery">Gallery</a>
        <a href="/gallery">Video</a>
      </div>
    </div>
    <div className={styles.formationCard}>
      <img className={styles.choirImage} src={childrens} alt="Choir" />
      <h2 className={styles.formationName}>Childrens choir</h2>
      <p>The Choir of little ones was established in 2018 by students from First to Fourth grade from schools in Svilengrad. The formation quickly gained momentum.</p>
      <div className={styles.links}>
        <a href="/conductor">Conductor</a>
        <a href="/choristers">Choristers</a>
        <a href="/gallery">Gallery</a>
        <a href="/gallery">Video</a>
      </div>
    </div>
    <div className={styles.formationCard}>
      <img className={styles.choirImage} src={burdenis} alt="Choir" />
      <h2 className={styles.formationName}>Vocal formation Burdenis</h2>
      <p>The Choir of little ones was established in 2018 by students from First to Fourth grade from schools in Svilengrad. The formation quickly gained momentum.</p>
      <div className={styles.links}>
        <a href="/conductor">Conductor</a>
        <a href="/choristers">Choristers</a>
        <a href="/gallery">Gallery</a>
        <a href="/gallery">Video</a>
      </div>
    </div>

  </div>
)


}

export default Formations