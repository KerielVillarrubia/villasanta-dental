import React, { useEffect, useRef } from 'react';

export default function App() {
  const videoRef = useRef(null);

  // Logic: Play full video once, then loop only the last 2 seconds
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const loopStartTime = video.duration - 2;
    if (video.currentTime >= video.duration - 0.1) {
      video.currentTime = loopStartTime;
      video.play();
    }
  };

  // Reset to start on scroll to top
  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;
      if (window.scrollY === 0) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={styles.appWrapper}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; overflow-x: hidden; background: #fff; }
        
        /* Smooth hover transitions for buttons */
        .btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          filter: brightness(1.1);
        }
      `}</style>

      {/* Modern Glassmorphism Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>VILLA SANTA</div>
          <div style={styles.navLinks}>
            <span style={styles.link}>Products</span>
            <span style={styles.link}>About</span>
            <span style={styles.link}>Contact</span>
            <button className="btn-hover" style={styles.navBtn}>Shop Now</button>
          </div>
        </div>
      </nav>

      {/* Hero Section - The "Final Boss" Scaling Fix */}
      <header style={styles.hero}>
        <div style={styles.videoContainer}>
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            playsInline
            onTimeUpdate={handleTimeUpdate}
            style={styles.heroVideo}
          >
            <source src="/hero_video.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div style={styles.overlay}></div>

        <div style={styles.heroContent}>
          <h1 style={styles.mainHeading}>Helping dentists build <br/> reliable clinics.</h1>
          <p style={styles.subHeading}>The latest AI-driven technology for the modern practice.</p>
          <div style={styles.btnGroup}>
            <button className="btn-hover" style={styles.primaryBtn}>Explore Equipment</button>
            <button className="btn-hover" style={styles.secondaryBtn}>Learn More</button>
          </div>
        </div>
      </header>

      {/* Upgraded Stats Section */}
      <section style={styles.statsSection}>
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <h2 style={styles.statNumber}>500+</h2>
            <div style={styles.statDivider}></div>
            <p style={styles.statText}>Dental practices served</p>
          </div>
          <div style={styles.statCard}>
            <h2 style={styles.statNumber}>15</h2>
            <div style={styles.statDivider}></div>
            <p style={styles.statText}>Years of distribution</p>
          </div>
          <div style={styles.statCard}>
            <h2 style={styles.statNumber}>40+</h2>
            <div style={styles.statDivider}></div>
            <p style={styles.statText}>Brands in our catalog</p>
          </div>
        </div>
      </section>

      <section style={{ height: '60vh', background: '#fdfdfd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <h2 style={{color: '#ccc', letterSpacing: '4px'}}>TRUSTED PARTNERS</h2>
      </section>
    </div>
  );
}

const styles = {
  appWrapper: { width: '100%', display: 'flex', flexDirection: 'column' },
  
  navbar: {
    width: '100%',
    height: '80px',
    backgroundColor: 'rgba(255, 255, 255, 0.85)', // Glass effect
    backdropFilter: 'blur(12px)', // Blurs video behind nav
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed', // Sticks even better
    top: 0,
    zIndex: 1000,
    borderBottom: '1px solid rgba(0,0,0,0.05)',
  },
  
  navContainer: {
    width: '100%',
    maxWidth: '1600px',
    padding: '0 5%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: { fontWeight: '900', fontSize: '1.4rem', letterSpacing: '3px', color: '#111' },
  navLinks: { display: 'flex', alignItems: 'center', gap: '40px' },
  link: { fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer', color: '#333' },

  navBtn: {
    padding: '12px 24px',
    backgroundColor: '#111',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontWeight: '700',
    fontSize: '13px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  hero: {
    position: 'relative',
    width: '100vw',
    height: '100vh', // Full screen including behind nav
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },

  videoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  heroVideo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // FORCES filling the screen
    display: 'block',
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
    zIndex: 1,
  },

  heroContent: {
    position: 'relative',
    zIndex: 2,
    color: '#fff',
    textAlign: 'center',
    padding: '0 20px',
    maxWidth: '1000px',
  },

  mainHeading: {
    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
    lineHeight: '1',
    marginBottom: '24px',
    fontWeight: '900',
    textShadow: '0 4px 15px rgba(0,0,0,0.4)',
  },

  subHeading: {
    fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
    marginBottom: '48px',
    fontWeight: '400',
    maxWidth: '700px',
    marginInline: 'auto',
    opacity: 0.9,
  },

  btnGroup: { display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' },

  primaryBtn: {
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    padding: '20px 40px',
    fontWeight: '800',
    fontSize: '15px',
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  secondaryBtn: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid rgba(255,255,255,0.8)',
    padding: '20px 40px',
    fontWeight: '800',
    fontSize: '15px',
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  statsSection: {
    backgroundColor: '#c59d3f', // Gold
    padding: '120px 5%',
    color: '#fff',
  },

  statsGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1400px',
    margin: '0 auto',
    gap: '60px',
    flexWrap: 'wrap',
  },

  statCard: { textAlign: 'center', flex: '1', minWidth: '250px' },
  statNumber: { fontSize: '4.5rem', fontWeight: '900', marginBottom: '10px' },
  statDivider: { width: '40px', height: '4px', background: '#fff', margin: '0 auto 20px auto', borderRadius: '2px' },
  statText: { fontSize: '1.1rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '2px' }
};