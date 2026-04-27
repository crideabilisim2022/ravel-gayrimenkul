'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function LoadingScreen({ onLoadingComplete }) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setIsLoading(false)
            onLoadingComplete?.()
          }, 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(timer)
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative mb-12"
          >
            {/* Logo Container */}
            <div className="flex flex-col items-center">
              {/* Building Icon Animation */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-4"
              >
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  className="text-accent"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    d="M40 5L75 25V75H5V25L40 5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <motion.rect
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    x="15"
                    y="35"
                    width="15"
                    height="40"
                    fill="currentColor"
                    opacity="0.3"
                  />
                  <motion.rect
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    x="50"
                    y="35"
                    width="15"
                    height="40"
                    fill="currentColor"
                    opacity="0.3"
                  />
                  <motion.rect
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    x="32"
                    y="50"
                    width="16"
                    height="25"
                    fill="currentColor"
                  />
                </svg>
              </motion.div>

              {/* Company Name */}
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground tracking-wider text-center"
              >
                RAVEL YAPI
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-accent text-sm md:text-base tracking-[0.3em] mt-2"
              >
                GYO GAYRIMENKUL YATIRIM ORTAKLIĞI
              </motion.p>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '200px', opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="relative"
          >
            <div className="h-1 w-[200px] bg-primary-foreground/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-primary-foreground/60 text-xs mt-3 text-center"
            >
              Yükleniyor...
            </motion.p>
          </motion.div>

          {/* Decorative Lines */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-20 left-0 right-0 flex justify-center gap-2"
          >
            <div className="h-px w-16 bg-accent/40" />
            <div className="h-px w-8 bg-accent" />
            <div className="h-px w-16 bg-accent/40" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
