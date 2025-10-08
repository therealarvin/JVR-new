import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Award, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const values = [
    {
      icon: Target,
      title: 'Strategic Excellence',
      description: 'Leadership is a potent combination of strategy and character. We embody both in every solution we deliver.',
    },
    {
      icon: Award,
      title: 'Focused Innovation',
      description: 'Success comes from doing a few things exceptionally well. We specialize in middleware excellence to ensure your success.',
    },
    {
      icon: Users,
      title: 'Expert Training',
      description: 'Success in business requires training, discipline, and dedication. Our certified team brings all three to your projects.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'We invest in our people and technologies to stay at the forefront of enterprise middleware solutions.',
    },
  ];

  const stats = [
    { value: '25+', label: 'IBM Certified Specialists' },
    { value: '100+', label: 'Enterprise Projects' },
    { value: '20+', label: 'Years of Excellence' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            About JVR Systems
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Middleware Infrastructure <span className="text-accent-500">Experts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As an IBM Premier Business Partner, we deliver enterprise-grade middleware solutions
            powered by IBM WebSphere and J2EE technologies. Our team of 25+ certified specialists
            brings decades of combined experience to transform your infrastructure.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <div className="text-4xl md:text-5xl font-bold text-navy-700 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-navy-700 rounded-lg flex items-center justify-center">
                  <value.icon className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-20 bg-navy-900 rounded-lg p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Our Commitment to Excellence
          </h3>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-gray-300">
            We don't just implement technology—we architect solutions that drive business transformation.
            Our expertise in IT services, training, implementation, and deployment ensures your
            middleware infrastructure is robust, scalable, and future-ready. Partner with us to
            experience the difference that true expertise makes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
