import { motion } from 'framer-motion';
import logo from '@/assets/Logo-Amicus.png';

interface LoadingAnimationProps {
  isLoading: boolean;
}

export const LoadingAnimation = ({ isLoading }: LoadingAnimationProps) => {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div className="flex flex-col items-center space-y-4">
        {/* AMiCUS Logo Animation */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-24 h-24 rounded-full flex items-center justify-center"
        >
          <motion.span
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className=""
          >
           <img src={logo} alt="AMiCUS Logo" className="w-24 h-24" />
          </motion.span>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          animate={{
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-xl font-semibold text-gray-700"
        >
          AMiCUS Timișoara
        </motion.h2>

        {/* Loading Dots */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
                backgroundColor: ['#DC2626', '#000000', '#DC2626']
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
              className="w-3 h-3 rounded-full"
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="h-full w-1/3 bg-gradient-to-r from-primary-red to-black rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

