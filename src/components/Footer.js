import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebookF />, url: '#', name: 'Facebook' },
    { icon: <FaTwitter />, url: '#', name: 'Twitter' },
    { icon: <FaLinkedinIn />, url: '#', name: 'LinkedIn' },
    { icon: <FaInstagram />, url: '#', name: 'Instagram' },
    { icon: <FaYoutube />, url: '#', name: 'YouTube' }
  ];

  const services = [
    'Customer Support',
    'Data Entry',
    'Virtual Assistant',
    'Technical Support',
    'Lead Generation',
    'Live Chat Support',
    'Back Office Support'
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' }
  ];

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-pattern"></div>
      </div>
      
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-section company-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="company-logo">
              <h2>GlobalDeskBPO</h2>
              <div className="logo-underline"></div>
            </div>
            <p className="company-description">
              Your trusted partner for comprehensive Business Process Outsourcing solutions. 
              We help businesses worldwide optimize their operations and achieve sustainable growth.
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+44 7458 676864</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>info@globaldeskbpo.com</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Global Operations Center</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="section-title">Our Services</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="footer-link">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="section-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="section-title">Connect With Us</h3>
            <p className="social-description">
              Follow us on social media for updates and industry insights.
            </p>
            
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            <div className="whatsapp-footer">
              <h4>Need Immediate Help?</h4>
              <a 
                href="https://wa.me/447458676864" 
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-footer-btn"
              >
                <span className="whatsapp-icon">📱</span>
                WhatsApp Us Now
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} GlobalDeskBPO. All rights reserved.</p>
            </div>
            
            <div className="footer-bottom-links">
              <a href="#" className="bottom-link">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#" className="bottom-link">Terms of Service</a>
              <span className="separator">|</span>
              <a href="#" className="bottom-link">Cookie Policy</a>
            </div>
            
            <div className="made-with">
              <p>Made with ❤️ for your business success</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;