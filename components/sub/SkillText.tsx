"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center px-4 text-center'>
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-2 px-3 border border-[#7042f88b] opacity-90 mb-3"
      >
        <div className="flex items-center justify-center">
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
          <h1 className="Welcome-text text-xs sm:text-sm">
            Think smarter. Build better.
          </h1>
        </div>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-xl sm:text-2xl md:text-3xl text-white font-medium mt-2 mb-4'
      >
        Building applications using the latest technologies.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className='text-sm sm:text-lg text-gray-200 mb-10 mt-2 font-light'
      >
        Ideas remembered. Tasks done. Deadlines crushed.
      </motion.div>
    </div>
  )
}

export default SkillText
