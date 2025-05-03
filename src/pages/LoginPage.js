import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#faf9f6',
      padding: '20px'
    },
    card: {
      width: '100%',
      maxWidth: '400px',
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '24px'
    },
    title: {
      fontWeight: 'bold',
      fontSize: '18px'
    },
    icon: {
      fontSize: '20px'
    },
    form: {
      display: 'flex',
      flexDirection: 'column'
    },
    input: {
      width: '100%',
      padding: '14px',
      marginBottom: '16px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '16px'
    },
    button: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#f4743b',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontWeight: '500',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '8px'
    },
    forgotPassword: {
      textAlign: 'center',
      marginTop: '20px',
      color: '#333',
      fontSize: '14px',
      cursor: 'pointer'
    },
    linkSection: {
      marginTop: '20px',
      textAlign: 'center'
    },
    link: {
      color: '#f4743b',
      textDecoration: 'none'
    },
    homeLink: {
      color: '#666',
      textDecoration: 'none',
      marginRight: '15px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.title}>Login</div>
          <div style={styles.icon}>👤</div>
        </div>
        
        <form style={styles.form}>
          <input 
            type="email" 
            placeholder="Email" 
            style={styles.input}
          />
          <input 
            type="password" 
            placeholder="Password" 
            style={styles.input}
          />
          <button type="button" style={styles.button}>
            Search
          </button>
          <div style={styles.forgotPassword}>
            Forgot password?
          </div>
        </form>
        
        <div style={styles.linkSection}>
          <Link to="/" style={styles.homeLink}>Home</Link>
          <Link to="/signup" style={styles.link}>Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;