import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import AnimatedPlaceholder from './AnimatedPlaceholder';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <motion.header 
      className="relative z-10 pt-8 pb-16"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 bg-[#00e0ff] rounded-full flex items-center justify-center" style={{ boxShadow: '0 0 20px rgba(0, 224, 255, 0.4)' }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#0a0a23] dark:text-[#f1f5f9]">
                DiabetesAI
              </h1>
              <p className="text-[#3a3a50] dark:text-[#94a3b8] text-sm">
                Predictive Health Analytics
              </p>
            </div>
          </motion.div>
          <ThemeToggle />
        </div>
        
        <div className="text-center">
          <motion.div 
            className="lottie-container mb-8"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <AnimatedPlaceholder />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a23] dark:text-[#f1f5f9] mb-4">
              AI-Powered Diabetes
              <span className="text-[#00d4ff] block">
                Risk Assessment
              </span>
            </h2>
            <p className="text-xl text-[#3a3a50] dark:text-[#94a3b8] max-w-2xl mx-auto">
              Get instant predictions about your diabetes risk using advanced machine learning algorithms.
              Simply fill out the form below to receive your personalized assessment.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;