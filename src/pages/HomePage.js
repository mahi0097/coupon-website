import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const styles = {
    container: {
      maxWidth: '1000px',
      margin: '30px auto',
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      overflow: 'hidden'
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 30px'
    },
    logo: {
      fontWeight: 'bold',
      fontSize: '1.25rem'
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '30px'
    },
    navLink: {
      textDecoration: 'none',
      color: 'inherit'
    },
    button: {
      backgroundColor: '#f4743b',
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '20px',
      textDecoration: 'none',
      fontWeight: '500',
      display: 'inline-block'
    },
    hero: {
      backgroundColor: '#fff7ed',
      padding: '50px 30px',
      position: 'relative',
      overflow: 'hidden'
    },
    heroContent: {
      maxWidth: '500px',
      position: 'relative',
      zIndex: '2'
    },
    h1: {
      fontSize: '3rem',
      fontWeight: '800',
      marginBottom: '16px',
      lineHeight: '1.1'
    },
    p: {
      marginBottom: '24px',
      fontSize: '1.1rem',
      opacity: '0.9'
    },
    featureTabs: {
      display: 'flex',
      justifyContent: 'center',
      gap: '60px',
      padding: '30px 0',
      fontWeight: '600'
    },
    features: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px',
      padding: '0 30px 50px'
    },
    featureCard: {
      backgroundColor: '#fff7ed',
      borderRadius: '12px',
      padding: '30px',
      textAlign: 'center'
    },
    featureIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '60px',
      height: '60px',
      backgroundColor: 'rgba(244, 116, 59, 0.2)',
      borderRadius: '8px',
      margin: '0 auto 16px'
    },
    featureIconBox: {
      width: '32px',
      height: '32px',
      backgroundColor: '#f4743b'
    },
    featureIconArrow: {
      color: '#f4743b',
      fontSize: '1.5rem'
    },
    featureIconC: {
      width: '32px',
      height: '32px',
      backgroundColor: '#f4743b',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    },
    h3: {
      fontWeight: '600',
      fontSize: '1.1rem'
    },
    footer: {
      backgroundColor: '#fff7ed',
      padding: '20px 30px',
      display: 'flex',
      justifyContent: 'space-between'
    },
    socialIcons: {
      display: 'flex',
      gap: '20px'
    }
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>Home</div>
        <div style={styles.navLinks}>
          <span style={styles.navLink}>Upload</span>
          <span style={styles.navLink}>Coupons</span>
          <Link to="/login" style={styles.button}>
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.h1}>Save Money with Coupons</h1>
          <p style={styles.p}>Upload, share, and utilize coupons to enjoy discounts and earn</p>
          <button style={styles.button}>
            Browse Coupons
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div>
        <div style={styles.featureTabs}>
          <div>Earn Points</div>
          <div>
            <span>★</span>
            <span>Save</span>
          </div>
          <div>חסכון</div> {/* Hebrew text */}
        </div>

        <div style={styles.features}>
          {/* Card 1 */}
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>
              <div style={styles.featureIconBox}></div>
            </div>
            <h3 style={styles.h3}>Earn Points</h3>
          </div>

          {/* Card 2 */}
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>
              <div style={styles.featureIconArrow}>➔</div>
            </div>
            <h3 style={styles.h3}>Share Deals</h3>
          </div>

          {/* Card 3 */}
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>
              <div style={styles.featureIconC}>C</div>
            </div>
            <h3 style={styles.h3}>Save Money</h3>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <div>Contact</div>
        <div>Contact</div>
        <div style={styles.socialIcons}>
          <span>📞</span>
          <span>🐦</span>
          <span>📱</span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;