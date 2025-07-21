import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaHeadset, FaKeyboard, FaUserTie, FaTools, FaBullhorn, FaComments, FaBuilding } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const services = [
    {
      icon: <FaHeadset />,
      title: "Customer Support",
      description: "24/7 multilingual customer service to enhance your client relationships and satisfaction.",
      features: ["24/7 Availability", "Multilingual Support", "Omnichannel Service"]
    },
    {
      icon: <FaKeyboard />,
      title: "Data Entry",
      description: "Accurate and efficient data processing services to streamline your business operations.",
      features: ["99.9% Accuracy", "Fast Turnaround", "Secure Processing"]
    },
    {
      icon: <FaUserTie />,
      title: "Virtual Assistant",
      description: "Dedicated virtual assistants to handle administrative tasks and boost productivity.",
      features: ["Administrative Support", "Calendar Management", "Email Handling"]
    },
    {
      icon: <FaTools />,
      title: "Technical Support",
      description: "Expert technical assistance to resolve issues and maintain system performance.",
      features: ["Expert Technicians", "Remote Support", "Quick Resolution"]
    },
    {
      icon: <FaBullhorn />,
      title: "Lead Generation",
      description: "Strategic lead generation services to expand your customer base and drive growth.",
      features: ["Qualified Leads", "Market Research", "CRM Integration"]
    },
    {
      icon: <FaComments />,
      title: "Live Chat Support",
      description: "Real-time chat support to engage visitors and convert them into customers.",
      features: ["Real-time Response", "Lead Capture", "Sales Support"]
    },
    {
      icon: <FaBuilding />,
      title: "Back Office Support",
      description: "Comprehensive back-office operations to optimize your business processes.",
      features: ["Process Optimization", "Document Management", "Quality Assurance"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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
    <section id="services" className="section services-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our BPO Services</h2>
          <p className="section-subtitle">
            Comprehensive business process outsourcing solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="service-icon">
                <div className="icon-bg"></div>
                {service.icon}
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="service-overlay">
                <div className="overlay-content">
                  <h4>Get Started</h4>
                  <p>Contact us to learn more about this service</p>
                  <a href="#contact" className="overlay-btn">
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="cta-content">
            <h3>Ready to Transform Your Business?</h3>
            <p>Let's discuss how our BPO services can help you achieve your goals</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn-primary">Get Free Consultation</a>
              <a href="https://wa.me/447458676864" className="btn-secondary" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;