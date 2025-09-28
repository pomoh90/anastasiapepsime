// app/page.js
'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
// import { Roboto } from 'next/font/google';
// import { Playfair_Display } from 'next/font/google';
// import { Lora } from 'next/font/google';
import Logo from './components/Logo';
import { contactInfo } from './components/info';
import Popup from './components/pop';

// const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
// const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });
// const lora = Lora({ subsets: ['latin'], weight: ['400', '700'] });

const images = [
  '/images/1.JPG',
  '/images/2.JPG',
  '/images/3.JPG',
  '/images/4.JPG',
  '/images/5.jpg',
  '/images/6.jpg',
  '/images/7.jpg',
  '/images/8.jpg',
  '/images/9.jpg',
  '/images/10.jpg',
  '/images/11.jpg',
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [hearts, setHearts] = useState([]);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [popupClosed, setPopupClosed] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('popup-open', !popupClosed);
  }, [popupClosed]);

  const popupEnabled = 0; // 1 - включить попап, 0 - отключить

  useEffect(() => {
    document.body.classList.toggle('popup-open', popupEnabled === 1 && !popupClosed);
  }, [popupClosed, popupEnabled]);
  
  useEffect(() => {
    if (popupEnabled === 0 || popupClosed) {
      AOS.init();
  
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 3000);
  
      const heartInterval = setInterval(() => {
        setHearts((prev) => {
          if (prev.length >= 10) return prev.slice(1);
          return [
            ...prev,
            {
              id: Math.random(),
              left: Math.random() * 100,
              top: Math.random() * 100,
              size: Math.random() * 20 + 10,
              opacity: Math.random() * 0.7 + 0.3,
            },
          ];
        });
      }, 500);
  
      const observer = new IntersectionObserver(
        ([entry]) => setIsFooterVisible(entry.isIntersecting),
        { threshold: 0.1 }
      );
  
      const footer = document.querySelector('footer');
      if (footer) observer.observe(footer);
  
      return () => {
        clearInterval(interval);
        clearInterval(heartInterval);
        if (footer) observer.unobserve(footer);
      };
    }
  }, [popupClosed, popupEnabled]);

  return (
    <>
{popupEnabled === 1 && !popupClosed && <Popup onClose={() => setPopupClosed(true)} />}
      <Head>
        <title>Anastasia</title>
        <meta name="description" content="Welcome to Anastasia - Your trusted partner for exclusive connections and high-quality companionship services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Anastasia, escort services, luxury, companionship, exclusive connections" />
        <meta name="author" content="Anastasia" />
        <link rel="icon" href="/images/favicon-heart.png" type="image/png" />
      </Head>

      <div
        className={`${styles.container} ${!popupClosed ? 'page-blurred' : ''}`}
        style={{
          backgroundColor: '#1e1e1e',
          color: '#f0f0f0',
          overflowX: 'hidden',
          padding: '0 20px',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <header className={styles.header} style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#ff69b4', fontFamily: 'cursive' }}>
            Welcome to Anastasia
          </h1>
          <p>
            Your trusted partner for exclusive connections
          </p>
        </header>

        <section
          className={styles.gallery}
          style={{
            textAlign: 'center',
            position: 'relative',
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <div
            className={styles.imageContainer}
            data-aos="fade-up"
            style={{
              width: '100%',
              maxWidth: '100%',
              height: '650px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery ${index}`}
                className={styles.image}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  opacity: currentImage === index ? 1 : 0,
                  position: 'absolute',
                  transition: 'opacity 1s ease-in-out',
                }}
              />
            ))}
            <Logo />
          </div>

          <div
            className={styles.thumbnailContainer}
            style={{
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'center',
              gap: '5px',
              overflowX: 'auto',
            }}
          >
            {images.map((src, index) => (
              <img
                key={`thumb-${index}`}
                src={src}
                alt={`Thumbnail ${index}`}
                className={styles.thumbnail}
                onClick={() => setCurrentImage(index)}
                style={{
                  width: '50px',
                  height: '50px',
                  objectFit: 'cover',
                  cursor: 'pointer',
                  border: currentImage === index ? '2px solid #ff69b4' : '2px solid transparent',
                  borderRadius: '5px',
                }}
              />
            ))}
          </div>
        </section>

        <section
          className={styles.contentSection}
          style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: '20px' }}
        >
          <div data-aos="fade-right" style={{ gridColumn: '1 / -1', textAlign: 'left' }}>
            <h2
              style={{ fontFamily: 'cursive', color: '#ff69b4' }}
            >
              Hello Gentlemen,
            </h2>
            <p>
            I just started my journey in a fantasy world .I became a provider just recently and visiting from Russia for the next year ! I am 31 years old .Beautiful and classy model based in San Francisco .
            </p>
            <p>
            Your perfect blue eyed blondie....
            </p>
            <p>
            Its all about enjoyment when when time is spent with me, My only focus is you...
            </p>
            <p>
            I enjoy meeting new friends, whether you are local or just in town for business. 
            My goal is to make you feel welcomed & relaxed, I know you will enjoy what my energy & skills provide..
            </p>
            <p>
            Im your vip luxurious choice for a high end companion:
            </p>
            <p>
            sensual ,elegant and entertaining!
            </p>
            <p>
            Never a dull moment
            I highly recommend 90 min session and multiple hour dates so we can get more connected and I can provide the best service for you love !
            Xo xo Anastasia P
            </p>
          </div>

          <div data-aos="fade-left" style={{ textAlign: 'left' }}>
            <h2
              style={{ fontFamily: 'cursive', color: '#ff69b4' }}
            >
             Donation
            </h2>
            {/* <p>Inacll 30min  $500</p>  */}
            <p>Inacll 1h  $800</p> 
            <p>Outcall $1000 </p>
          </div>

          <div data-aos="fade-up" style={{ textAlign: 'left' }}>
            <h2
              style={{ fontFamily: 'cursive', color: '#ff69b4' }}
            >
              Statistics
            </h2>
            
            <p>Location - San Francisco </p>
            <p>Age - 31</p>
            <p>Height - 5ft 6in</p>
            <p>Weight - 123ibs</p>
            <p>Measurements - 33C</p>
            <p>Body type - Athletic</p>
            <p>Ethnicity - Caucasian</p>
            <p>Eyes - Blue</p>
            <p>Hair - Blonde</p>
          </div>

          <div data-aos="fade-up" style={{ gridColumn: '1 / -1', textAlign: 'left' }}>
            <h2
              style={{ fontFamily: 'cursive', color: '#ff69b4' }}
            >
              Contact Me
            </h2>
            <p>
              Phone: <a href={`tel:${contactInfo.phone}`} style={{ color: '#ff69b4', textDecoration: 'none' }}>{contactInfo.phone}</a>
            </p>
            <p>
              Email: <a href={`mailto:${contactInfo.email}`} style={{ color: '#ff69b4', textDecoration: 'none' }}>{contactInfo.email}</a>
            </p>
            <p>
              My reviews: <a href={contactInfo.ter} style={{ color: '#ff69b4', textDecoration: 'none' }}>{contactInfo.terShort}</a>
            </p>
            <p>
              Twitter/X: <a href={contactInfo.twitterLink} style={{ color: '#ff69b4', textDecoration: 'none' }}>{contactInfo.twitter}</a>
            </p>
            <p>
              Tryst: <a href={contactInfo.trystLink} style={{ color: '#ff69b4', textDecoration: 'none' }}>{contactInfo.tryst}</a>
            </p>
          </div>
        </section>

        <footer
          className={styles.footer}
          style={{ textAlign: 'center', padding: '20px 0', backgroundColor: '#1e1e1e' }}
        >
          &copy; 2024 Anastasia. All rights reserved.
        </footer>

        {!isFooterVisible && (
          <div
            style={{
              position: 'fixed',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'blink 1.5s infinite',
              fontSize: '24px',
              width: '75px',
              textAlign: 'center',
              color: '#ff69b4',
              zIndex: 10,
            }}
          >
            ↓
          </div>
        )}

        {hearts.map((heart) => (
          <div
            key={heart.id}
            style={{
              position: 'fixed',
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              fontSize: `${heart.size}px`,
              color: '#ff69b4',
              opacity: heart.opacity,
              animation: 'float 2s ease-in',
            }}
          >
            ❤️
          </div>
        ))}

        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(-50px);
              opacity: 0;
            }
          }

          @keyframes blink {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }

          @media (max-width: 768px) {
            .${styles.gallery} {
              max-width: 100vw !important;
              margin: 0 !important;
            }
            .${styles.imageContainer} {
              position: relative;
              width: 100vw;
              max-width: 100vw;
              height: 400px;
              margin-left: calc(-50vw + 50%);
              margin-right: calc(-50vw + 50%);
            }
            .${styles.image} {
              width: 100%;
              max-width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          @media (min-width: 769px) {
            .${styles.imageContainer} {
              max-width: 800px;
              width: 100%;
              height: 650px;
            }
          }
          
          @media (max-width: 480px) {
            .${styles.imageContainer} {
              height: 300px;
              margin-left: calc(-50vw + 50%);
              margin-right: calc(-50vw + 50%);
            }
          }
        `}</style>
      </div>
    </>
  );
}
