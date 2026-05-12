import ClientsAlbums from './ClientsAlbums';
import Contact from './Contact';
import styles from './Home.module.css';
import Services from './Services';
import BgImage from './bgimage.avif';
import Footer from './footer';
const Home = () => {
  return (<>
    <section className={styles.hero}>

      <div className={styles.card}>
        <p className={styles.subTitle}>Sora Films</p>

        <h1 className={styles.title}>
          PHOTOGRAPHY <br /> STUDIO
        </h1>

        <button className={styles.button}>Book Now</button>
      </div>


      <div className={styles.imageWrapper}>
        <img src={BgImage} alt="model" />
      </div>

    </section>
    {/* <Services />
    <ClientsAlbums /> */}
    <Contact />
    {/* <Footer/> */}
  </>
  )
}

export default Home;