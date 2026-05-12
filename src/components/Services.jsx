import styles from "./Services.module.css";
import Portraits from "./service1stimage.avif";

const Services = () => {
  return (
    <>
      <div className={styles.maincard}>

        <h1 className={styles.heading}>SERVICES</h1>

        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <img src={Portraits} alt="Portraits" />
          </div>

          <div className={styles.content}>
            <h2>PORTRAITS</h2>

            <div className={styles.line}></div>

            <p>3 hr</p>
            <p>Price Varies</p>

            <button className={styles.btn}>Book Now</button>
          </div>
        </div>
      </div>
      <div className={styles.maincard}>
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <img src={Portraits} alt="Portraits" />
          </div>

          <div className={styles.content}>
            <h2>Family</h2>

            <div className={styles.line}></div>

            <p>3 hr</p>
            <p>Price Varies</p>

            <button className={styles.btn}>Book Now</button>
          </div>
        </div>
      </div>
      <div className={styles.maincard}>
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <img src={Portraits} alt="Portraits" />
          </div>

          <div className={styles.content}>
            <h2>Weading</h2>

            <div className={styles.line}></div>

            <p>3 hr</p>
            <p>Price Varies</p>

            <button className={styles.btn}>Book Now</button>
          </div>
        </div>
      </div>
      <div className={styles.maincard}>
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <img src={Portraits} alt="Portraits" />
          </div>

          <div className={styles.content}>
            <h2>Pre Weading</h2>

            <div className={styles.line}></div>

            <p>3 hr</p>
            <p>Price Varies</p>

            <button className={styles.btn}>Book Now</button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Services;