import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 51, 102, 0.05) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      {/* Animated Globe Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="relative w-[800px] h-[800px]"
        >
          {/* Globe grid lines */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`lat-${i}`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: `${100 - i * 12}%`,
                height: `${100 - i * 12}%`,
                border: '1px solid rgba(0, 51, 102, 0.2)',
                borderRadius: '50%',
              }}
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`lon-${i}`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
              }}
            >
              <div className="w-0.5 h-full bg-navy-900/20 mx-auto" />
            </motion.div>
          ))}

          {/* Animated dots */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`dot-${i}`}
              className="absolute w-2 h-2 bg-accent-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-block px-5 py-2 bg-navy-900 text-white rounded-full text-sm font-semibold">
              IBM Premier Business Partner
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-navy-900 leading-tight mb-8"
          >
            <span className="block">Enterprise Middleware</span>
            <span className="block text-accent-600">Excellence</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            Transforming businesses through cutting-edge IBM WebSphere and J2EE solutions.
            25+ certified specialists delivering unparalleled expertise.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <button className="group bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
              Explore Solutions
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="bg-white text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-navy-900 hover:bg-navy-900 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Contact Sales
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: '25+', label: 'Certified Specialists' },
              { value: '100+', label: 'Enterprise Projects' },
              { value: '20+', label: 'Years Experience' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all"
              >
                <div className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-3 bg-accent-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
