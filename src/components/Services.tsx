import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Settings, BookOpen, Rocket, Package } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Settings,
      title: 'IT Services',
      description: 'Comprehensive IT solutions tailored to your business needs, from consulting to ongoing support and optimization.',
      features: ['24/7 Support', 'Infrastructure Management', 'System Optimization', 'Performance Tuning'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    },
    {
      icon: BookOpen,
      title: 'Training',
      description: 'Expert-led training programs to empower your team with cutting-edge middleware and J2EE technologies.',
      features: ['IBM WebSphere', 'J2EE Technologies', 'Best Practices', 'Certification Prep'],
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    },
    {
      icon: Rocket,
      title: 'Implementation',
      description: 'Seamless implementation of enterprise middleware solutions with minimal disruption to your operations.',
      features: ['Strategic Planning', 'Custom Development', 'Integration', 'Testing & QA'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    },
    {
      icon: Package,
      title: 'Deployment',
      description: 'Rapid, reliable deployment services ensuring your solutions go live smoothly and perform optimally.',
      features: ['CI/CD Pipelines', 'Cloud Migration', 'Scalability', 'Monitoring'],
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white" ref={ref}>
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
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Comprehensive <span className="text-accent-500">Middleware Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From consultation to deployment, we provide end-to-end services
            to ensure your enterprise infrastructure operates at peak performance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-900/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                    <service.icon className="text-navy-700" size={32} />
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-20 bg-navy-900 rounded-lg p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Infrastructure?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can drive your business forward
          </p>
          <button className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
