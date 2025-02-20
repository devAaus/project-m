'use client'

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Code, GithubIcon, Layers, Palette } from 'lucide-react'
import Link from "next/link"
import { useRef } from 'react'
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"

export default function Hero() {
   const ref = useRef(null)
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"]
   })

   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
   const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])


   const words = [
      {
         text: "Craft",
      },
      {
         text: "Beautiful",
      },
      {
         text: "Interfaces",
      },
   ];

   return (
      <section ref={ref} className="relative overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
         <motion.div
            className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"
            style={{ y, opacity }}
         />
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
               className="text-center"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
            >
               <motion.h1
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
               >
                  <TypewriterEffectSmooth words={words} />
               </motion.h1>
               <motion.p
                  className="mt-6 text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
               >
                  Empower your development with meshUI, our modern, customizable, and accessible component library.
               </motion.p>
               <motion.div
                  className="mt-8 flex flex-col sm:flex-row justify-center gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
               >
                  <Link href="/docs">
                     <Button size="lg" className="group">
                        Get started
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                     </Button>
                  </Link>
                  <Link href="/">
                     <Button size="lg" variant="outline" className="group">
                        <GithubIcon className="transition-transform group-hover:animate-pulse" />
                        GitHub
                     </Button>
                  </Link>
               </motion.div>
            </motion.div>
         </div>
      </section>
   )
}

