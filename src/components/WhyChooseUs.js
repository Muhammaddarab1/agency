import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaClock, FaUsers, FaDollarSign, FaShieldAlt, FaGlobe, FaChartLine, FaAward, FaHandshake } from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const reasons = [
    {
      icon: <FaClock />,
      title: "24/7 Support",
      description: "Round-the-clock availability to ensure your business never stops running.",
      color: "#667eea"
    },
    {
      icon: <FaUsers />,
      title: "Trained Agents",
      description: "Highly skilled professionals with extensive training and experience.",
      color: "#764ba2"
    },
    {
      icon: <FaDollarSign />,
      title: "Cost Efficiency",
      description: "Reduce operational costs by up to 60% while maintaining quality.",
      color: "#667eea"
    },
    {
      icon: <FaShieldAlt />,
      title: "Data Security",
      description: "Enterprise-grade security measures to protect your sensitive information.",
      color: "#764ba2"
    },
    {
      icon: <FaGlobe />,
      title: "Global Reach",
      description: "Serving clients worldwide across different time zones and languages.",
      color: "#667eea"
    },
    {
      icon: <FaChartLine />,
      title: "Scalable Solutions",
      description: "Flexible services that grow with your business needs and requirements.",
      color: "#764ba2"
    },
    {
      icon: <FaAward />,
      title: "Quality Assurance",
      description: "Rigorous quality control processes to ensure exceptional service delivery.",
      color: "#667eea"
    },
    {
      icon: <FaHandshake />,
      title: "Dedicated Partnership",
      description: "Long-term partnerships built on trust, reliability, and mutual success.",
      color: "#764ba2"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="why-choose-us" className="section why-choose-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Why Choose GlobalDeskBPO?</h2>
          <p className="section-subtitle">
            Discover the advantages that make us the preferred BPO partner for businesses worldwide
          </p>
        </motion.div>

        <motion.div
          className="reasons-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="reason-card"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="reason-icon" style={{ '--icon-color': reason.color }}>
                <div className="icon-circle">
                  <div className="icon-bg"></div>
                  {reason.icon}
                </div>
                <div className="icon-pulse"></div>
              </div>
              
              <div className="reason-content">
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
              </div>
              
              <div className="reason-number">
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="stats-showcase"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="stats-container">
            <div className="stat-box">
              <div className="stat-icon">🎯</div>
              <div className="stat-number">99.5%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            
            <div className="stat-box">
              <div className="stat-icon">⚡</div>
              <div className="stat-number">&lt; 2hrs</div>
              <div className="stat-label">Response Time</div>
            </div>
            
            <div className="stat-box">
              <div className="stat-icon">🌟</div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            
            <div className="stat-box">
              <div className="stat-icon">🚀</div>
              <div className="stat-number">60%</div>
              <div className="stat-label">Cost Reduction</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="testimonial-preview"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="testimonial-content">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">
              "GlobalDeskBPO has transformed our customer service operations. Their 24/7 support 
              and professional team have significantly improved our customer satisfaction rates."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">👤</div>
              <div className="author-info">
                <div className="author-name">Sarah Johnson</div>
                <div className="author-title">CEO, TechStart Inc.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;