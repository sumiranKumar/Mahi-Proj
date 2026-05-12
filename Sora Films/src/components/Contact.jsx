import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import styles from './Contact.module.css';
import Footer from "./footer";
const Contact = () => {
  return <>
    <div className={styles.maincard}>
      <h1 className={styles.heading}>Get In Touch</h1>

      <div className={styles.Contentcard}>
        <div className={styles.left}>
          <h2>
            For inquiries about <br />
            sessions and pricing fill out <br />
            the form and someone will <br />
            get back to you.
          </h2>

          <p>
            500 Terry Francine Street <br />
            San Francisco, CA 94158
          </p>

          <p>sora Films.com</p>
          <p>Tel: 123-456-7890</p>

          <div className={styles.icons}>
            <a href=""><i className="fa-brands fa-facebook-f"><FaFacebookF /></i></a>
            <a href="https://www.instagram.com/___sumiran____/?hl=en"><i className="fa-brands fa-instagram"><FaInstagram /></i></a>
            <a href=""><i className="fa-brands fa-twitter"><FaTwitter /></i></a>
          </div>
        </div>
        <div className={styles.right}>
          <form>
            <div className={styles.row}>
              <div>
                <label>First name *</label>
                <input type="text" />
              </div>

              <div>
                <label>Last name *</label>
                <input type="text" />
              </div>
            </div>

            <div className={styles.row}>
              <div>
                <label>Email *</label>
                <input type="email" />
              </div>

              <div>
                <label>Subject</label>
                <input type="text" />
              </div>
            </div>

            <div className={styles.full}>
              <label>Message</label>
              <textarea rows="5"></textarea>
            </div>

            <button type="submit" className={styles.btn}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>

  </>
}

export default Contact;