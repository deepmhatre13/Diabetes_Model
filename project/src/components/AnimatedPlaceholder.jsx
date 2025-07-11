import { motion } from 'framer-motion';

const AnimatedPlaceholder = () => {
  return (
    <div className="relative w-48 h-48 mx-auto">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-transparent"
        style={{
          background: 'linear-gradient(45deg, #00f0ff, #0ef4f0, #00e0ff, transparent)',
          backgroundClip: 'padding-box',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full rounded-full bg-[#caf0f8] dark:bg-[#1e293b] opacity-90"></div>
      </motion.div>

      {/* Middle pulsing ring */}
      <motion.div
        className="absolute inset-4 rounded-full border-2 border-[#00e0ff]"
        style={{
          boxShadow: '0 0 20px rgba(0, 224, 255, 0.4), inset 0 0 20px rgba(0, 224, 255, 0.1)',
        }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Inner brain/AI core */}
      <motion.div
        className="absolute inset-8 rounded-full flex items-center justify-center"
        style={{
          background: 'radial-gradient(circle, #48dbfb 0%, #00e0ff 50%, transparent 100%)',
        }}
        animate={{ 
          scale: [0.9, 1, 0.9],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* AI Brain Icon */}
        <motion.svg
          className="w-16 h-16 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
          <circle cx="9" cy="9" r="1" fill="currentColor" />
          <circle cx="15" cy="9" r="1" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 13h8" />
        </motion.svg>
      </motion.div>

      {/* Floating data points */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: '#00e0ff',
            boxShadow: '0 0 8px #00e0ff',
            left: `${20 + Math.cos((i * 60) * Math.PI / 180) * 80}px`,
            top: `${20 + Math.sin((i * 60) * Math.PI / 180) * 80}px`,
          }}
          animate={{
            scale: [0.5, 1, 0.5],
            opacity: [0.3, 1, 0.3],
            x: [0, Math.cos((i * 60 + 30) * Math.PI / 180) * 10, 0],
            y: [0, Math.sin((i * 60 + 30) * Math.PI / 180) * 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Scanning lines */}
      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0deg, rgba(0, 224, 255, 0.3) 30deg, transparent 60deg)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* Health pulse indicators */}
      <motion.div
        className="absolute -right-4 top-1/2 transform -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-3 h-3 rounded-full bg-[#48dbfb] shadow-lg" style={{ boxShadow: '0 0 10px #48dbfb' }}></div>
      </motion.div>

      <motion.div
        className="absolute -left-4 top-1/3 transform -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <div className="w-2 h-2 rounded-full bg-[#00e0ff] shadow-lg" style={{ boxShadow: '0 0 8px #00e0ff' }}></div>
      </motion.div>

      <motion.div
        className="absolute -bottom-2 left-1/3 transform -translate-x-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
        <div className="w-2 h-2 rounded-full bg-[#a3ecff] shadow-lg" style={{ boxShadow: '0 0 8px #a3ecff' }}></div>
      </motion.div>
    </div>
  );
};

export default AnimatedPlaceholder;