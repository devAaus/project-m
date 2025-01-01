'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function BackgroundGradient() {
   const [dots, setDots] = useState<{ x: number; y: number; delay: number }[]>([])

   useEffect(() => {
      const newDots = []
      const numDots = 50 // Adjust this number to change the density of dots

      for (let i = 0; i < numDots; i++) {
         newDots.push({
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 5,
         })
      }

      setDots(newDots)
   }, [])

   return (
      <div className="fixed inset-0 z-[-1] overflow-hidden">
         <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background"
            animate={{
               opacity: [0.5, 1, 0.5],
            }}
            transition={{
               duration: 10,
               repeat: Infinity,
               repeatType: 'reverse',
            }}
         />
         <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
         {dots.map((dot, index) => (
            <motion.div
               key={index}
               className="absolute h-1 w-1 rounded-full bg-primary/20"
               style={{
                  left: `${dot.x}%`,
                  top: `${dot.y}%`,
               }}
               animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1],
               }}
               transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: dot.delay,
               }}
            />
         ))}
      </div>
   )
}

