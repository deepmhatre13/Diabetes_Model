import { useState } from 'react';
import { motion } from 'framer-motion';
import ResultCard from './ResultCard';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Form = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    family_history: '',
    medication: '',
    sugar_intake: '',
    physical_activity: ''
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload = {
        AGE: parseInt(formData.age),
        GENDER: parseInt(formData.gender),
        FAMILY_HISTORY: parseInt(formData.family_history),
        MEDICATION_FOR_SUGAR: parseInt(formData.medication),
        SUGARY_FOOD_INTAKE: parseInt(formData.sugar_intake),
        PHYSICAL_ACTIVITY: parseInt(formData.physical_activity)
      };

      const response = await fetch(`${API_BASE_URL}/predict/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Backend error response:', errorText);
        throw new Error('Failed to get prediction');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
      // For demo fallback
      setResult({ prediction: Math.random() > 0.5 ? 1 : 0 });
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = Object.values(formData).every(value => value !== '');

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.div 
          className="glass-card p-8 mb-8"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Age */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                <label className="block text-sm font-medium text-[#0a0a23] dark:text-[#f1f5f9] mb-2">Age</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} className="input-field" placeholder="Enter your age" min="1" max="120" required />
              </motion.div>

              {/* Gender */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <label className="block text-sm font-medium text-[#0a0a23] dark:text-[#f1f5f9] mb-2">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} className="input-field" required>
                  <option value="">Select Gender</option>
                  <option value="0">Female</option>
                  <option value="1">Male</option>
                </select>
              </motion.div>

              {/* Family History */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <label className="block text-sm font-medium text-[#0a0a23] dark:text-[#f1f5f9] mb-2">Family History of Diabetes</label>
                <select name="family_history" value={formData.family_history} onChange={handleChange} className="input-field" required>
                  <option value="">Select Option</option>
                  <option value="0">No</option>
                  <option value="1">Yes</option>
                </select>
              </motion.div>

              {/* Medication */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                <label className="block text-sm font-medium text-[#0a0a23] dark:text-[#f1f5f9] mb-2">Currently Taking Medication</label>
                <select name="medication" value={formData.medication} onChange={handleChange} className="input-field" required>
                  <option value="">Select Option</option>
                  <option value="0">No</option>
                  <option value="1">Yes</option>
                </select>
              </motion.div>

              {/* Sugar Intake */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                <label className="block text-sm font-medium text-[#0a0a23] dark:text-[#f1f5f9] mb-2">Sugar Intake Level</label>
                <select name="sugar_intake" value={formData.sugar_intake} onChange={handleChange} className="input-field" required>
                  <option value="">Select Level</option>
                  <option value="1">Low</option>
                  <option value="2">Medium</option>
                  <option value="3">High</option>
                </select>
              </motion.div>

              {/* Physical Activity */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                <label className="block text-sm font-medium text-[#0a0a23] dark:text-[#f1f5f9] mb-2">Physical Activity Level (1-5)</label>
                <select name="physical_activity" value={formData.physical_activity} onChange={handleChange} className="input-field" required>
                  <option value="">Select Level</option>
                  <option value="1">Very Low</option>
                  <option value="2">Low</option>
                  <option value="3">Moderate</option>
                  <option value="4">High</option>
                  <option value="5">Very High</option>
                </select>
              </motion.div>
            </div>

            {/* Submit Button */}
            <motion.div className="flex justify-center pt-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              <motion.button
                type="submit"
                disabled={!isFormValid || loading}
                className={`btn-primary ${!isFormValid || loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                whileHover={isFormValid && !loading ? { scale: 1.05 } : {}}
                whileTap={isFormValid && !loading ? { scale: 0.95 } : {}}
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Analyzing...</span>
                  </div>
                ) : (
                  'Get Prediction'
                )}
              </motion.button>
            </motion.div>
          </form>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg"
            >
              <p className="text-red-600 dark:text-red-400">
                Error: {error} (Using demo result)
              </p>
            </motion.div>
          )}
        </motion.div>

        {result && <ResultCard result={result} />}
      </div>
    </motion.div>
  );
};

export default Form;
