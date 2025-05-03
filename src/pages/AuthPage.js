import React, { useState } from 'react';
import '../styles.css';

function AuthPage() {
  const [activeTab, setActiveTab] = useState('signup');

  return (
    <div className="auth-container">
      <div className="auth-grid">
        {/* Home Preview Panel */}
        <div className="auth-panel">
          <div style={{fontWeight: 'bold', marginBottom: '20px'}}>HOME</div>
          
          <div className="mini-home">
            <h2>Save Money with Coupons</h2>
            <p>Find the best coupons and promo codes.</p>
            
            <div className="mini-home-buttons">
              <button className="btn btn-primary">Browse Coupons</button>
              <button className="btn btn-outline">Upold</button>
            </div>
          </div>
          
          <div className="mini-nav">
            <div>Home</div>
            <div>Browse</div>
            <div>Upload</div>
          </div>
        </div>

        {/* Signup Panel */}
        <div className="auth-panel">
          <div className="auth-tabs">
            <button 
              className={activeTab === 'signup' ? 'auth-tab active' : 'auth-tab inactive'}
              onClick={() => setActiveTab('signup')}
            >
              Signup
            </button>
            <button 
              className={activeTab === 'login' ? 'auth-tab active' : 'auth-tab inactive'}
              onClick={() => setActiveTab('login')}
            >
              Sugin
            </button>
          </div>

          <form>
            <input 
              type="text" 
              placeholder="Name" 
              className="input-field" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="input-field" 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="input-field" 
            />
            <button 
              type="button" 
              className="form-button"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Login Panel */}
        <div className="auth-panel">
          <div className="auth-tabs">
            <div style={{fontWeight: 'bold'}}>Login</div>
            <div>👤</div>
          </div>

          <form>
            <input 
              type="email" 
              placeholder="Email" 
              className="input-field" 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="input-field" 
            />
            <button 
              type="button" 
              className="form-button"
            >
              Search
            </button>
            <div className="forgot-password">
              Forgot password?
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;