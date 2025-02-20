import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function Footer() {
   return (
      <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
         <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center gap-6">
               <Link href="/" className="text-sm font-medium">
                  meshUI
               </Link>
               <nav className="flex gap-6">
                  <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">
                     Docs
                  </Link>
                  <Link href="/components" className="text-sm text-muted-foreground hover:text-foreground">
                     Components
                  </Link>
                  <Link href="/examples" className="text-sm text-muted-foreground hover:text-foreground">
                     Examples
                  </Link>
               </nav>
            </div>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
               <Button variant="ghost" size="icon" asChild>
                  <Link href="https://github.com">
                     <Github className="h-4 w-4" />
                     <span className="sr-only">GitHub</span>
                  </Link>
               </Button>
               <p className="text-sm text-muted-foreground">Built by meshUI</p>
            </div>
         </div>
      </footer>
   )
}

