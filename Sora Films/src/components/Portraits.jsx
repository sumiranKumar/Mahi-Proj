import styles from "./Family.module.css";
import Portraitsimg from "./service1stimage.avif";
import PrevNext from "./PrevNext"; 

const Portraits = () => {
    return (
        <div className={styles.maincard}>
            <h1 className={styles.heading}>PORTRAITS</h1>

            <div className={styles.Contentcard}>
                <img src={Portraitsimg} alt="" />
                <img src={Portraitsimg} alt="" />
                <img src={Portraitsimg} alt="" />
                <img src={Portraitsimg} alt="" />
                <img src={Portraitsimg} alt="" />
                <img src={Portraitsimg} alt="" />
            </div>

          
            <PrevNext />
        </div>
    );
};

export default Portraits;