import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="animated-bg"></div>
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}></div>
          ))}
        </div>
      </div>
      
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-text"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-title"
          >
            Transform Your Business with
            <span className="gradient-text"> GlobalDeskBPO</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-subtitle"
          >
            Leading Business Process Outsourcing solutions that drive efficiency, 
            reduce costs, and accelerate your growth with our expert team available 24/7.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-buttons"
          >
            <a href="#contact" className="btn-primary hero-cta">
              Get Started Today
            </a>
            <a href="#services" className="btn-secondary">
              Explore Services
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="hero-visual"
        >
          <div className="floating-card">
            <div className="card-content">
              <div className="icon-wrapper">
                <div className="icon-bg"></div>
                <span className="icon">🚀</span>
              </div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock assistance</p>
            </div>
          </div>
          
          <div className="floating-card delay-1">
            <div className="card-content">
              <div className="icon-wrapper">
                <div className="icon-bg"></div>
                <span className="icon">💼</span>
              </div>
              <h3>Expert Team</h3>
              <p>Trained professionals</p>
            </div>
          </div>
          
          <div className="floating-card delay-2">
            <div className="card-content">
              <div className="icon-wrapper">
                <div className="icon-bg"></div>
                <span className="icon">📈</span>
              </div>
              <h3>Cost Efficient</h3>
              <p>Maximize your ROI</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default HeroSection;