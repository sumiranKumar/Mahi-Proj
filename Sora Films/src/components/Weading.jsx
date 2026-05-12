import styles from "./Family.module.css";
import PrevNext from "./PrevNext";
import Wead1 from './Weading Pic/Wead1.jpg';
import Wead2 from './Weading Pic/Wead2.jpg';
import Wead3 from './Weading Pic/Wead3.jpg';

const Weading = () => {
    return<>

     <div className={styles.maincard}>
                <h1 className={styles.heading}>WEADING</h1>
    
                <div className={styles.Contentcard}>
                    <img src={Wead1} alt="" />
                    <img src={Wead2} alt="" />
                    <img src={Wead3} alt="" />
                    <img src={Wead1} alt="" />
                    <img src={Wead2} alt="" />
                    <img src={Wead3} alt="" />
                </div>
                  <PrevNext />
            </div>
       </>
}

export default Weading;