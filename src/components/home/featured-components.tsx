'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { BentoGrid, BentoGridItem } from "../ui/bento-grid"
import {
   IconClipboardCopy,
   IconFileBroken,
   IconSignature,
   IconTableColumn,
} from "@tabler/icons-react";

export default function FeaturedComponents() {
   const ref = useRef(null);
   const isInView = useInView(ref);

   return (
      <section className="py-20 sm:py-32">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
               <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Featured Components</h2>
               <p className="mt-4 text-lg text-muted-foreground">
                  Explore some of our most popular and versatile components, designed to elevate your user interfaces.
               </p>
            </div>
            <motion.div
               className="mt-16 grid"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, staggerChildren: 0.1 }}
               ref={ref}
            >
               <BentoGrid className="w-full">
                  {items.map((item, i) => (
                     <BentoGridItem
                        key={i}
                        title={item.title}
                        header={item.header}
                        description={item.description}
                        className={item.className}
                     />
                  ))}
               </BentoGrid>
            </motion.div>
         </div>
      </section>
   )
}

const Skeleton = () => (
   <Button>Default</Button>
);

const items = [
   {
      title: "Button",
      description: "Trigger actions with a click or tap.",
      header: <Button>Default</Button>,
      className: "md:col-span-1",
   },
   {
      title: "Tabs",
      description: "Organize content into separate views.",
      header: <Tabs defaultValue="tab1">
         <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
         </TabsList>
         <TabsContent value="tab1">Content for Tab 1</TabsContent>
         <TabsContent value="tab2">Content for Tab 2</TabsContent>
      </Tabs>,
      className: "md:col-span-1",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
   },
   {
      title: "Slider",
      description: "Control values with a draggable thumb.",
      header: <Slider />,
      className: "md:col-span-1",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
   },
   {
      title: "Switch",
      description:
         "Toggle between on and off states.",
      header: <div className="flex items-center space-x-2">
         <Label htmlFor="switch">
            Enable Feature
         </Label>
         <Switch id="switch" />
      </div>,
      className: "md:col-span-1",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
   },
];



