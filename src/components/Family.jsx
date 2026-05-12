import styles from "./Family.module.css";
import PrevNext from "./PrevNext";
import family from "./family.jpg";
const Family = () => {
    return<>
       <div className={styles.maincard}>
            <h1 className={styles.heading}>FAMILY</h1>

            <div className={styles.Contentcard}>
                <img src={family} alt="" />
                <img src={family} alt="" />
                <img src={family} alt="" />
                <img src={family} alt="" />
                <img src={family} alt="" />
                <img src={family} alt="" />
            </div>
              <PrevNext />
        </div>
    </>
}

export default Family;