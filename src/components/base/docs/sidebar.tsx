"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

const sidebarItems = [
   {
      title: "Documentation", subItems: [
         { title: "Introduction", href: "/docs" }
      ]
   },
   {
      title: "Components", subItems: [
         { title: "Button", href: "/docs/components/buttons" },
         { title: "Card", href: "/docs/components/cards" },
         { title: "Input", href: "/docs/components/inputs" },
         { title: "Checkbox", href: "/docs/components/checkboxes" },
         { title: "Radio", href: "/docs/components/radios" },
         { title: "Select", href: "/docs/components/selects" },
         { title: "Slider", href: "/docs/components/sliders" },
         { title: "Switch", href: "/docs/components/switches" },
         { title: "Textarea", href: "/docs/components/textareas" },
         { title: "Tabs", href: "/docs/components/tabs" },
      ]
   },
]

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
   const pathName = usePathname()
   return (
      <div className={cn("pb-12", className)}>
         <div className="space-y-4 py-4">
            <div className="px-3 py-2">
               <div className="space-y-1">
                  {sidebarItems.map((item) => (
                     <div key={item.title}>
                        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                           {item.title}
                        </h2>
                        {item.subItems && (
                           <div className="ml-4 space-y-1">
                              {item.subItems.map((subItem) => (
                                 <Button
                                    key={subItem.title}
                                    asChild
                                    variant="ghost"
                                    className={`w-full justify-start ${pathName === subItem.href ? "text-primary" : "text-foreground/60 hover:text-primary"}`}
                                 >
                                    <Link href={subItem.href}>{subItem.title}</Link>
                                 </Button>
                              ))}
                           </div>
                        )}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

