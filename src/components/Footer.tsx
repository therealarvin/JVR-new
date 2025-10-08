import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Partners', href: '#partners' },
      { name: 'Careers', href: '#careers' },
    ],
    Services: [
      { name: 'IT Services', href: '#services' },
      { name: 'Training', href: '#services' },
      { name: 'Implementation', href: '#services' },
      { name: 'Deployment', href: '#services' },
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Support', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Newsletter', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer id="contact" className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-accent-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xl">JVR</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">JVR Systems, Inc.</h3>
                  <p className="text-sm text-gray-400">IBM Premier Business Partner</p>
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Enterprise middleware solutions powered by expertise, innovation, and unwavering commitment to excellence.
              </p>

              <div className="space-y-3">
                <motion.a
                  href="https://maps.google.com/?q=5151+Headquarters+Drive+Suite+290+Plano+TX+75024"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 text-gray-400 hover:text-accent-400 transition-colors group"
                >
                  <MapPin className="flex-shrink-0 mt-1" size={20} />
                  <span className="group-hover:text-white transition-colors">
                    5151 Headquarters Drive, Suite 290<br />
                    Plano, TX 75024
                  </span>
                </motion.a>

                <motion.a
                  href="tel:469-888-4120"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-accent-400 transition-colors group"
                >
                  <Phone size={20} />
                  <span className="group-hover:text-white transition-colors">469-888-4120</span>
                </motion.a>

                <motion.a
                  href="mailto:hr@jvrsystems.net"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-accent-400 transition-colors group"
                >
                  <Mail size={20} />
                  <span className="group-hover:text-white transition-colors">hr@jvrsystems.net</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 1), duration: 0.6 }}
            >
              <h4 className="text-lg font-bold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors inline-block"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © {new Date().getFullYear()} JVR Systems, Inc. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center hover:bg-accent-500 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex gap-6 text-sm"
            >
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
