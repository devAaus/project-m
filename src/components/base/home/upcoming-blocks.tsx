"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight, LayoutDashboard, ShoppingCart, Calendar, MessageSquare, FileText, Users } from "lucide-react"

// const upcomingBlocks = [
//    {
//       title: "Dashboard",
//       description: "Complete dashboard layout with charts, stats, and data visualization.",
//       icon: LayoutDashboard,
//       status: "In Progress",
//    },
//    {
//       title: "E-commerce",
//       description: "Product listings, cart, checkout flow, and order management.",
//       icon: ShoppingCart,
//       status: "Coming Soon",
//    },
//    {
//       title: "Calendar",
//       description: "Interactive calendar with events, scheduling, and time management.",
//       icon: Calendar,
//       status: "Coming Soon",
//    },
//    {
//       title: "Chat Interface",
//       description: "Real-time chat interface with message threads and notifications.",
//       icon: MessageSquare,
//       status: "Planning",
//    },
//    {
//       title: "Documentation",
//       description: "Documentation layout with sidebar navigation and search.",
//       icon: FileText,
//       status: "In Progress",
//    },
//    {
//       title: "Authentication",
//       description: "Sign in, sign up, password reset, and user profile flows.",
//       icon: Users,
//       status: "Coming Soon",
//    },
// ]

export default function UpcomingBlocks() {
   return (
      <section className="py-20 sm:py-32">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
               <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Coming Soon....</h2>
               <p className="mt-4 text-lg text-muted-foreground">
                  Exciting new UI blocks and templates coming to meshUI. Stay tuned for these upcoming features.
               </p>
            </div>
            {/* <motion.div
               className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
               {upcomingBlocks.map((block, index) => (
                  <motion.div
                     key={block.title}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                     <Card className="group h-full bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                           <div className="flex items-center justify-between">
                              <block.icon className="h-8 w-8 text-primary" />
                              <Badge
                                 variant={
                                    block.status === "In Progress"
                                       ? "default"
                                       : block.status === "Coming Soon"
                                          ? "secondary"
                                          : "outline"
                                 }
                              >
                                 {block.status}
                              </Badge>
                           </div>
                           <CardTitle className="mt-4">{block.title}</CardTitle>
                           <CardDescription>{block.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <Button variant="ghost" className="group p-0 text-primary">
                              Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                           </Button>
                        </CardContent>
                     </Card>
                  </motion.div>
               ))}
            </motion.div> */}
         </div>
      </section>
   )
}

