"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Code2, Palette, Sparkles, Layers, Zap, Lock } from "lucide-react"

const features = [
   {
      title: "Built on shadcn/ui",
      description: "Leveraging the power of shadcn/ui components with additional features and customizations.",
      icon: Layers,
   },
   {
      title: "Type-Safe",
      description: "Fully typed components with TypeScript for better development experience and fewer bugs.",
      icon: Code2,
   },
   {
      title: "Customizable",
      description: "Easily customize components to match your brand with CSS variables and Tailwind.",
      icon: Palette,
   },
   {
      title: "Performance First",
      description: "Optimized for performance with React Server Components and modern best practices.",
      icon: Zap,
   },
   {
      title: "Accessible",
      description: "ARIA-compliant components following WAI-ARIA guidelines for maximum accessibility.",
      icon: Lock,
   },
   {
      title: "Modern Features",
      description: "Built with the latest React features and patterns for modern web development.",
      icon: Sparkles,
   },
]

export default function CoreFeatures() {
   return (
      <section className="py-20 sm:py-32">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
               <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Core Features</h2>
               <p className="mt-4 text-lg text-muted-foreground">
                  Built with modern web development in mind, meshUI provides everything you need to create beautiful and
                  accessible user interfaces.
               </p>
            </div>
            <motion.div
               className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
               {features.map((feature, index) => (
                  <motion.div
                     key={feature.title}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                     <Card className="h-full bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                        <CardHeader>
                           <feature.icon className="h-8 w-8 text-primary" />
                           <CardTitle className="mt-4">{feature.title}</CardTitle>
                           <CardDescription>{feature.description}</CardDescription>
                        </CardHeader>
                     </Card>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>
   )
}

