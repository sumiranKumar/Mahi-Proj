import styles from "./Family.module.css";
import PrevNext from "./PrevNext";
import preWeading from "./family.jpg";
const PreWeading = () => {
    return<>
       <div className={styles.maincard}>
                       <h1 className={styles.heading}>PRE WEADING</h1>
           
                       <div className={styles.Contentcard}>
                           <img src={preWeading} alt="" />
                           <img src={preWeading} alt="" />
                           <img src={preWeading} alt="" />
                           <img src={preWeading} alt="" />
                           <img src={preWeading} alt="" />
                           <img src={preWeading} alt="" />
                       </div>
                         <PrevNext />
                   </div>
    </>
}

export default PreWeading;