import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Shield, Star, Users } from 'lucide-react';

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const clients = [
    'American Airlines',
    'AIG',
    'Bank of America',
    'Blue Cross Blue Shield',
    'IBM',
    'Ford',
    'General Electric',
    'MasterCard',
  ];

  const partnerBenefits = [
    {
      icon: Shield,
      title: 'IBM Premier Partner',
      description: 'Official IBM Premier Business Partner with direct access to enterprise resources',
    },
    {
      icon: Star,
      title: 'Certified Excellence',
      description: '25+ IBM certified specialists ensuring world-class implementation',
    },
    {
      icon: Building2,
      title: 'Enterprise Trust',
      description: 'Trusted by Fortune 500 companies for mission-critical systems',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 expert support with guaranteed response times',
    },
  ];

  return (
    <section id="partners" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-2 bg-navy-100 text-navy-700 rounded text-sm font-semibold mb-4"
          >
            Partners & Clients
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Trusted by <span className="text-accent-500">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to partner with IBM and serve some of the world's most recognized organizations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-navy-900 rounded-lg p-12 text-white">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6, type: 'spring' }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-lg mb-6"
              >
                <Building2 className="text-accent-400" size={40} />
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                IBM Premier Business Partner
              </h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                As an official IBM Premier Business Partner, we bring you unparalleled expertise,
                direct access to IBM resources, and the latest enterprise middleware technologies.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {partnerBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-navy-700 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-bold text-navy-900 mb-2">{benefit.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-gray-50 rounded-lg p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Notable Clients
            </h3>
            <p className="text-gray-600 text-lg">
              Fortune 500 companies trust us with their critical infrastructure
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="bg-white rounded-lg p-6 h-32 flex items-center justify-center text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div>
                    <Building2 className="text-gray-400 group-hover:text-navy-700 mx-auto mb-2 transition-colors" size={28} />
                    <span className="text-gray-700 font-semibold text-sm">
                      {client}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.7, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <button className="bg-navy-700 hover:bg-navy-800 text-white px-8 py-4 rounded font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Become a Client
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
