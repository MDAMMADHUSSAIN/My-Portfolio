import React from "react";
import { motion } from "framer-motion";



const Teams = () => {



  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-black px-4 py-16 text-white">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-400"
        >
          This Page will be Coming soon !
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-100 mt-4 max-w-2xl mx-auto"
        >
          Thanks for your Patience
        </motion.p>
      </div>
    </div>
  );
};

export default Teams;
