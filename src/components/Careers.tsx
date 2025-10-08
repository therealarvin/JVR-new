import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, TrendingUp, Heart, Lightbulb, Mail } from 'lucide-react';

const Careers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Continuous learning opportunities and clear advancement paths',
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and supportive work environment',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Work with cutting-edge technologies and industry leaders',
    },
    {
      icon: Briefcase,
      title: 'Competitive Benefits',
      description: 'Comprehensive health coverage and retirement plans',
    },
  ];

  return (
    <section id="careers" className="py-24 bg-gray-50" ref={ref}>
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
            Join Our Team
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Build Your <span className="text-accent-500">Career</span> With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a team of passionate professionals dedicated to excellence in enterprise middleware solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-navy-700 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="bg-navy-900 rounded-lg p-12 text-center text-white"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.6, type: 'spring' }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-lg mb-6"
          >
            <Mail className="text-accent-400" size={40} />
          </motion.div>

          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make an Impact?
          </h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals to join our team.
            Send your resume to start your journey with JVR Systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hr@jvrsystems.net"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={20} />
              hr@jvrsystems.net
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
