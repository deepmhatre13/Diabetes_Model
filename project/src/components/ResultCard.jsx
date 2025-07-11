import { motion } from 'framer-motion';

const ResultCard = ({ result }) => {
  const isDiabetic = result.prediction === 1;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="gradient-border">
        <div className={`glass-card p-8 text-center ${isDiabetic ? 'bg-red-500/10' : 'bg-green-500/10'}`}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-6"
          >
            <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${
              isDiabetic ? 'bg-red-500' : 'bg-green-500'
            }`}>
              {isDiabetic ? (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              ) : (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-[#0a0a23] dark:text-[#f1f5f9] mb-4">
              Prediction Result
            </h3>
            <div className={`text-3xl font-bold mb-4 ${
              isDiabetic ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'
            }`}>
              {isDiabetic ? 'You are Diabetic' : 'You are Not Diabetic'}
            </div>
            <p className="text-[#3a3a50] dark:text-[#94a3b8] mb-6">
              {isDiabetic 
                ? 'Based on the provided information, our AI model suggests you may have diabetes. Please consult with a healthcare professional for proper diagnosis and treatment.'
                : 'Based on the provided information, our AI model suggests you are not likely to have diabetes. Continue maintaining a healthy lifestyle!'
              }
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-3"
          >
            <div className="bg-[#e0fbfc]/30 dark:bg-[#1e293b]/20 rounded-lg p-4 border border-[#a0eaff]/20">
              <h4 className="font-semibold text-[#0a0a23] dark:text-[#f1f5f9] mb-2">
                Recommendations:
              </h4>
              <ul className="text-sm text-[#3a3a50] dark:text-[#94a3b8] space-y-1">
                {isDiabetic ? (
                  <>
                    <li>• Consult with an endocrinologist immediately</li>
                    <li>• Monitor blood glucose levels regularly</li>
                    <li>• Follow a diabetic-friendly diet</li>
                    <li>• Increase physical activity as recommended</li>
                  </>
                ) : (
                  <>
                    <li>• Maintain a balanced, healthy diet</li>
                    <li>• Regular exercise and physical activity</li>
                    <li>• Annual health check-ups</li>
                    <li>• Monitor family history factors</li>
                  </>
                )}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-xs text-[#3a3a50] dark:text-[#94a3b8]"
          >
            <p>
              * This prediction is based on AI analysis and should not replace professional medical advice.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultCard;