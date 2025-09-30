// app/page.js
'use client';

import { useEffect, useState, useRef } from 'react';
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

];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [hearts, setHearts] = useState([]);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [popupClosed, setPopupClosed] = useState(false);
  const thumbnailRef = useRef(null);

  // Функция для прокрутки к активной миниатюре
  const scrollToActiveThumbnail = () => {
    if (thumbnailRef.current) {
      const thumbnails = thumbnailRef.current.children;
      if (thumbnails[currentImage]) {
        thumbnails[currentImage].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  };

  // Прокручиваем к активной миниатюре при изменении currentImage
  useEffect(() => {
    scrollToActiveThumbnail();
  }, [currentImage]);

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
        <title>Anastasia - Premium Companion Services in San Francisco</title>
        <meta name="description" content="Meet Anastasia - Beautiful 31-year-old Russian model now based in San Francisco. Premium companion services with elegance and class. Blue-eyed blonde offering luxury companionship experiences. Contact: +1 (646) 551-4679" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Anastasia, San Francisco escort, premium companion, luxury escort services, Russian model, blue-eyed blonde, high-end companionship, San Francisco" />
        <meta name="author" content="Anastasia" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta property="og:title" content="Anastasia - Premium Companion Services in San Francisco" />
        <meta property="og:description" content="Meet Anastasia - Beautiful 31-year-old model from Russia, now based in San Francisco. Premium companion services with elegance and class." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anastasiapepsime.com" />
        <meta property="og:image" content="https://anastasiapepsime.com/images/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anastasia - Premium Companion Services in San Francisco" />
        <meta name="twitter:description" content="Meet Anastasia - Beautiful 31-year-old model from Russia, now based in San Francisco." />
        <meta name="twitter:image" content="https://anastasiapepsime.com/images/1.JPG" />
        <link rel="canonical" href="https://anastasiapepsime.com/" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <link rel="icon" href="/images/favicon-heart.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Anastasia",
              "description": "Premium companion services in San Francisco. Beautiful 31-year-old model from Russia offering luxury companionship experiences.",
              "url": "https://anastasiapepsime.com",
              "image": "https://anastasiapepsime.com/images/1.JPG",
              "telephone": "+1 (646) 551-4679",
              "email": "anastasiaSF@outlook.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "age": 31,
              "nationality": "Russian",
              "description": "Blue-eyed blonde model providing premium companion services with elegance and class.",
              "sameAs": [
                "https://x.com/anastasiasf",
                "https://tryst.link/escort/anastasia"
              ]
            })
          }}
        />
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
            
            {/* Счетчик фотографий */}
            <div style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              background: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              padding: '5px 10px',
              borderRadius: '15px',
              fontSize: '14px',
              zIndex: 10,
            }}>
              {currentImage + 1} / {images.length}
            </div>
          </div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '5px', 
            marginTop: '10px',
            width: '100%',
            maxWidth: '100%',
            padding: '0 5px',
            boxSizing: 'border-box'
          }}>
            {/* Кнопка "Назад" */}
            <button
              onClick={() => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              className="carousel-btn"
              style={{
                background: '#ff69b4',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '18px',
                fontWeight: 'bold',
                minWidth: '40px',
                minHeight: '40px',
                flexShrink: 0,
              }}
            >
              ‹
            </button>

            {/* Контейнер миниатюр с горизонтальной прокруткой */}
            <div
              ref={thumbnailRef}
              className={styles.thumbnailContainer}
              style={{
                display: 'flex',
                gap: '3px',
                overflowX: 'auto',
                flex: 1,
                scrollBehavior: 'smooth',
                padding: '5px 0',
                WebkitOverflowScrolling: 'touch',
                maxWidth: 'calc(100% - 80px)',
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
                    width: '45px',
                    height: '45px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    border: currentImage === index ? '2px solid #ff69b4' : '2px solid transparent',
                    borderRadius: '5px',
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>

            {/* Кнопка "Вперед" */}
            <button
              onClick={() => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              className="carousel-btn"
              style={{
                background: '#ff69b4',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '18px',
                fontWeight: 'bold',
                minWidth: '40px',
                minHeight: '40px',
                flexShrink: 0,
              }}
            >
              ›
            </button>
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
            
            /* Стили для кнопок карусели на мобильных */
            .carousel-btn {
              width: 50px !important;
              height: 50px !important;
              min-width: 50px !important;
              min-height: 50px !important;
              font-size: 22px !important;
              z-index: 10;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            }
            
            .${styles.thumbnailContainer} {
              max-width: calc(100vw - 110px) !important;
              gap: 4px !important;
            }
            
            .${styles.thumbnail} {
              width: 50px !important;
              height: 50px !important;
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
            
            /* Оптимизация для маленьких экранов */
            .carousel-btn {
              width: 45px !important;
              height: 45px !important;
              min-width: 45px !important;
              min-height: 45px !important;
              font-size: 20px !important;
            }
            
            .${styles.thumbnailContainer} {
              max-width: calc(100vw - 100px) !important;
              gap: 2px !important;
            }
            
            .${styles.thumbnail} {
              width: 45px !important;
              height: 45px !important;
            }
          }
        `}</style>
      </div>
    </>
  );
}
