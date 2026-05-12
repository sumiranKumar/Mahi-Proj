import styles from './ClientAlbum.module.css';
import Carimg from './carimg.jpg';
import BMW from './Bmw.jpg';
import Jungle from './Jungle.jpg';
import Footer from './footer';
const ClientsAlbums = () => {
  return <>
    <div className={styles.maincard}>
      <h1 className={styles.heading}>CLIENT ALBUMS</h1>

      <div className={styles.Album}>
        <img src={Carimg} alt="" />
        <div className={styles.overlay}><p className={styles.text}>
          Car in garage <br />
          <span>Sora Films</span>
        </p></div>
      </div>
      <div className={styles.Album}>
        <img src={BMW} alt="" />
        <div className={styles.overlay}><p className={styles.text}>
          Car in garage <br />
          <span>Sora Films</span>
        </p></div>
      </div>
      <div className={styles.Album}>
        <img src={Jungle} alt="" />
        <div className={styles.overlay}><p className={styles.text}>
          Car in garage <br />
          <span>Sora Films</span>
        </p></div>
      </div>
      <div className={styles.Album}>
        <img src={Carimg} alt="" />
        <div className={styles.overlay}><p className={styles.text}>
          Car in garage <br />
          <span>Sora Films</span>
        </p></div>
      </div>
    </div>
    <Footer/>
  </>
}

export default ClientsAlbums;