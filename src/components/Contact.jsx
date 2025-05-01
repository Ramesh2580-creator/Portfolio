import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, message: '' });

    try {
      // Replace these with your actual EmailJS credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Your Name', // Replace with your name
        reply_to: formData.email,
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setStatus({
        submitting: false,
        message: 'Message sent successfully! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        submitting: false,
        message: 'There was an error sending your message. Please try again.'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-black text-white px-16 py-20" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="backdrop-blur-sm p-8 rounded-2xl"
          >
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Ready to start a project or just want to say hello? I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <motion.div
                className="flex items-center p-4rounded-xl hover:bg-gray-700/50 transition-colors duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                  <FaEnvelope className="text-blue-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:ry9777319@gmail.com" className="hover:text-blue-400 transition-colors">
                    ry9777319@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center p-4 rounded-xl hover:bg-gray-700/50 transition-colors duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-purple-500/20 rounded-lg mr-4">
                  <FaPhone className="text-purple-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <span>+977 9806241220</span>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center p-4rounded-xl hover:bg-gray-700/50 transition-colors duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-pink-500/20 rounded-lg mr-4">
                  <FaMapMarkedAlt className="text-pink-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <span>Mahadevsthan, Koteshwor, Kathmandu, Nepal</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="backdrop-blur-sm p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Hi, I'd like to talk about..."
                />
              </div>

              {status.message && (
                <div className={`p-4 rounded-xl ${status.message.includes('successfully') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {status.message}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={status.submitting}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane className="text-sm" />
                <span>{status.submitting ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;