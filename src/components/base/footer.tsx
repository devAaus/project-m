import Link from "next/link"
import { GithubButton } from "@/components/ui/button"

const navlinks = [
   { href: '/docs', label: 'Documentation' },
   { href: '/docs/components', label: 'Components' },
]

export default function Footer() {
   return (
      <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
         <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center gap-6">
               <Link className="mr-6 flex items-center space-x-2" href="/">
                  <span className=" font-bold inline-block">meshUI</span>
               </Link>
               <nav className="flex gap-6">
                  {navlinks.map(({ href, label }) => (
                     <Link
                        key={href}
                        href={href}
                        className="text-sm text-muted-foreground hover:text-foreground"
                     >
                        {label}
                     </Link>
                  ))}
               </nav>
            </div>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
               <GithubButton />
               <p className="text-sm text-muted-foreground">
                  Built by {' '}
                  <Link href='https://aayush-ghimire.com.np/' target="_blank" className="text-foreground hover:underline">
                     Aayush
                  </Link>
               </p>
            </div>
         </div>
      </footer>
   )
}

