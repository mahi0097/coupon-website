import React from 'react';
import { Link } from 'react-router-dom';

function SignupPage() {
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
      fontSize: '18px',
      color: '#000'
    },
    sugin: {
      color: '#f4743b',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '18px'
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
    linkSection: {
      marginTop: '20px',
      textAlign: 'center'
    },
    link: {
      color: '#666',
      textDecoration: 'none'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.title}>Signup</div>
          <Link to="/login" style={styles.sugin}>Sugin</Link>
        </div>
        
        <form style={styles.form}>
          <input 
            type="text" 
            placeholder="Name" 
            style={styles.input}
          />
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
            Sign Up
          </button>
        </form>
        
        <div style={styles.linkSection}>
          <Link to="/" style={styles.link}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;