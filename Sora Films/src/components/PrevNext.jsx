import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import styles from "./PrevNext.module.css";

const PrevNext = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const routes = [
        "/portfolio/portraits",
        "/portfolio/family",
        "/portfolio/wedding",
        "/portfolio/pre-wedding"
    ];

    const currentIndex = routes.indexOf(location.pathname);

    const handleNext = () => {
        if (currentIndex < routes.length - 1) {
            navigate(routes[currentIndex + 1]);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            navigate(routes[currentIndex - 1]);
        }
    };

    return (
         <div className={styles.container}>
        
        <div>
            <button onClick={handlePrev} disabled={currentIndex === 0}>
                <IoIosArrowRoundBack />
            </button>
            <span>Previous Gallery</span>
        </div>

        <div>
            <span>Next Gallery</span>
            <button onClick={handleNext} disabled={currentIndex === routes.length - 1}>
                <IoIosArrowRoundForward />
            </button>
        </div>

    </div>
    );
};

export default PrevNext;