import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="section about-section" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About GlobalDeskBPO
          </motion.h2>
          
          <motion.p variants={itemVariants} className="section-subtitle">
            Empowering businesses worldwide with exceptional outsourcing solutions
          </motion.p>

          <div className="about-content">
            <motion.div variants={itemVariants} className="about-text">
              <div className="text-block">
                <h3>Our Mission</h3>
                <p>
                  At GlobalDeskBPO, we are dedicated to transforming businesses through 
                  innovative outsourcing solutions. Our mission is to provide world-class 
                  business process outsourcing services that enable our clients to focus 
                  on their core competencies while we handle their operational excellence.
                </p>
              </div>
              
              <div className="text-block">
                <h3>Our Values</h3>
                <div className="values-grid">
                  <div className="value-item">
                    <div className="value-icon">🎯</div>
                    <h4>Excellence</h4>
                    <p>Delivering superior quality in every project</p>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">🤝</div>
                    <h4>Trust</h4>
                    <p>Building lasting partnerships through reliability</p>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">🚀</div>
                    <h4>Innovation</h4>
                    <p>Embracing cutting-edge solutions and technologies</p>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">🌍</div>
                    <h4>Global Reach</h4>
                    <p>Serving clients across different time zones</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="about-stats">
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support Available</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">99.9%</div>
                  <div className="stat-label">Uptime Guarantee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
              </div>
              
              <div className="about-image">
                <div className="image-placeholder">
                  <div className="image-content">
                    <div className="floating-elements">
                      <div className="element element-1">💼</div>
                      <div className="element element-2">📊</div>
                      <div className="element element-3">🎯</div>
                      <div className="element element-4">⚡</div>
                    </div>
                    <div className="center-icon">🌟</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;