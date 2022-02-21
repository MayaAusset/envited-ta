import React from 'react';
import CTA from '../../elements/CTA';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <img src={'/images/navbar_landing page.png'} alt="logo and login" />
      </nav>
      <div className={styles.text_section}>
        <h1>Facebook events without Facebook.</h1>
        <p>Easily host and share events with your friends across any social media.</p>
        <CTA>
          <Link to="/create">🎉 Create my next event</Link>
        </CTA>
      </div>
      <div className={styles.images_section}>
        <img src={'/images/social_media_icons_all_grouped.png'} alt="social-medias" className={styles.bg_social} />
        <img src={'/images/product_image_left.png'} alt="product left" className={styles.product_left} />
        <img src={'/images/product_image_middle.png'} alt="product middle" className={styles.product_middle} />
        <img src={'/images/product_image_right.png'} alt="product right" className={styles.product_right} />
      </div>
    </div>
  );
};

export default Home;
