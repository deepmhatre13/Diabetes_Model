import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Form from './components/Form';
import './App.css';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        {/* Background Pattern */}
        <div className="fixed inset-0 opacity-10 dark:opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>

        {/* Main Content */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Header />
          <Form />
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="relative z-10 py-8 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="container mx-auto px-4 text-center">
            <div className="glass-card p-6 max-w-4xl mx-auto">
              <p className="text-[#0a0a23] dark:text-[#f1f5f9] mb-4">
                © 2025 DiabetesAI - Advanced Health Prediction System
              </p>
              <p className="text-sm text-[#3a3a50] dark:text-[#94a3b8]">
                This application uses artificial intelligence for diabetes risk assessment. 
                Results are for informational purposes only and should not replace professional medical advice.
              </p>
            </div>
          </div>
        </motion.footer>
      </div>
    </ThemeProvider>
  );
}

export default App;