import styles from './footer.module.css';
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.text}><p>&copy; 2024 Sora Films. All rights reserved.</p></div>
            <div className={styles.SocialMedia}>
                <a href="https://facebook.com/sorafilms" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com/sorafilms" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://instagram.com/sorafilms" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </div>
    );  



}

export default Footer;